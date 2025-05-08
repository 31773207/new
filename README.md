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

## Setup Instructions

To run the Eat & Love & Repeat project locally, follow these steps:

**Step 1: Clone the Repository to Your Local Machine**

1.Open your terminal or command prompt.

2.Navigate to the directory where you want to store the project. For example:

    cd C:\Users\user

3.Clone the repository by running the following command:

     git clone https://github.com/31773207/new.git

**Step 2: Open the Repository in VS Code**

1.After cloning, navigate to the folder that contains the project:

    cd new

2.Open the project in Visual Studio Code by running:

     code .

This command will open the current directory (.) in Visual Studio Code.

**Step 3: Install Dependencies**

If the project has a package.json file and you need to install dependencies, run the following command in the integrated terminal in VS Code:

    npm install

This will install all required packages listed in the package.json file.   

**step 4:Start the Development Server:**

Launch the application by starting the development server with the following command:

      npm start

**step 5:Open the Application in a Browser:**
Once the server is running, open your web browser and navigate to:

      http://localhost:3000

You should see the Eat & Love & Repeat application running locally.

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

