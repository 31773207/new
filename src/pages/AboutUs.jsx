import React from "react";
import "../styles/AboutUs.css";
import Logo from "../assets/photo_2025-05-07_09-58-26.jpg";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-hero">
        <img src={Logo} alt="Eat & Love & Repeat Logo" className="about-logo" />
        <h1>About Eat & Love & Repeat</h1>
        <p className="tagline">Where Every Meal is a Love Story</p>
      </header>

      <section className="about-content fade-in">
        <p>
          At Eat Love Repeat, we believe that food is not just sustenance; it’s an experience filled with love and joy. Our mission is to bring you authentic flavors and delightful dishes that celebrate the essence of culinary art.
        </p>
        <p>
          Founded in 2025, we have transformed from a small local eatery into a beloved dining destination. Our menu features a variety of dishes crafted with fresh, high-quality ingredients, inspired by global cuisines and local traditions.
        </p>
        <p>
          Our dedicated team is passionate about creating memorable dining experiences. We prioritize sustainability and support local farmers, ensuring that every bite is not only delicious but also responsible.
        </p>
        <p>
          Thank you for choosing Eat Love Repeat. We invite you to join us on this culinary journey, where every meal is made with love and every visit feels like home.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us fade-in">
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or would like to make a reservation, feel free to reach out!</p>
        <p>Email: <a href="mailto:info@eatloverpeat.com">info@eatloverpeat.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Address: 123 Flavor St, Foodie City, FC 12345</p>
      </section>
    </div>
  );
};

export default AboutUs;