import "./Hero.css";
import * as React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="Hero">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
        </div>
        <div className="content">
          <h3>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </h3>
        </div>

        <div className="hero-img">
\
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}
