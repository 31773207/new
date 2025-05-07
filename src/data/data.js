//product data here
export const products = [
    {
      id: 1,
      name: "Brunch Burger",
      image: "https://i.pinimg.com/736x/44/a8/c6/44a8c67ba6196514c07b1611c34037f5.jpg",
      price: 3500,
      views: 0,
      sold: 0,
      reviews: [],
      category: "Burger",
      isNew: true, // ✅ This indicates it's a new product
      description: "A delicious beef patty topped with a fried egg, crispy bacon, lettuce, and avocado, perfect for breakfast lovers."

    },
    {
      id: 2,
      name: "Double Smash Burger & Crispy Fries",
      image: "https://i.pinimg.com/736x/2a/e2/cc/2ae2cca2df5c972d3e3928de84e1bc0e.jpg",
      price: 3000,
      views: 0,
      sold: 0,
      reviews: [],
      category: "Burger",
      isNew: false, // This product is not new
      description: "A juicy double beef patty burger with melted cheese, fresh veggies, and your choice of ketchup or mustard, served with crispy, seasoned potato wedges on the side."

    },
    {
      id: 3,
      name: "Truffle Burger",
      image: "https://i.pinimg.com/736x/2f/f8/e1/2ff8e1ddfa9b397f8e62152cea797228.jpg",
      price: 2500,
      views: 0,
      sold: 0,
      reviews: [],
      description:"A gourmet beef patty topped with truffle aioli, arugula, caramelized onions, and melted Gruyère cheese for a luxurious flavor.",
      isNew: true, // ✅ This indicates it's a new product
      category: "Burger",

    },
    {
      id: 4,
      name: "Southern Fried Chicken Burger",
      image: "https://i.pinimg.com/736x/30/73/4c/30734c2b21c5c5217938ebf8e3e3c5da.jpg",
      price: 1800,
      views: 0,
      sold: 0,
      reviews: [],
      description:"A crispy, golden-fried chicken breast, topped with lettuce, pickles, and a creamy mayo sauce, all nestled in a soft, toasted bun. The perfect combination of crunch and juiciness!",
      category: "Burger",
      isNew: false, // This product is not new

    },
    {
      id: 5,
      name: "Mushroom Swiss Burger",
      image: "https://i.pinimg.com/736x/7b/7c/04/7b7c04ca1eb1196c4c1c14e32a800624.jpg",
      price: 800,
      views: 0,
      sold: 0,
      reviews: [],
      category: "Burger",
      isNew: false, // This product is not new
       description:"A juicy beef patty topped with sautéed mushrooms, Swiss cheese, and a creamy garlic aioli.",
    },
    {
        id: 6,
        name: "Spicy Jalapeño Burger",
        image: "https://i.pinimg.com/736x/6c/71/89/6c718978d09268adf89a1e12da7db618.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Burger",
        description:"For heat lovers, a beef patty loaded with fresh jalapeños, spicy pepper jack cheese, and a zesty sriracha mayo.",
        isNew: false, // This product is not new

      },
      //pizza
        {
        id: 7,
        name: "Kebab Pizza",
        image: "https://i.pinimg.com/736x/52/ac/57/52ac57eb3f3259b2a389815709c69c80.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        isNew: true, // ✅ This indicates it's a new product
        description:"Inspired by Swedish cuisine, this pizza features seasoned lamb or chicken kebab meat, complemented by garlic sauce.",
        category: "Pizza"
      },
      {
        id: 8,
        name: "Margherita Pizza",
        image: "https://i.pinimg.com/736x/fe/34/b7/fe34b7280c64055ddf21cead8de936b0.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Classic Italian favorite with tomato sauce, fresh mozzarella, and basil Simple, fresh, and full of flavor.",
        category: "Pizza"
      },   {
        id: 10,
        name: "Pepperoni Pizza",
        image: "https://i.pinimg.com/736x/c2/5d/8c/c25d8cca5d1a378811fc925d904ff38b.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Loaded with spicy pepperoni slices and gooey mozzarella. A crowd-pleasing, meaty favorite.",
        category: "Pizza"
      },  
        {
        id: 11,
        name: "Four Cheese Pizza (Quattro Formaggi)",
        image: "https://i.pinimg.com/736x/eb/94/dd/eb94ddb5aaf810af4be1c7b2545484f4.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Blend of mozzarella, gorgonzola, parmesan, and fontina cheeses. Rich, creamy, and indulgent.",
        category: "Pizza"
      },   {
        id: 12,
        name: "Buffalo Chicken Pizza",
        image: "https://i.pinimg.com/736x/0f/c7/88/0fc78819fe0b53b4a2c1a6174c0416db.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Spicy buffalo chicken, mozzarella, and ranch or blue cheese drizzle. Bold, zesty, and flavorful.",
        category: "Pizza"
      },
      //cake 
      {
        id: 13,
        name: "Triple Chocolate Cheesecake with Oreo Crust",
        image: "https://i.pinimg.com/736x/25/61/2e/25612eca3bf606d5171ec1310965a1f5.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Decadent layers of dark, milk, and white chocolate on a crunchy Oreo cookie crust—pure bliss for chocolate lovers.",
        category: "Cake"
      },
      {
        id: 14,
        name: "Red Velvet Cake",
        image: "https://i.pinimg.com/736x/63/ce/84/63ce84cf5b948ecf95304a25ce8b5834.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"A rich red velvet cake layered with creamy cheesecake and topped with fresh strawberries. Sweet, tangy, and beautifully indulgent.",
        category: "Cake"
      },   {
        id: 15,
        name: "Mini Strawberry Cheesecakes",
        image: "https://i.pinimg.com/736x/fa/25/3b/fa253be89475ffd332589b5a5581ef3d.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Individual cheesecakes topped with juicy strawberries and a light glaze. Perfectly portioned and full of flavor.",
        category: "Cake"
      },  
        {
        id: 16,
        name: "Mini Lemon Cheesecakes",
        image: "https://i.pinimg.com/736x/49/8a/74/498a749dfbab1dc58fa76c7f1eeb3af5.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Tangy lemon-infused cheesecake with a buttery crust, topped with whipped cream for a refreshing finish.",
        category: "Cake"
      },   {
        id: 17,
        name: "hese Banana Pudding Cheesecake",
        image: "https://i.pinimg.com/736x/b7/74/c4/b774c4a1a449c1af4671a274f4863455.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Classic banana pudding meets creamy cheesecake, layered with banana slices and vanilla wafers for a nostalgic twist.",
        isNew: true,
        category: "Cake"
      },
      {
        id: 18,
        name: "Tiramisu Cake",
        image: "https://i.pinimg.com/736x/f2/5f/14/f25f148f1075c1a2bfbe058c178402e7.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"A luxurious Italian dessert with espresso-soaked layers and mascarpone cream, dusted with cocoa for the perfect finish.",
        category: "Cake"
      },
      //asian food
      {
        id: 19,
        name: "Korean Rice Dog",
        image: "https://i.pinimg.com/736x/3d/fc/dd/3dfcdd2bb230ba92798ab36f6820cb5f.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Crispy and chewy on the outside, gooey cheese or sausage inside—Korean-style corndogs are the ultimate street snack.",
        category: "Asian Food"
      },
      {
        id: 20,
        name: "Korean Fried Chicken Wings",
        image: "https://i.pinimg.com/736x/d4/5c/65/d45c6504ba23520418b2cb1b2fee71a2.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Double-fried wings coated in a sticky, spicy-sweet Korean glaze. Crunchy, juicy, and totally addictive.",
        category: "Asian Food"
      },   {
        id: 21,
        name: "Spam Kimbap Roll",
        image: "https://i.pinimg.com/736x/55/c6/1e/55c61ebed2ef0cfb5d993991f4daff00.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"A Korean-style sushi roll filled with rice, Spam, pickled radish, and vegetables—perfectly portable and full of flavor.",
        category: "Asian Food"
      },  
        {
        id: 22,
        name: "Chicken Momo Dumplings",
        image: "https://i.pinimg.com/736x/38/e2/5d/38e25d423bbb3001823aae80da60ff25.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        description:"Nepalese-style dumplings filled with seasoned chicken, served steamed or fried with spicy dipping sauce.",
        category: "Asian Food"
      },   {
        id: 23,
        name: "Ramen & Poke Bowl Combo",
        image: "https://i.pinimg.com/736x/10/fb/b5/10fbb5f46b9e4a6b66fd73927c700eb5.jpg",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        isNew: true, // ✅ This indicates it's a new product
        description:"A hearty, flavorful bowl of ramen served alongside a refreshing poke salad—ideal for when you want the best of both worlds.",
        category: "Asian Food"
      },
      //drinks
      {
        id: 23,
        name: "Cappuccino",
        image: "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg",
        description: "A perfect balance of rich espresso, steamed milk, and silky foam—creamy, smooth, and energizing.",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },
      {
        id: 24,
        name: "Latte",
        image: "https://i.pinimg.com/736x/4d/bd/8a/4dbd8a8c71268324c10729da4da3999c.jpg",
        description: "A smooth, creamy coffee drink made with espresso and steamed milk, topped with a light layer of foam.",
        price: 900,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },
      {
        id: 25,
        name: "Espresso",
        image: "https://i.pinimg.com/736x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg",
        description: "A concentrated coffee brewed by forcing hot water under pressure through finely ground coffee beans. Bold, rich, and invigorating.",
        price: 500,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },
      
      {
        id: 26,
        name: "Iced Coffee",
        image: "https://i.pinimg.com/736x/5c/7a/43/5c7a43138d9740941d0326a156551135.jpg",
        description: "Chilled brewed coffee served over ice, perfect for a refreshing and energizing pick-me-up.",
        price: 700,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },
      {
        id: 27,
        name: "Mocha",
        image: "https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg",
        description: "A rich and indulgent coffee drink combining espresso, steamed milk, and chocolate syrup, topped with whipped cream.",
        price: 950,
        views: 0,
        sold: 0,
        reviews: [],
        isNew: true,
        category: "Drinks",
      },
      {
        id: 28,
        name: "Matcha Latte",
        image: "https://i.pinimg.com/736x/37/0c/81/370c81f8a0721482f6327a3196c63377.jpg",
        description: "A vibrant green tea blend with a creamy texture, made with matcha powder, steamed milk, and a hint of sweetness.",
        price: 950,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },     
      {
        id: 29,
        name: "Cold Brew Coffee",
        image: "https://i.pinimg.com/736x/be/5c/8c/be5c8c4b4bf280650a3c174b8c1a98fc.jpg",
        description: "Slow-brewed coffee chilled to perfection, offering a smooth and mellow flavor without the acidity of regular coffee.",
        price: 800,
        views: 0,
        sold: 0,
        reviews: [],
        category: "Drinks",
      },       
       
      //coffee
     
  ];