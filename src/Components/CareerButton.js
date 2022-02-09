import { useEffect } from "react";

export default function CareerButton({name, setShowNumber, setShow}) {

    // on load, set the class on the first button
    useEffect(() => {
        if (setShowNumber === 1) {
            document.querySelector(".CareerButton").classList.add("CareerButtonActive");
        }
    }, [setShowNumber]);
    return(
        <button className={"CareerButton"} onClick={() => {
            setShow(setShowNumber);
            
            // remove the class from buttons
            document.querySelectorAll(".CareerButton").forEach(button => {
                button.classList.remove("selected");
            });

            // add the class to the selected button
            document.querySelector(`.CareerButton:nth-of-type(${setShowNumber})`).classList.add("selected");
        }}>
            {name}
        </button>

    )
   
}