from fastapi import APIRouter
from pydantic import BaseModel

from app.utils.jwt_handler import create_token

router = APIRouter()

users = []

class User(BaseModel):
    email: str
    password: str

@router.post("/register")
def register(user: User):

    users.append(user)

    token = create_token({
        "email": user.email
    })

    return {
        "success": True,
        "message": "User Registered",
        "token": token
    }

@router.post("/login")
def login(user: User):

    for u in users:

        if (
            u.email == user.email
            and
            u.password == user.password
        ):

            token = create_token({
                "email": user.email
            })

            return {
                "success": True,
                "message": "Login Success",
                "token": token
            }

    return {
        "success": False,
        "message": "Invalid Credentials"
    }