//Product Details Page
//Display a larger image, name, price, views, sold count, reviews with star ratings, comments, and "Add to Cart" button.
//Product Details Page
//Display a larger image, name, price, views, sold count, reviews with star ratings, comments, and "Add to Cart" button.
// src/pages/ProductDetail.jsx
 
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetail.css";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            fontSize: "28px",
            color: (hover || rating) >= star ? "#ffc107" : "#e4e5e9",
            transition: "color 200ms",
          }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setRating(star);
          }}
          aria-label={`${star} star`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart, incrementViewCount } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (product) {
      // Load reviews from local storage
      const storedReviews = JSON.parse(localStorage.getItem(`reviews_${product.id}`)) || [];
      setReviews(storedReviews);

      // Increment view count
      const storedViewCount = localStorage.getItem(`views_${product.id}`) || 0;
      if (!hasViewed) {
        incrementViewCount(product.id);
        localStorage.setItem(`views_${product.id}`, parseInt(storedViewCount) + 1);
        setHasViewed(true);
      }
    }
  }, [product, incrementViewCount, hasViewed]);

  const handleAddReview = () => {
    if (comment.trim() === "") return;
    if (rating === 0) {
      alert("Please select a rating before submitting your review.");
      return;
    }
    const newReview = { rating, comment };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    setRating(0);
    setComment("");

    // Save reviews to local storage
    localStorage.setItem(`reviews_${product.id}`, JSON.stringify(updatedReviews));
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="large-image" />
      <h2>{product.name}</h2>
      <div className="product-description">
        <p>{product.description}</p>
      </div>
      <p>Price: {product.price} ₫</p>
      <p>Views: {localStorage.getItem(`views_${product.id}`) || 0}</p>
      <p>Sold: {product.sold}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        {reviews.map((rev, index) => (
          <div key={index} className="review">
            {"⭐".repeat(rev.rating)} <br />
            <p>{rev.comment}</p>
          </div>
        ))}

        <h4>Add a Review</h4>
        <label className="rating-label">
          Rating: <StarRating rating={rating} setRating={setRating} />
        </label>
        <br />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
          rows="3"
          className="review-textarea"
        />
        <br />
        <button className="submit-review-btn" onClick={handleAddReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
