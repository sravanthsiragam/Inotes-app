import React from "react";
import Notes from "./Notes";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="notes-container">
        <Notes showAlert={props.showAlert} />
      </div>
    </div>
  );
};

export default Home;
