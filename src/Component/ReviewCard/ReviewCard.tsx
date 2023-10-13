import React from 'react';

const ReviewCard = ({ name, location, starRating, comment, imgSrc }: {
  name: string,
  location: string,
  starRating: number,
  comment: string,
  imgSrc: string
}) => (
  <div className="single-testimonial-box">
    <div className="testimonial-description">
      <div className="testimonial-info">
        <div className="testimonial-img">
          <img src={imgSrc} alt="clients" />
        </div>
        <div className="testimonial-person">
          <h2>{name}</h2>
          <h4>{location}</h4>
          <div className="testimonial-person-star">
            {Array.from({ length: starRating }, (_, index) => (
              <i key={index} className="fa fa-star"></i>
            ))}
          </div>
        </div>
      </div>
      <div className="testimonial-comment">
        <p>{comment}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
