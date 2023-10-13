import React from 'react';

const Statistics: React.FC = () => (
  <section id="statistics" className="statistics">
    <div className="container">
      <div className="statistics-counter">
        <div className="col-md-3 col-sm-6">
          <SingleStatisticsBox count={90} unit="K+" title="listings" />
        </div>
        <div className="col-md-3 col-sm-6">
          <SingleStatisticsBox count={40} unit="K+" title="listing categories" />
        </div>
        <div className="col-md-3 col-sm-6">
          <SingleStatisticsBox count={65} unit="K+" title="visitors" />
        </div>
        <div className="col-md-3 col-sm-6">
          <SingleStatisticsBox count={50} unit="K+" title="happy clients" />
        </div>
      </div>
    </div>
  </section>
);

interface SingleStatisticsBoxProps {
  count: number;
  unit: string;
  title: string;
}

const SingleStatisticsBox: React.FC<SingleStatisticsBoxProps> = ({ count, unit, title }) => (
  <div className="single-ststistics-box">
    <div className="statistics-content">
      <div className="counter">{count}</div> <span>{unit}</span>
    </div>
    <h3>{title}</h3>
  </div>
);

export default Statistics;
