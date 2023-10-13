import React from 'react';

const Blog: React.FC = () => (
  <section id="blog" className="blog">
    <div className="container">
      <div className="section-header">
        <h2>news and articles</h2>
        <p>Always up-to-date with our latest News and Articles</p>
      </div>
      <div className="blog-content">
        <div className="row">
          <SingleBlogItem
            imageSrc="\assets\images\blog\b1.jpg"
            title="How to find your Desired Place more quickly"
            author="admin"
            date="March 2018"
            content="Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
          />
          <SingleBlogItem
            imageSrc="\assets\images\blog\b2.jpg"
            title="How to find your Desired Place more quickly"
            author="admin"
            date="March 2018"
            content="Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
          />
          <SingleBlogItem
            imageSrc="\assets\images\blog\b3.jpg"
            title="How to find your Desired Place more quickly"
            author="admin"
            date="March 2018"
            content="Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
          />
        </div>
      </div>
    </div>
  </section>
);

interface SingleBlogItemProps {
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

const SingleBlogItem: React.FC<SingleBlogItemProps> = ({ imageSrc, title, author, date, content }) => (
  <div className="col-md-4 col-sm-6">
    <div className="single-blog-item">
      <div className="single-blog-item-img">
        <img src={imageSrc} alt="blog image" />
      </div>
      <div className="single-blog-item-txt">
        <h2>
          <a href="#">{title}</a>
        </h2>
        <h4>
          posted <span>by</span> <a href="#">{author}</a> {date}
        </h4>
        <p>{content}</p>
      </div>
    </div>
  </div>
);

export default Blog;
