from pydantic import BaseModel

class Order(BaseModel):
    food: str
    quantity: int