import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Quality from "../../Component/Qualification/Quality";
import Intro from "../../Component/Introduction/Intro";
import Project from "../../Component/Project/Project";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Quality/>
      <Project/>
    </div>
  );
}

export default Homepage;
