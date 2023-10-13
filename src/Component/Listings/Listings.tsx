import React, { FC } from 'react';
import ListingCard from '../ListingCard/ListingCard';

// const Listings: React.FC = () => {
//   return (
//     <section id="list-topics" className="list-topics">
//       <div className="list-topics-content">
//         <ul>
//           <li>
//             <div className="single-list-topics-content">
//               <div className="single-list-topics-icon">
//                 <i className="flaticon-restaurant"></i>
//               </div>
//               <h2><a href="#">restaurant</a></h2>
//               <p>150 listings</p>
//             </div>
//           </li>
//           <li>
//             <div className="single-list-topics-content">
//               <div className="single-list-topics-icon">
//                 <i className="flaticon-travel"></i>
//               </div>
//               <h2><a href="#">destination</a></h2>
//               <p>214 listings</p>
//             </div>
//           </li>
//           <li>
//             <div className="single-list-topics-content">
//               <div className="single-list-topics-icon">
//                 <i className="flaticon-building"></i>
//               </div>
//               <h2><a href="#">hotels</a></h2>
//               <p>185 listings</p>
//             </div>
//           </li>
//           <li>
//             <div className="single-list-topics-content">
//               <div className="single-list-topics-icon">
//                 <i className="flaticon-pills"></i>
//               </div>
//               <h2><a href="#">healthcare</a></h2>
//               <p>200 listings</p>
//             </div>
//           </li>
//           <li>
//             <div className="single-list-topics-content">
//               <div className="single-list-topics-icon">
//                 <i className="flaticon-transport"></i>
//               </div>
//               <h2><a href="#">automotion</a></h2>
//               <p>120 listings</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Listings;




const Listings: FC = () => {
  return (
    <section id="list-topics" className="list-topics">
      <div className="list-topics-content">
        <ul>
          <ListingCard iconClass="flaticon-restaurant" title="restaurant" link="#" count={150} />
          <ListingCard iconClass="flaticon-travel" title="destination" link="#" count={214} />
          <ListingCard iconClass="flaticon-building" title="hotels" link="#" count={185} />
          <ListingCard iconClass="flaticon-pills" title="healthcare" link="#" count={200} />
          <ListingCard iconClass="flaticon-transport" title="automotion" link="#" count={120} />
        </ul>
      </div>
    </section>
  );
}

export default Listings;

