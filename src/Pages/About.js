import { motion } from "framer-motion";
import Arrow from "../Components/Arrow";
import '../Styles/Main.css';
import '../Styles/About.css';

export default function About() {
    return (
        <motion.div className="BodyContainer AboutPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <div className="MainContainer">
                <div className="AboutContainer">
                    <motion.h1
                     initial={{ opacity: 0,  y: -50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0, duration: 1, type: "spring", stiffness: 100 }} 
                    >About me</motion.h1>
                    <motion.p
                      initial={{ opacity: 0,  y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1,duration: 1, type: "spring", stiffness: 100 }} 
                    >Hey, I am Antoine Simonot, a junior web developer. Studying at <span>Epitech Digital.</span></motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0,  y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2,duration: 1, type: "spring", stiffness: 100 }} 
                    >I am very interested in new technologies and web development. <br></br>
                       And I love seeing the sites I create come to life and gradually build into a real project. 
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0,  y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3,duration: 1, type: "spring", stiffness: 100 }} 
                    >I had the opportunity to test a lot of technologies but what caught my attention is JavaScript, 
                        I love using this programming language whether with <span>React</span> or <span>Node</span> </motion.p>

                    <motion.p
                      initial={{ opacity: 0,  y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4,duration: 1, type: "spring", stiffness: 100 }} 
                    >Outside of programming, I enjoy making music <span>music</span> and write some <span>stories</span>. I'm also enjoying playing video games a lot.</motion.p>

                    <motion.p
                      initial={{ opacity: 0,  y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5,duration: 1, type: "spring", stiffness: 100 }} 
                    >If we ever meet I'd love to <span>code</span> for/with you. I am currently looking for a job in the web development field. If you are interested in working with me, please contact me!</motion.p>

                </div>
            </div>
        </motion.div>
    )
}