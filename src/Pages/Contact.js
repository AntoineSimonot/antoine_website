import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Styles/Contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
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

                    <div>
                    <div>
                            <form ref={form} onSubmit={sendEmail}>
                                    <label>Name:</label>
                                    <input placeholder="your email here" type="email" name="email" />
                                    <label>Message:</label>
                                    <textarea placeholder="your message here" name="message" rows="10" cols="50"></textarea>
                                    <input type="submit" value="Send" />
                            </form>
                        
                        </div>

                        <div className='contacts'>
                            <div className='contact'>
                            <small>Email</small>
                                <p><i className="fas fa-envelope"></i>simonotantoine1@gmail.com</p>
                            </div>
                            <div className='contact'>
                                <small>Phone</small>
                                <p><i className="fas fa-phone"></i>06 89 32 54 94</p>
                            </div>
                            <div className='contact'>
                                <small>Location</small>
                                <p><i className="fas fa-map-marker-alt"></i>Paris, France</p>
                            </div>
                        </div>
                        
                    </div>
                     

                    </div>
                   
                
                </motion.div >
            </div>
        </div>
                        

    );
    
};