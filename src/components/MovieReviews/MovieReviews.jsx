import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviReviews } from "../../servises/api";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsByID = async () => {
      try {
        const review = await fetchMoviReviews(movieId);
        setReviews(review);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsByID();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{`Author: ${review.author}`}</h3>
            <p>{`Description: ${review.content}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
