import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../Styles/Arrow.css';

export default function Arrow({location}) {
    return (
        <div className='SocialMediaContainer'>
            <div className='socialMedias'>
                <a href="https://www.linkedin.com/in/simonotantoine/" target="_blank" rel="noopener noreferrer">
                    <motion.i 
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 400 }}
                        className="fab fa-linkedin-in"></motion.i>
                </a>
                <a href="https://github.com/AntoineSimonot" target="_blank" rel="noopener noreferrer">
                    <motion.i 
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 400 }}
                        className="fab fa-github"></motion.i>
                </a>
                <a href="https://www.fiverr.com/gryphenrn" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                        whileHover={{ scale: 1.2, originX: 0 }}
                        transition={{ type:'spring',duration: 0.5, stiffness: 400 }}
                        src={require('../Img/Fiverr.png')}
                        >
                        
                        </motion.img>
                </a>
            </div>
            <div className="trait"/>
            <p>Contact me</p>

            <NavLink to={ "/contact"}>
                <motion.i 
                transition={{ type:'spring',duration: 0.5, stiffness: 400 }}
                className="far fa-envelope "></motion.i>
            </NavLink>
        </div>
       
    )
}