import React from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';

const Explore: React.FC = () => {
  return (
    <section id="explore" className="explore">
      <div className="container">
        <div className="section-header">
          <h2>explore</h2>
          <p>Explore New place, food, culture around the world and many more</p>
        </div>
        <div className="explore-content">
          <div className="row">
            {/* Use ExploreCard for each item */}
            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e1.jpg"
                title="tommy helfinger bar"
                rating={5.0}
                ratingsCount={10}
                priceRange="5$-300$"
                category="Resturent"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>

            {/* Repeat for other items */}
            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e2.jpg"
                title="swim and dine resort"
                rating={4.5}
                ratingsCount={8}
                priceRange="50$-500$"
                category="Hotel"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>

            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e3.jpg"
                title="europe tour"
                rating={5.0}
                ratingsCount={15}
                priceRange="5k$-10k$"
                category="Destination"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e4.jpg"
                title="europe tour"
                rating={5.0}
                ratingsCount={15}
                priceRange="10k$-15$"
                category="Destination"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e5.jpg"
                title="europe tour"
                rating={5.0}
                ratingsCount={15}
                priceRange="500k$-1200k$"
                category="Destination"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <ExploreCard
                imageSrc="assets/images/explore/e6.jpg"
                title="europe tour"
                rating={5.0}
                ratingsCount={15}
                priceRange="5k$-10k$"
                category="Destination"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...."
              />
            </div>
            {/* Repeat for other items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
