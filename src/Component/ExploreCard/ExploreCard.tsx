import React from 'react';

interface ExploreCardProps {
  imageSrc: string;
  title: string;
  rating: number;
  ratingsCount: number;
  priceRange: string;
  category: string;
  description: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  imageSrc,
  title,
  rating,
  ratingsCount,
  priceRange,
  category,
  description,
}) => {
  return (
    <div className="single-explore-item">
      <div className="single-explore-img">
        <img src={imageSrc} alt="explore image" />
        <div className="single-explore-img-info">
          <button onClick={() => window.location.href='#'}>
            {category === 'Resturent' ? 'best rated' : 'featured'}
          </button>
          <div className="single-explore-image-icon-box">
            <ul>
              <li>
                <div className="single-explore-image-icon">
                  <i className="fa fa-arrows-alt"></i>
                </div>
              </li>
              <li>
                <div className="single-explore-image-icon">
                  <i className="fa fa-bookmark-o"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`single-explore-txt bg-theme-${category.toLowerCase()}`}>
        <h2>
          <a href="#">{title}</a>
        </h2>
        <p className="explore-rating-price">
          <span className="explore-rating">{rating}</span>
          <a href="#"> {ratingsCount} ratings</a>
          <span className="explore-price-box">
            form
            <span className="explore-price">{priceRange}</span>
          </span>
          <a href="#">{category}</a>
        </p>
        <div className="explore-person">
          <div className="row">
            <div className="col-sm-2">
              <div className="explore-person-img">
                <a href="#">
                  <img src="assets/images/explore/person.png" alt="explore person" />
                </a>
              </div>
            </div>
            <div className="col-sm-10">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="explore-open-close-part">
          <div className="row">
            <div className="col-sm-5">
              <button className="close-btn" onClick={() => window.location.href='#'}>
                close now
              </button>
            </div>
            <div className="col-sm-7">
              <div className="explore-map-icon">
                <a href="#"><i data-feather="map-pin"></i></a>
                <a href="#"><i data-feather="upload"></i></a>
                <a href="#"><i data-feather="heart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
