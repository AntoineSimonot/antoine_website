import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Styles/Contact.css';
import { motion } from 'framer-motion';
import GoogleMapReact from 'google-map-react';
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert';

export default function Contact() {
    const alert = useAlert();


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
              alert.success("Your message has been sent"); 
          }, (error) => {
              console.log(error.text);
          });
      };
    const defaultProps = {
        center: {
          lat: 48.856614,
          lng: 2.3522219
        },
        zoom: 12
      };

    return (
        <div className='BodyContainer'>
            <div className="MainContainer">
                <motion.div className='ContactContainer'
                  initial={{ opacity: 0,  scale: 0.8}}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}>
                    <h1>Contact me!</h1> 
                    <div className='ContactContent'>
                    <div className='MapContainer'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBj1Kwfcr29WIujZhXLk2P7puysXayFNPU" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                        </GoogleMapReact>
                    </div>
                    <div>
                        <div className='contacts'>
                            <h2>Do not hesitate to contact with the informations bellow...</h2>
                            <div className='contact'>
                                <p><i className="fas fa-envelope"></i>simonotantoine1@gmail.com</p>
                            </div>
                            <div className='contact'>
                                <p><i className="fas fa-phone"></i>06 89 32 54 94</p>
                            </div>
                            <div className='contact'>
                                <p><i className="fas fa-map-marker-alt"></i>Paris, France</p>
                            </div>
                        </div>
                        <div>
                            <h2>...or send me a message</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                    <input placeholder="your email here" type="email" name="email" />
                                    <textarea placeholder="your message here" name="message" rows="10" cols="50"></textarea>
                                    <input type="submit" value="Send" />
                            </form>
                        
                        </div>
                    </div>
                     

                    </div>
                   
                
                </motion.div >
            </div>
        </div>
                        

    );
    
};