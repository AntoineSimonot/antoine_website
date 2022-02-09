import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Styles/Projects.css';
import Arrow from '../Components/Arrow';
import CarouselInfo from '../Components/CarouselInfo';
import CarouselTags from '../Components/CaroutelTags';
import { motion } from 'framer-motion';
import { useAlert } from 'react-alert';
export default function Projects(){

    const [img, setImg] = useState(0);
    const text = [
        {
            "title" : "Recreate Youtube",
            "content" : "Symfony project consisting in recreating an appication inspired by youtube (videos, subscriptions, views, likes...)",
            "link" : "https://github.com/AntoineSimonot/Tutube-V2",
            "icons" : [<i class="fab fa-symfony"></i>, <i class="fab fa-php"></i>]

        },
        {
            "title" : "Mcdonalds terminal",
            "content" : "Project in NodeJs (for the back-end) and in ReactJs (for the front-end). The goal is to recreate a McDonald's terminal (basket, products, sandwitch customization...)",
            "link" : "https://github.com/AntoineSimonot/mcdo_eco_plus_react",
            "icons" : [<i class="fab fa-node-js"></i>, <i class="fab fa-react"></i>, <i class="fab fa-js"></i> ]
        },
        {
            "title" : "Invoice manager application",
            "content" : "Project in Symfony. Creation of an order and invoice management application with email sending, pdf creation...",
            "link" : "https://github.com/AntoineSimonot/symfony_command",
            "icons" : [<i class="fab fa-symfony"></i>, <i class="fab fa-php"></i>]
        },
        {
            "title" : "Real time tchat",
            "content" : "The goal is to create a chat application with a real-time chat with Socket.io and ReacJs. There is also a real-time update of the map to show the users location.",
            "link" : "https://github.com/AntoineSimonot/EduProjectMedium",
            "icons" : [<i class="fab fa-js"></i>,<i class="fab fa-react"></i>,  <img src={require("../Img/typescript.png")} alt="img"/>]
        }
    ]

    const alert = useAlert();

    useEffect(() => {
        alert.show("more projects can be found on my github"); 
    }, []);

    return (
        <div className='BodyContainer'>
            <div className="MainContainer">
                <motion.div className='ProjectsContainer'
                  initial={{ opacity: 0,  scale: 0.8}}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}>
                    <h1>Projects</h1> 
                    <div className='CarouselContainer'>
                        <Carousel 
                        onClickItem={(e) => window.open(text[img].link, "_blank")}
                        transitionTime={1000} interval={6000} autoPlay={true} showStatus={false} showThumbs={false}  infiniteLoop={true} 
                        onChange={
                            (e) => {
                                setImg(e);
                            }                  
                        }>
                            <div>
                                <img src={require('../Img/youtube.jpg')} alt='img'/>
                                <p className="legend">Recreate Youtube</p>
                            </div>
                            <div>
                                <img src={require('../Img/mcdo.jpg')} alt='img'/>
                                <p className="legend">Mcdonalds terminal</p>
                            </div>
                            <div>
                                <img src={require('../Img/invoice.jpeg')} alt='img'/>
                                <p className="legend">Invoice manager application</p>
                            </div>
                            <div>
                                <img src={require('../Img/tchat.jpg')} alt='img'/>
                                <p className="legend">Real time tchat</p>
                            </div>          
                        </Carousel>
                        <CarouselInfo img={img} text={text}></CarouselInfo>

                    </div>
                    
                </motion.div >
            </div>
        </div>
                        

    );
    
};