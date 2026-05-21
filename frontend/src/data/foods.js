const foods = [

  // ================= PIZZA =================

  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 12.99,
    rating: 4.8,
    popular: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },

  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 14.99,
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b",
  },

  {
    id: 3,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 13.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },

  {
    id: 4,
    name: "Cheese Burst Pizza",
    category: "Pizza",
    price: 15.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },

  {
    id: 5,
    name: "Veggie Supreme Pizza",
    category: "Pizza",
    price: 11.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },

  // ================= BURGER =================

  {
    id: 6,
    name: "Chicken Burger",
    category: "Burger",
    price: 9.99,
    rating: 4.5,
    popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    id: 7,
    name: "Double Cheese Burger",
    category: "Burger",
    price: 11.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },

  {
    id: 8,
    name: "BBQ Beef Burger",
    category: "Burger",
    price: 12.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
  },

  {
    id: 9,
    name: "Zinger Burger",
    category: "Burger",
    price: 10.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },

  {
    id: 10,
    name: "Veg Crispy Burger",
    category: "Burger",
    price: 8.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360",
  },

  // ================= BIRYANI =================

  {
    id: 11,
    name: "Chicken Biryani",
    category: "Biryani",
    price: 13.99,
    rating: 4.9,
    popular: true,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  },

  {
    id: 12,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 15.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29a",
  },

  {
    id: 13,
    name: "Hyderabadi Biryani",
    category: "Biryani",
    price: 14.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d",
  },

  {
    id: 14,
    name: "Egg Biryani",
    category: "Biryani",
    price: 10.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93",
  },

  {
    id: 15,
    name: "Paneer Biryani",
    category: "Biryani",
    price: 11.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },

  // ================= PASTA =================

  {
    id: 16,
    name: "Chicken Alfredo Pasta",
    category: "Pasta",
    price: 11.99,
    rating: 4.6,
    popular: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },

  {
    id: 17,
    name: "Red Sauce Pasta",
    category: "Pasta",
    price: 10.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
  },

  {
    id: 18,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 10.49,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
  },

  {
    id: 19,
    name: "Cheese Pasta",
    category: "Pasta",
    price: 12.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590",
  },

  {
    id: 20,
    name: "Spicy Chicken Pasta",
    category: "Pasta",
    price: 13.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8d81",
  },

  // ================= DESSERT =================

  {
    id: 21,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 6.99,
    rating: 4.8,
    popular: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },

  {
    id: 22,
    name: "Brownie Sundae",
    category: "Dessert",
    price: 7.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },

  {
    id: 23,
    name: "Cheese Cake",
    category: "Dessert",
    price: 8.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
  },

  {
    id: 24,
    name: "Donuts",
    category: "Dessert",
    price: 5.49,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },

  {
    id: 25,
    name: "Ice Cream Sundae",
    category: "Dessert",
    price: 6.49,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },

  // ================= DRINKS =================

  {
    id: 26,
    name: "Cold Coffee",
    category: "Drinks",
    price: 4.99,
    rating: 4.5,
    popular: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },

  {
    id: 27,
    name: "Mojito",
    category: "Drinks",
    price: 5.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
  },

  {
    id: 28,
    name: "Chocolate Milkshake",
    category: "Drinks",
    price: 6.49,
    rating: 4.8,
    popular: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
  },

  {
    id: 29,
    name: "Orange Juice",
    category: "Drinks",
    price: 4.49,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f",
  },

  {
    id: 30,
    name: "Lemon Soda",
    category: "Drinks",
    price: 3.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
  },

  // ================= CHINESE =================

  {
    id: 31,
    name: "Hakka Noodles",
    category: "Chinese",
    price: 9.99,
    rating: 4.7,

    popular: true,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
  },

  {
    id: 32,
    name: "Fried Rice",
    category: "Chinese",
    price: 8.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },

  {
    id: 33,
    name: "Chilli Chicken",
    category: "Chinese",
    price: 11.49,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },

  {
    id: 34,
    name: "Spring Rolls",
    category: "Chinese",
    price: 7.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },

  {
    id: 35,
    name: "Schezwan Noodles",
    category: "Chinese",
    price: 10.99,
    rating: 4.7,
    popular: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },

  // ================= SANDWICH =================

  {
    id: 36,
    name: "Club Sandwich",
    category: "Sandwich",
    price: 7.99,
    rating: 4.4,
    popular: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
  },

  {
    id: 37,
    name: "Grilled Sandwich",
    category: "Sandwich",
    price: 6.99,
    rating: 4.3,
    popular: true,
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  },

  {
    id: 38,
    name: "Chicken Sandwich",
    category: "Sandwich",
    price: 8.49,
    rating: 4.6,
    popular: true,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f",
  },

  {
    id: 39,
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 5.99,
    rating: 4.2,
    popular: true,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586",
  },

  {
    id: 40,
    name: "Cheese Corn Sandwich",
    category: "Sandwich",
    price: 7.49,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be",
  },

  // ================= WRAPS =================

  {
    id: 41,
    name: "Chicken Wrap",
    category: "Wraps",
    price: 8.99,
    rating: 4.6,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
  },

  {
    id: 42,
    name: "Paneer Wrap",
    category: "Wraps",
    price: 7.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1530469912745-a215c6b256ea",
  },

  {
    id: 43,
    name: "BBQ Chicken Wrap",
    category: "Wraps",
    price: 9.49,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
  },

  {
    id: 44,
    name: "Spicy Veg Wrap",
    category: "Wraps",
    price: 7.49,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49",
  },

  {
    id: 45,
    name: "Cheese Chicken Wrap",
    category: "Wraps",
    price: 9.99,
    rating: 4.8,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
  },

  // ================= SALADS =================

  {
    id: 46,
    name: "Greek Salad",
    category: "Salads",
    price: 6.99,
    rating: 4.2,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },

  {
    id: 47,
    name: "Chicken Salad",
    category: "Salads",
    price: 8.49,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },

  {
    id: 48,
    name: "Caesar Salad",
    category: "Salads",
    price: 7.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74",
  },

  {
    id: 49,
    name: "Avocado Salad",
    category: "Salads",
    price: 8.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
  },

  {
    id: 50,
    name: "Veggie Salad Bowl",
    category: "Salads",
    price: 7.49,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },

];

export default foods;