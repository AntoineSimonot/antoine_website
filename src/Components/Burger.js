import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';
import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { useEffect } from "react";

export default function Nav() {
    const alert = useAlert();
    const [burger, setBurgerOpen] = useState(false);

    useEffect(() => {
        alert.show("Welcome on my website!");
    }, []);

    return(
        <header>
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
                <ul className="Navigation">
                    <motion.li
                        initial={{  x: -30 }}
                        animate={{  x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}
                    >
                        <NavLink to={ "/"}><i className="fas fa-home"></i>Home</NavLink>

                    </motion.li>
                    <motion.li
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}
                    >
                        <NavLink to={ "/about"}><i className="fas fa-user"></i>About me</NavLink>
                    </motion.li>
                    <motion.li  
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}>
                        <NavLink to={ "/experiences"}><i className="fas fa-book"></i>Experiences</NavLink>
                    </motion.li>


                    <motion.li  
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}>
                        <NavLink to={ "/projects"}><i className="fas fa-code"></i>Projects</NavLink>
                    </motion.li>
                    <motion.li  
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}>
                        <NavLink to={ "/hobbies"}><i className="fas fa-laptop-code"></i>Hobbies</NavLink>
                    </motion.li>
                    <motion.li  
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}>
                        <NavLink to={ "/contact"}><i className="fas fa-user"></i>Contact me</NavLink>
                    </motion.li>
                </ul>
            </motion.nav>
        </header>
        
    )
}