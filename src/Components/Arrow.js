import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../Styles/Arrow.css';

export default function Arrow({location}) {
    return (
        <div className="Arrow">
            <NavLink to={ location}>
                <motion.i 
                animate={{ x: 10, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                whileHover={{ scale: 1.4, originX: 0}}
                className="fas fa-chevron-right">
                
                </motion.i>
            </NavLink>              
        </div>
    )
}