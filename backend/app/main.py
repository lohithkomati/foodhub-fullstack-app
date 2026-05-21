from fastapi import FastAPI, Request

from fastapi.middleware.cors import CORSMiddleware

from app.database import (
    foods_collection,
    orders_collection,
    users_collection
)

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HOME API

@app.get("/")
def home():

    return {
        "message": "FoodHub API Running"
    }

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

    orders_collection.insert_one(data)

    return {
        "message":
        "Order placed successfully"
    }

# REGISTER

@app.post("/register")
async def register(request: Request):

    data = await request.json()

    users_collection.insert_one(data)

    return {
        "success": True,
        "message": "User registered"
    }

# LOGIN

@app.post("/login")
async def login(request: Request):

    data = await request.json()

    user = users_collection.find_one({
        "email": data["email"],
        "password": data["password"]
    })

    if user:

        return {
            "success": True,
            "message": "Login success"
        }

    return {
        "success": False,
        "message": "Invalid credentials"
    }

# GET ORDERS

@app.get("/orders")
def get_orders():

    orders = list(
        orders_collection.find(
            {},
            {"_id": 0}
        )
    )

    return orders