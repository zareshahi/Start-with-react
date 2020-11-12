import React from "react";
import NavBar from "./navBar";

const About = (props) => {
  // set redirect to home
  setTimeout(() => {
    props.history.push("/");
  }, 2000);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>its about page</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          ullam unde veniam saepe! Eum doloremque tempora corrupti veniam, quo
          quam error, fuga temporibus, earum ipsam iure iusto aliquam. Dolorem,
          dicta.
        </span>
      </div>
    </div>
  );
};

export default About;
