import ReviewCard from "../Component/ReviewCard/ReviewCard";

const Review= () => (
    <section id="reviews" className="reviews">
      <div className="section-header">
        <h2>clients reviews</h2>
        <p>What our client say about us</p>
      </div>
      <div className="reviews-content">
        <div className="testimonial-carousel">
          <ReviewCard
            name="Tom Leakar"
            location="London, UK"
            starRating={5}
            comment="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque."
            imgSrc="\assets\images\clients\c1.png"
          />
          <ReviewCard
            name="Monirul Islam"
            location="London, UK"
            starRating={5}
            comment="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque."
            imgSrc="\assets\images\clients\c2.png"
          />
          <ReviewCard
            name="Monirul Islam"
            location="London, UK"
            starRating={5}
            comment="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque."
            imgSrc="\assets\images\clients\c3.png"
          />
          <ReviewCard
            name="Monirul Islam"
            location="London, UK"
            starRating={5}
            comment="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque."
            imgSrc="\assets\images\clients\c2.png"
          />
        
          
          {/* Repeat the Testimonial component for other testimonials */}
        </div>
      </div>
    </section>
  );
  
  export default Review;
  