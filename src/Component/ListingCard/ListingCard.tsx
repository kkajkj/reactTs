import React, { FC } from 'react';

interface ListingProps {
  iconClass: string;
  title: string;
  link: string;
  count: number;
}

const ListingCard: FC<ListingProps> = ({ iconClass, title, link, count }) => {
  return (
    <li>
      <div className="single-list-topics-content">
        <div className="single-list-topics-icon">
          <i className={iconClass}></i>
        </div>
        <h2><a href={link}>{title}</a></h2>
        <p>{count} listings</p>
      </div>
    </li>
  );
}

export default ListingCard;
