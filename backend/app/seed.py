from app.database import foods_collection

foods = [

    {
        "id": 1,
        "name": "Margherita Pizza",
        "category": "Pizza",
        "price": 12.99,
        "popular": True,
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },

    {
        "id": 2,
        "name": "Chicken Burger",
        "category": "Burger",
        "price": 9.99,
        "popular": True,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
        "id": 3,
        "name": "Chicken Biryani",
        "category": "Biryani",
        "price": 14.99,
        "popular": True,
        "image": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    },

]

foods_collection.insert_many(foods)

print("Foods Inserted")