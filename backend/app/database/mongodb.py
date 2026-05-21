from pymongo import MongoClient

MONGO_URL = "mongodb+srv://lohithkomati1_db_user:@Lohith_2002@cluster0.rp9q91a.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["restaurant_db"]

users_collection = db["users"]

orders_collection = db["orders"]

foods_collection = db["foods"]
orders_collection = db["orders"]