from pymongo import MongoClient

MONGO_URL = "mongodb+srv://lohithkomati1_db_user:lohith2002@cluster0.rp9q91a.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["foodhub"]

foods_collection = db["foods"]
orders_collection = db["orders"]
users_collection = db["users"]


# DELETE OLD DATA
foods_collection.delete_many({})

# INSERT NEW DATA
foods_collection.insert_many([

# ================= PIZZA =================

{
    "id": 1,
    "name": "Pepperoni Pizza",
    "price": 19,
    "category": "Pizza",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591"
},

{
    "id": 2,
    "name": "Margherita Pizza",
    "price": 34,
    "category": "Pizza",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
},

{
    "id": 3,
    "name": "Cheese Burst Pizza",
    "price": 29,
    "category": "Pizza",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
},

{
    "id": 4,
    "name": "Veggie Pizza",
    "price": 9,
    "category": "Pizza",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
},

{
    "id": 5,
    "name": "Farmhouse Pizza",
    "price": 9,
    "category": "Pizza",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1548365328-9f547fb0953b"
},

# ================= BURGER =================

{
    "id": 6,
    "name": "Cheese Burger",
    "price": 9,
    "category": "Burger",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},

{
    "id": 7,
    "name": "Chicken Burger",
    "price": 9,
    "category": "Burger",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349"
},

{
    "id": 8,
    "name": "Double Patty Burger",
    "price": 9,
    "category": "Burger",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
},

{
    "id": 9,
    "name": "Veg Burger",
    "price": 19,
    "category": "Burger",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
},

{
    "id": 10,
    "name": "Spicy Burger",
    "price": 29,
    "category": "Burger",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1520072959219-c595dc870360"
},

# ================= BIRYANI =================

{
    "id": 11,
    "name": "Chicken Biryani",
    "price": 29,
    "category": "Biryani",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
},

{
    "id": 12,
    "name": "Mutton Biryani",
    "price": 34,
    "category": "Biryani",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1563379091339-03246963d96c"
},

{
    "id": 13,
    "name": "Egg Biryani",
    "price": 19,
    "category": "Biryani",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1642821373181-696a54913e93"
},

{
    "id": 14,
    "name": "Veg Biryani",
    "price": 17,
    "category": "Biryani",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
},

{
    "id": 15,
    "name": "Paneer Biryani",
    "price": 22,
    "category": "Biryani",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b"
},

# ================= PASTA =================

{
    "id": 16,
    "name": "White Sauce Pasta",
    "price": 25,
    "category": "Pasta",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb"
},

{
    "id": 17,
    "name": "Red Sauce Pasta",
    "price": 23,
    "category": "Pasta",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
},

{
    "id": 18,
    "name": "Cheese Pasta",
    "price": 27,
    "category": "Pasta",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
},

{
    "id": 19,
    "name": "Chicken Pasta",
    "price": 31,
    "category": "Pasta",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a"
},

{
    "id": 20,
    "name": "Veg Alfredo Pasta",
    "price": 22,
    "category": "Pasta",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1622973536968-3ead9e780960"
},
# ================= DESSERT =================

{
    "id": 21,
    "name": "Chocolate Brownie",
    "price": 14,
    "category": "Dessert",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
},

{
    "id": 22,
    "name": "Ice Cream Sundae",
    "price": 12,
    "category": "Dessert",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
},

{
    "id": 23,
    "name": "Chocolate Cake",
    "price": 199,
    "category": "Dessert",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
},

{
    "id": 24,
    "name": "Donuts",
    "price": 99,
    "category": "Dessert",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff"
},

{
    "id": 25,
    "name": "Strawberry Dessert",
    "price": 16,
    "category": "Dessert",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777"
},

# ================= DRINKS =================

{
    "id": 26,
    "name": "Cold Coffee",
    "price": 9,
    "category": "Drinks",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
},

{
    "id": 27,
    "name": "Mango Juice",
    "price": 8,
    "category": "Drinks",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
},

{
    "id": 28,
    "name": "Lemon Soda",
    "price": 7,
    "category": "Drinks",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
},

{
    "id": 29,
    "name": "Chocolate Shake",
    "price": 14,
    "category": "Drinks",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1577805947697-89e18249d767"
},

{
    "id": 30,
    "name": "Orange Juice",
    "price": 10,
    "category": "Drinks",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba"
},

# ================= CHINESE =================

{
    "id": 31,
    "name": "Veg Noodles",
    "price": 18,
    "category": "Chinese",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d"
},

{
    "id": 32,
    "name": "Fried Rice",
    "price": 19,
    "category": "Chinese",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
},

{
    "id": 33,
    "name": "Chicken Manchurian",
    "price": 24,
    "category": "Chinese",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246"
},

{
    "id": 34,
    "name": "Spring Rolls",
    "price": 15,
    "category": "Chinese",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950"
},

{
    "id": 35,
    "name": "Schezwan Noodles",
    "price": 29,
    "category": "Chinese",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19"
},

# ================= SANDWICH =================

{
    "id": 36,
    "name": "Veg Sandwich",
    "price": 12,
    "category": "Sandwich",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
},

{
    "id": 37,
    "name": "Grilled Sandwich",
    "price": 14,
    "category": "Sandwich",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1539252554453-80ab65ce3586"
},

{
    "id": 38,
    "name": "Chicken Sandwich",
    "price": 17,
    "category": "Sandwich",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0ef937f"
},

{
    "id": 39,
    "name": "Cheese Sandwich",
    "price": 15,
    "category": "Sandwich",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
},

{
    "id": 40,
    "name": "Club Sandwich",
    "price": 199,
    "category": "Sandwich",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1554433607-66b5efe9d304"
},

# ================= WRAPS =================

{
    "id": 41,
    "name": "Chicken Wrap",
    "price": 18,
    "category": "Wraps",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
},

{
    "id": 42,
    "name": "Paneer Wrap",
    "price": 19,
    "category": "Wraps",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950"
},

{
    "id": 43,
    "name": "Veg Wrap",
    "price": 15,
    "category": "Wraps",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d"
},

{
    "id": 44,
    "name": "Cheese Wrap",
    "price": 19,
    "category": "Wraps",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6471"
},

{
    "id": 45,
    "name": "Spicy Wrap",
    "price": 20,
    "category": "Wraps",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1530469912745-a215c6b256ea"
},

# ================= SALADS =================

{
    "id": 46,
    "name": "Caesar Salad",
    "price": 15,
    "category": "Salads",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1"
},

{
    "id": 47,
    "name": "Greek Salad",
    "price": 19,
    "category": "Salads",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
},

{
    "id": 48,
    "name": "Veg Salad",
    "price": 12,
    "category": "Salads",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
},

{
    "id": 49,
    "name": "Chicken Salad",
    "price": 21,
    "category": "Salads",
    "popular": True,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
},

{
    "id": 50,
    "name": "Fruit Salad",
    "price": 14,
    "category": "Salads",
    "popular": False,
    "image": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
}
])