from pydantic import BaseModel

class Food(BaseModel):
    name: str
    price: float