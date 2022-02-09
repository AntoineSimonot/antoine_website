import { motion } from "framer-motion";
import Arrow from "../Components/Arrow";
import '../Styles/Main.css';
import '../Styles/Career.css';
import CareerDetails from "../Components/CareerDetails";
import { useState } from "react";
import CareerButton from "../Components/CareerButton";

export default function Experiences() {
    const [show, setShow] = useState(1);

    return (
        <motion.div className="BodyContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="MainContainer">
                <div className="CareerContainer">
         
                    <h1>Experiences</h1> 
                    <div className="CareerContent">
                        <div className="CareerList">
                            <CareerButton name={"Fiverr"} setShowNumber={1} setShow={setShow}></CareerButton>
                            <CareerButton name={"Portfolio"} setShowNumber={2} setShow={setShow}></CareerButton>
                            <CareerButton name={"Fab'depan"} setShowNumber={3} setShow={setShow}></CareerButton>
                            <CareerButton name={"Ydrazil"} setShowNumber={4} setShow={setShow}></CareerButton>
                        </div>

                      <CareerDetails show={show}></CareerDetails>

                    </div>
                </div>
                <Arrow location={"/projects"}></Arrow>
            </div>

        </motion.div>
    )
}