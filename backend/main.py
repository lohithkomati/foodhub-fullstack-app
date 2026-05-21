from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from bson import ObjectId

import stripe

from app.api.auth import router as auth_router

from app.database import (
    foods_collection,
    orders_collection,
)

# STRIPE SECRET KEY

import os
from dotenv import load_dotenv

load_dotenv()

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HOME

@app.get("/")
def home():

    return {
        "message": "Restaurant API Running"
    }

# AUTH ROUTES

app.include_router(auth_router)

# GET ALL FOODS

@app.get("/foods")
def get_foods():

    foods = list(
        foods_collection.find(
            {},
            {"_id": 0}
        )
    )

    return foods

# CREATE ORDER

@app.post("/orders")
async def create_order(request: Request):

    data = await request.json()

    data["status"] = "Pending"

    orders_collection.insert_one(data)

    return {
        "message":
        "Order placed successfully"
    }

# GET ORDERS

@app.get("/orders")
def get_orders():

    orders = list(
        orders_collection.find({})
    )

    for order in orders:

        order["_id"] = str(
            order["_id"]
        )

    return orders

# UPDATE ORDER STATUS

@app.put("/orders/{order_id}")
async def update_order_status(
    order_id: str,
    request: Request
):

    data = await request.json()

    orders_collection.update_one(
        {
            "_id": ObjectId(order_id)
        },
        {
            "$set": {
                "status":
                data["status"]
            }
        }
    )

    return {
        "message":
        "Order status updated"
    }

# STRIPE PAYMENT

@app.post("/create-checkout-session")
async def create_checkout_session(
    request: Request
):

    try:

        data = await request.json()

        cart = data.get("cart", [])

        if len(cart) == 0:

            return JSONResponse(
                status_code=400,
                content={
                    "error": "Cart is empty"
                }
            )

        line_items = []

        for item in cart:

            line_items.append({

                "price_data": {

                    "currency": "gbp",

                    "product_data": {
                        "name": item["name"]
                    },

                    "unit_amount":
                    int(float(item["price"]) * 100),

                },

                "quantity":
                item.get("quantity", 1),

            })

        session = stripe.checkout.Session.create(

            payment_method_types=["card"],

            line_items=line_items,

            mode="payment",

            success_url=
            "http://localhost:5173/success",

            cancel_url=
            "http://localhost:5173/cancel",
        )

        return {
            "url": session.url
        }

    except Exception as e:

        print("STRIPE ERROR:", str(e))

        return JSONResponse(
            status_code=500,
            content={
                "error": str(e)
            }
        )