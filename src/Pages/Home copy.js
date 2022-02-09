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

                    <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                        className="Home">
                        <h1>Je suis un étudiant en développement web spécialisé <br></br> en Node.js et en React.js</h1>
                        <p>Actuellement disponible pour un <span>stage de 6 mois à partir d'Avril</span></p>
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

                        {/* <img src={require('../Img/3372-removebg-preview (1).png')}></img> */}
                    </motion.div >
                </div>
            </div>
        </div>
    )
}