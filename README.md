# Eat & Love & Repeat

## Project Description

Eat & Love & Repeat is an interactive and dynamic e-commerce application built with React, designed specifically for the restaurant industry. It aims to enhance the dining experience by allowing customers to easily browse the menu, view detailed information about each dish, and manage their orders seamlessly. The app combines user-friendly navigation, rich product details, and seamless shopping cart functionality to create a delightful online dining experience.

### Key Features of the App:

1.**User-Friendly Interface:**
   The application provides an intuitive, visually appealing interface that makes it easy for users to navigate through the menu and find their favorite dishes.

2. **Product Browsing:**
   Users can explore a diverse range of food items, each presented with high-quality images, descriptions, and pricing information. The homepage displays all available dishes in a grid layout for easy browsing.

3. **Detailed Product Information:**
   Selecting a dish takes users to a dedicated product detail page that shows comprehensive information such as the dish's name, price (in Algerian Dinar - DZD), view count, number of items sold, and customer reviews. This helps users make informed purchasing decisions.

4. **Shopping Cart Functionality:**
   The app features a robust shopping cart system that allows users to add, remove, or adjust quantities of items. The total cost of selected dishes is also displayed. Cart items are preserved even after page refreshes for a seamless experience.

5. **Customer Reviews:**
   Users can submit ratings and comments for each dish, contributing to a community-driven review system that helps other customers decide on their meals.

6. **Key Metrics Tracking:**
   The application tracks key metrics such as the number of views for each dish and the total number sold, providing valuable insights into customer preferences and the most popular items.

7. **Responsive Design:**
   The app is fully responsive, ensuring it works well on desktops, tablets, and smartphones.

### Setup Instructions

✅Step-by-Step Instructions 

**Step 1: Open VS Code**
Launch Visual Studio Code on your machine.

**Step 2: Clone the Git Repository via VS Code**

Click on “Source Control” icon (🔃) on the left sidebar, or press Ctrl + Shift + G.

Click the “Clone Repository” button or the “Clone Git Repository...” link.

Paste this URL when prompted:

     https://github.com/31773207/new.git
     
Choose a folder where you want to save the project.

Once the cloning is finished, a pop-up will appear — click “Open” to open the project folder.

**Step 3: Install Dependencies**

Open a new terminal inside VS Code:

      Terminal > New Terminal

Make sure you're in the root project folder (where package.json is located), then run:

        npm install
        
**Step 4: Start the Development Server**

In the same terminal, run:

         npm start
         
**Step 5: Open the App in Your Browser**

       http://localhost:3000
       
You should now see the Eat & Love & Repeat app running locally 🎉   

## Features Implemented
Core Features:

1.**Homepage:**

Displays a grid layout of available dishes with images, names, and prices (in DZD).
Each dish has an "Add to Cart" button for easy ordering.

2.**Product Details Page:**

Displays detailed information for each dish:

Larger product image.
Product name.
Price (in DZD).
Views count.
Number of times sold.
Customer reviews section ( ratings and comments).
"Add to Cart" button.

3.**Shopping Cart Functionality:**

Users can view items in their cart, adjust quantities, and remove items.

Displays the total cart value (in DZD).

Cart state is persisted using localStorage, ensuring items remain in the cart after page refreshes.

4.**Customer Reviews:**

Users can submit star ratings and comments for each dish, contributing to a community-driven review system.

5.**Metrics Tracking:**

Automatically increments the view count for each dish when viewed.

Tracks the number of times each dish is sold.

### Bonus Features:

1.**Search Bar:**
Allows users to filter dishes by name, making it easier to find specific items.

2.**Responsive Design:**
Ensures the app works well across various devices, including mobile phones, tablets, and desktops.

3.**New Arrival Badge:**
Displays a "New Arrival" badge on dishes with fewer than 10 views, signaling new or lesser-known dishes to users.

4.**Persistent Cart:**
Saves cart items in the localStorage, ensuring that items are retained even after refreshing the page.

## Group Members

 Ould Aroussi Sabrine Hiba

 Messaoudi Assia Maroua 

 B1

