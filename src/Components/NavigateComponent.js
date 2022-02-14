import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import React, { Fragment, useState } from "react";

export default function NavigateComponent ({ to, i, text, handleShowBurger, burger }) {
    return(
        <motion.li  
        id={i}
        onClick={() => {
            handleShowBurger()
        }
        }
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.2, originX: 0 }}
        transition={{ type:'spring',duration: 0.5, stiffness: 100 }}>
        <NavLink to={ to}><i className={i}></i>{text}</NavLink>
        </motion.li>
    )

}