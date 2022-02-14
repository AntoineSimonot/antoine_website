import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';
import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import NavigateComponent from './NavigateComponent';

export default function Nav() {
    const [burger, setBurgerOpen] = useState(false);

    const handleShowBurger = () => {
        setBurgerOpen(!burger);
    }

    return(
        <header className={burger.toString()}>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
            >
                <div className='PhotoContainer'>
                    <div className='Photo'/>
                    <h1>Antoine Simonot</h1>
                    <div>
                        <Typed 
                            strings={['I like JavaScript', 'I use React.js', 'And Node.js']}
                            typeSpeed={100}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                </div>
                <ul className={ burger ? "Navigation nav show-burger" : "Navigation hide-burger"}>

                <NavigateComponent to="/" i="burger" text="" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>

                <div className={ burger ? "nav show-nav" : "hide-nav"}> 
                    <NavigateComponent to="/" i="fas fa-home" text="Home" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                    <NavigateComponent to="/about" i="fas fa-user" text="About me" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                    <NavigateComponent to="/experiences" i="fas fa-book" text="Experiences" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                    <NavigateComponent to="/projects" i="fas fa-code" text="Projects" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                    <NavigateComponent to="/hobbies" i="fas fa-laptop-code" text="Hobbies" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                    <NavigateComponent to="/contact" i="fas fa-user" text="Contact me" handleShowBurger={handleShowBurger} burger={burger}></NavigateComponent>
                </div>
                    
                   

                </ul> 
            </motion.nav>
        </header>
        
    )
}