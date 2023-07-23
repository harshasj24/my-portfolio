import { Card, Link } from "@mui/material";
import React from "react";
import "./home.scss";
import myProfile from "../../assets/Harsha S J.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Home = () => {
  return (
    <section id="homeWrapper">
      <div id="profileSection">
        <div className="profile__description">
          <h1>Hi, I'am Harsha</h1>
          <p>Fontend Developer</p>
          <p>
            Skilled User Interface developer specializing in web development.
            Adept at building high-quality code and developing an innovative web
            application to meet user needs.
          </p>
          <div className="icons">
            <a href="#">
              <LinkedInIcon />
            </a>

            <a href="#">
              <InstagramIcon />
            </a>
            <a href="https://github.com/harshasj24">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="profile__details">
          <div className="profile__picture">
            <img src={myProfile} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
