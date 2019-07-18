import React from "react";
import Icons from "../User/Icons"
import uuidv from "uuid/v4";
import "./Wheel.css";


class Wheel extends React.Component{
    state = {
        icons: ["green", "pink", "black"],
        wheelColors: [],
        winningIcon: 0,
        winningIconPosition: 0
    };

    //set the game up when the component mounts
    componentWillMount(){
        this.randomIcons();
    };

    //reset the game when props are recieved, This will be triggered when the spin state changes in the app.js
    //checks to see if the state change indicates that the animation is over which in turn reveals the winning color
    componentWillReceiveProps(nextProp){
        if(nextProp.spin === false && nextProp.spin !== this.props.spin){
            this.randomIcons();
        }
    }; 

    //creates a random array of colors based on numbers from 0 - 3 which coincides with colors.
    //a winning color is predetermined by this function
    //the winning colors position is determined for the spin animation to correctly spin to the right position
    //everything is saved in state
    randomIcons = () => {
        let tempArray = [];
        for(var i = 0; i < 13; i++){
            let random = Math.floor(Math.random() * Math.floor(3));
            tempArray.push(this.state.icons[random]);
            console.log(random);
        };

        let winningIcon = Math.floor(Math.random() * 14);
        let winningIconPosition;

        if(winningIcon > 0){
            winningIconPosition = 3304 + (winningIcon * 56);
        }else{
            winningIconPosition = 3304;
        };
        
        console.log(`winning Icon ${winningIcon} `);

        this.setState({
            wheelColors: tempArray,
            winningIcon: winningIcon, 
            winningIconPosition: winningIconPosition
        });

        this.props.winningInfo(tempArray[winningIcon]);

    };

    render(){
        //styles is used for a dynamic transform value. This lets the animation to spin to a different position based on 
        //the predetermined position
        var styles = {
                transition: '4s cubic-bezier(.68,.21,.01,1.1)',
                transform: `translateX(-${this.state.winningIconPosition}px)`
            };

        var spin = ["iconWrap", ""];
        
        //genereates the icons based on the random array of colors
        let iconElements = this.state.wheelColors.map((value)=>{
            return <Icons key={uuidv()} className = "icon" userName = {value} />
        });

        return(
            <div className="wheel">
                <div className="selectionBox" ></div>
                <div className={spin.join(" ")} style={(this.props.spin) ? styles : {}} >
                    {iconElements}
                    {iconElements}
                    {iconElements}
                    {iconElements}
                    {iconElements}
                    {iconElements}
                    {iconElements}
                </div>
            </div>
        );
    };
};

export default (Wheel);