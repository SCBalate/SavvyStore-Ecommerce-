// import React,{useState,useEffect} from 'react'
import {NavLink,useNavigate} from "react-router-dom";
import { Main_Banner,Mens_Banner,Womens_Banner,Kids_Banner,Beauty_Card} from "../../utils/assetImports/imageConstants"
import { FaTwitterSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import "./HomePage.css"
import Categories from "./Categories/Categories";

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className="homepage-container">
<div className="banner-container" onClick={() => navigate("/product")}>
<img className="mainBanner mx-auto " src={Main_Banner} alt="Main-Banner" />
</div>
<div className="category-section">
<div className="category-header-image-container">
          <img
          className="category-header-image object-cover"
            src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648895557/fashify/0b21bba9-e1e2-4dd9-ac99-4a759abe68801648705771876-Shop-By-Category_w2adx7.webp"
            alt="category-header"
          />
        </div>
</div>

<Categories/>
<div className="copyright">
        <div className="social-icons">
          <NavLink to="https://www.linkedin.com/in/scbalate/">
            <FaLinkedin />
          </NavLink>
          <NavLink to="https://x.com/savvyoct99">
            <FaTwitterSquare />
          </NavLink>
          <NavLink to="https://github.com/scbalate">
            <FaGithub />
          </NavLink>
          <NavLink to="https://saurabhbalate.hashnode.dev/">
            <SiHashnode />
          </NavLink>
        </div>
        <p>
          Copyright © Saurabh. Made with <span>♡</span>
        </p>
      </div>
    </div>
  )
}

export default HomePage