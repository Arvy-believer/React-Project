import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
        <nav>
            <div className="logo">
                <h4>VAXXMATTER</h4>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li>Vaccine</li>
                <li>Projects</li>
                <li><Link to="/login">Signup/login</Link></li>
            </ul>
            <div className="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </div>
  );
}

function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    console.log("hello");
    if(burger){
        burger.addEventListener("click", () => {
        
            nav.classList.toggle("nav-active");
            
        
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
        
            burger.classList.toggle("toggle");
        });
    }
    
}
navSlide();

export default Home;
