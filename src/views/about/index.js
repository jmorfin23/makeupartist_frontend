import React from "react";
import "./index.css";
import Featured from "../../components/featured";
import MyServices from "../../components/my-services";
import { PageTitleHeading } from "../../components/pagetitleheading";
import heading_background from "../../images/dogs.jpg";
import { AboutSection } from "../../components/aboutSection";

const About = () => {
  return (
    <div>
      <PageTitleHeading page={"About Me"} image={heading_background} />
      {/* ============== end section page banner ==============*/}
      <section className="section section-about">
        <AboutSection />
      </section>
      {/* section_about*/}
      <MyServices />
      {/* overlay*/}
      {/* section-paralax */}
      <section className="section section-logos">
        <Featured />
      </section>
    </div>
  );
};

export default About;
