import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Punya Projek yang ingin diselesaikan ?{" "}
        <br className="sm:block hidden" />
        Mari buat Bersama !
      </p>
      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
