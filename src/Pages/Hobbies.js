import { animate, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Arrow from '../Components/Arrow';
import '../Styles/Hobbies.css';
import { useAlert } from "react-alert";


export default function Hobbies(){
    const alert = useAlert();

    useEffect(() => {
        alert.show("try to grab the wolf and move it to the left or right"); 
        setTimeout(() => {
            alert.error("if the wolf is buggy, try to refresh the page");

        }, 4000);
    }, []);

    const [img, setImg] = useState(1);
    return (
        <motion.div className="BodyContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
            <div className="MainContainer Hobbies">
                <div className='HobbiesContainer'>
                    <h1>Hobbies </h1>
                    <div className='wolfContainer'>
                        <motion.i 
                        animate={{x: [0, -10, 0]}}
                        transition={{duration: 0.8, loop: Infinity}}
                        className="fas fa-arrow-left"></motion.i >

                        <motion.img  
                            className='wolfImg'
                            drag={true} 
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={1}
                            onDragEnd={ (e)=>{
                                console.log(e.layerX)
                                if (e.layerX > 100) {
                                    if (img ===5) {
                                        setImg(1);
                                    }
                                    else{
                                        setImg(img + 1);
                                    }
                                }
                                else if (e.layerX < -40) {
                                    if (img <= 1) {
                                        setImg(5);
                                    }
                                    else{
                                        setImg(img - 1);
                                    }
                                }
                            }}
                            src={require('../Img/Game/Wolf.png')} alt='img'/>

                        <motion.i 
                        animate={{x: [0, 10, 0]}}
                        transition={{duration: 0.8, loop: Infinity}}
                        className="fas fa-arrow-right">
                        </motion.i >
                    </div>
              
                        <div className='wolfGame'>
                            <img className='gameImg' src={require('../Img/Game/Game' + img + ".png")} alt='img'></img>
                        </div>
                        <div className='textGame'>
                        <p>Before getting into web development, my goal was to become a Game Designer.
            I still continue today to be interested in the creation of video games. (wolf game made by me in unity) </p>
                        </div>
                   
                </div>

            </div>
        </motion.div>
    );  
};