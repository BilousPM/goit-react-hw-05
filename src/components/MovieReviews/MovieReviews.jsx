import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviReviews } from "../../servises/api";

const MovieReviews = () => {
  const params = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log(params);
    const fetchReviewsByID = async () => {
      try {
        const review = await fetchMoviReviews();
        setReviews(review);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsByID();
  }, [params]);

  if (!reviews) {
    return;
  }
  console.log(reviews);
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
