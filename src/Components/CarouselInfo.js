import { motion } from "framer-motion"

export default function CarouselInfo({img, text}) {

    return(
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={img}
        className="CarouselInfo">
            <h2>{text[img].title}</h2>
            <p>{text[img].content}</p>
            <div className="icons">
                <h3>
                    technologies used :
                </h3>
                <div className="technologies">
                    {
                        text[img].icons.map((icon, index) => {
                            return(
                                <div key={index}>
                                    {icon}
                                </div>
                            )
                        })
                    }
                </div>            
            </div>
        </motion.div>
    )    
}