import { useState,useEffect } from "react"
import "./Toggle.css"

export const ToggleSwitch=()=>{
    const [isOn,setIsOn]=useState(false);
 // Effect to update body background color based on the initial state
 useEffect(() => {
    // Set the body background color based on the initial state
    document.body.style.backgroundColor = isOn ? "black" : "gray";
}, []); // Empty dependency array means this runs only on initial mount

    const handleToggleSwitch=()=>{
        setIsOn(isOn => {
            // Change body background color based on the new state
            document.body.style.backgroundColor = !isOn ? "black" : "gray";
            document.body.style.color = !isOn ? "white" : "black";
            return !isOn;
        });
    }
    const checkState= isOn? "dark" :"light";
    
    const chnageBg= {backgroundColor:isOn? "black" :"gray"};
    return(
        <>
        <div className="toggle-switch" style={chnageBg} onClick={handleToggleSwitch}>
            <div className={`switch ${checkState}`} >
                {/* two ways:
                1. isOn? "on" :"off"
                2. using varible= checkState
                */}
                <span className="state">{checkState}</span>
            </div>
        </div>
<p>Hi</p>
        </>
    )
}