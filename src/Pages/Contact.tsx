import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="subscription">
    <div className="container">
      <div className="subscribe-title text-center">
        <h2>
          Do you want to add your business listing with us?
        </h2>
        <p>
          Listrace offers you to list your business with us, and we are very much able to promote your business.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="subscription-input-group">
            <form action="#">
              <input type="email" className="subscription-input-form" placeholder="Enter your email here" />
              <button className="appsLand-btn subscribe-btn" onClick={() => window.location.href='#'}>
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
