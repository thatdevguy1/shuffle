import React from "react"
import "./Option.css"

const Option = (props)=>{
    
    return(
        <div className="option">
            <h3>Choose Your Lucky Color</h3>
            <div className="greenOption">
                <span>Green</span>
            </div>
            <div className="blackOptiom">
                   <span>Black</span>
            </div>
            <div className="pinkOption">  
                <span>Pink</span>
            </div>
        </div>
    );
    
}

export default (Option);