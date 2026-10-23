import React from "react";

const AllFoods = ({ category, setCategory, cart, addToCart }) => {
  const foods = [
    // PIZZA
    {
      name: "Cheese Pizza",
      category: "Pizza",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
    {
      name: "Veg Pizza",
      category: "Pizza",
      price: 229,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    },
    {
      name: "Margherita Pizza",
      category: "Pizza",
      price: 199,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
    },
    {
      name: "Farmhouse Pizza",
      category: "Pizza",
      price: 299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      name: "Paneer Tikka Pizza",
      category: "Pizza",
      price: 279,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    },
    {
      name: "Corn Pizza",
      category: "Pizza",
      price: 219,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    },
    {
      name: "Mushroom Pizza",
      category: "Pizza",
      price: 269,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
    },
    {
      name: "Mexican Veg Pizza",
      category: "Pizza",
      price: 319,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    },
    {
      name: "Olive Pizza",
      category: "Pizza",
      price: 259,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f",
    },
    {
      name: "Pesto Pizza",
      category: "Pizza",
      price: 289,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80&sat=-20",
    },

    // BURGERS
    {
      name: "Classic Burger",
      category: "Burger",
      price: 199,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Veg Burger",
      category: "Burger",
      price: 179,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Spicy Mexican Burger",
      category: "Burger",
      price: 239,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Aloo Tikki Burger",
      category: "Burger",
      price: 99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1757834787931-ddd70f3379a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D      ",
    },
    {
      name: "Corn Cheese Burger",
      category: "Burger",
      price: 189,
      rating: 4.4,
      image:
        "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D      ",
    },

    {
      name: "Cheese Burger",
      category: "Burger",
      price: 219,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    },

    {
      name: "Paneer Burger",
      category: "Burger",
      price: 199,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
    },
    {
      name: "Double Patty Burger",
      category: "Burger",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    },
    {
      name: "Crispy Veg Burger",
      category: "Burger",
      price: 159,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
    },
    {
      name: "Mushroom Burger",
      category: "Burger",
      price: 229,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
    },

    // INDIAN
    {
      name: "Paneer Butter Masala",
      category: "Indian",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      name: "Veg Biryani",
      category: "Indian",
      price: 199,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },

    {
      name: "Masala Dosa",
      category: "Indian",
      price: 129,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      name: "Paneer Tikka",
      category: "Indian",
      price: 229,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    },

    {
      name: "Shahi Paneer",
      category: "Indian",
      price: 259,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    },
    {
      name: "Chole Bhature",
      category: "Indian",
      price: 159,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1788602564560-9bcbf0f9acb6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dal Makhani",
      category: "Indian",
      price: 189,
      rating: 4.7,
      image:
        "https://plus.unsplash.com/premium_photo-1695290018329-1489540737ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Malai Kofta",
      category: "Indian",
      price: 239,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    },

    // CHINESE
    {
      name: "Veg Noodles",
      category: "Chinese",
      price: 169,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    },
    {
      name: "Spring Rolls",
      category: "Chinese",
      price: 149,
      rating: 4.4,
      image:
        "https://plus.unsplash.com/premium_photo-1790836310329-2e03fec0a65a?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D      ",
    },
    {
      name: "Veg Fried Rice",
      category: "Chinese",
      price: 159,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },
    {
      name: "Hakka Noodles",
      category: "Chinese",
      price: 179,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    },
    {
      name: "Chilli Paneer",
      category: "Chinese",
      price: 219,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    },
    {
      name: "Veg Manchurian",
      category: "Chinese",
      price: 189,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80&sat=-30",
    },
    {
      name: "Schezwan Noodles",
      category: "Chinese",
      price: 199,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    },
    {
      name: "Chilli Potato",
      category: "Chinese",
      price: 149,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
    },
    {
      name: "Veg Momos",
      category: "Chinese",
      price: 119,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",
    },
    {
      name: "Crispy Corn",
      category: "Chinese",
      price: 159,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },

    // DESSERTS
    {
      name: "Chocolate Cake",
      category: "Desserts",
      price: 149,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      name: "Ice Cream",
      category: "Desserts",
      price: 99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
    {
      name: "Brownie",
      category: "Desserts",
      price: 129,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
    {
      name: "Chocolate Donut",
      category: "Desserts",
      price: 89,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    },
    {
      name: "Strawberry Cheesecake",
      category: "Desserts",
      price: 179,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    },
    {
      name: "Chocolate Cupcake",
      category: "Desserts",
      price: 79,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd",
    },
    {
      name: "Gulab Jamun",
      category: "Desserts",
      price: 69,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D      ",
    },
    {
      name: "Rasmalai",
      category: "Desserts",
      price: 99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    },
    {
      name: "Waffles",
      category: "Desserts",
      price: 159,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
    },
    {
      name: "Macarons",
      category: "Desserts",
      price: 139,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43",
    },

    // DRINKS
    {
      name: "Masala Chai",
      category: "Drinks",
      price: 49,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f",
    },
    {
      name: "Cold Coffee",
      category: "Drinks",
      price: 99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      name: "Fresh Lime Soda",
      category: "Drinks",
      price: 59,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      name: "Mango Shake",
      category: "Drinks",
      price: 119,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    },
    {
      name: "Chocolate Shake",
      category: "Drinks",
      price: 129,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    },
    {
      name: "Iced Tea",
      category: "Drinks",
      price: 79,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    },
    {
      name: "Orange Juice",
      category: "Drinks",
      price: 89,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    },
    {
      name: "Watermelon Juice",
      category: "Drinks",
      price: 79,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054",
    },
    {
      name: "Strawberry Smoothie",
      category: "Drinks",
      price: 139,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
    },
    {
      name: "Mint Lemonade",
      category: "Drinks",
      price: 69,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
  ];

  const categories = [
    "All Foods",
    "Pizza",
    "Burger",
    "Indian",
    "Chinese",
    "Desserts",
    "Drinks",
  ];

  // Filter food
  const filteredFoods =
    category === "All Foods"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <section id="menu" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Explore Our Food</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">Our Menu</h1>

          <p className="text-gray-500 mt-3">Choose your favorite food</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "bg-orange-500 text-white px-6 py-2 rounded-full"
                  : "bg-white text-gray-700 px-6 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white"
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFoods.map((food) => {
            // Check whether food is already in cart
            const isInCart = cart.some((item) => item.name === food.name);

            return (
              <div
                key={food.name}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                {/* Food Image */}
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  {/* Name + Rating */}
                  <div className="flex justify-between gap-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {food.name}
                    </h2>

                    <span className="text-yellow-500 whitespace-nowrap">
                      ⭐ {food.rating}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-gray-500 mt-2">{food.category}</p>

                  {/* Price + Cart Button */}
                  <div className="flex justify-between items-center mt-5">
                    <p className="text-xl font-bold text-orange-500">
                      ₹{food.price}
                    </p>

                    <button
                      onClick={() => {
                        // Don't add again if already in cart
                        if (isInCart) {
                          return;
                        }

                        // Confirmation message
                        const confirmAdd = window.confirm(
                          `Do you want to add ${food.name} to your cart?`,
                        );

                        // Add food if user clicks OK
                        if (confirmAdd) {
                          addToCart(food);
                        }
                      }}
                      className={
                        isInCart
                          ? "bg-green-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                          : "bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                      }
                    >
                      {isInCart ? "✓ Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllFoods;
