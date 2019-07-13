import React from "react"
import "./Option.css"

const Option = (props)=>{
    
    return(
        <div className="option">
            <h3>Choose Your Lucky Color</h3>
            <div className="greenOption">
                <input type="radio" id="green" name="optionSelect" onClick={()=>{props.click("green")}} value="green" />
                <label>Green</label>
            </div>
            <div className="blackOption">
                <input type="radio" id="black" name="optionSelect" onClick={()=>{props.click("black")}} value="black" />
                <label>Black</label>
            </div>
            <div className="pinkOption">  
                <input type="radio" id="pink" name="optionSelect" onClick={()=>{props.click("pink")}} value="pink" />
                <label>Pink</label>
            </div>
        </div>
    );
    
}

export default (Option);