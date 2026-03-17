import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project you want to create?{" "}
        <br className="sm:block hidden" />
        Let's create it together!
      </p>
      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
