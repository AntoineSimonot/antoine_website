import { motion } from "framer-motion";
import '../Styles/Main.css';
import '../Styles/Home.css';
import Arrow from "../Components/Arrow";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="BodyContainer">
            <div className="MainContainer">
                <div 
                 

                    className="HomeContainer">
                    <motion.video 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        loop={true} autoPlay="autoplay" muted="muted">
                        <source src={require("../Img/bgvid.mp4")} type="video/mp4"/>
                    </motion.video>
        

                    <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                        className="Home">
                        <h1>This is my website</h1>
                        <div className="Actions">
                            <NavLink to={ "/"}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Learn more about me!
                                </motion.button>
                            </NavLink>

                            <a href={require('../Img/CV.pdf')} download={true}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}

                                    className="cvButton"
                                >
                                    Download CV!
                                </motion.button>
                            </a>
                        
                        </div>

                    </motion.div >
                    <Arrow location={"/about"}></Arrow>
                </div>
            </div>
        </div>
    )
}