import React from "react";
import Icons from "../User/Icons"
import uuidv from "uuid/v4";
import "./Wheel.css";


class Wheel extends React.Component{
    state = {
        icons: ["mrGreen", "mrPink", "mrBlack"],
        wheelColors: [],
        winningIcon: 0,
        winningIconPosition: 0
    };

    componentWillMount(){
        this.randomIcons();
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.spin === false){
            this.randomIcons();
        }
    }

    randomIcons = () => {
        let tempArray = [];
        for(var i = 0; i < 13; i++){
            let random = Math.floor(Math.random() * Math.floor(3));
            tempArray.push(this.state.icons[random]);
            console.log(random);
        }

        let winningIcon = Math.floor(Math.random() * 14);
        let winningIconPosition;

        if(winningIcon > 0){
            winningIconPosition = 3304 + (winningIcon * 56);
        }else{
            winningIconPosition = 3304;
        }
        
        console.log(`winning Icon ${winningIcon} `);

        this.setState({
            wheelColors: tempArray,
            winningIcon: winningIcon, 
            winningIconPosition: winningIconPosition
        });

    }

    render(){

        var styles = {
                transition: '4s cubic-bezier(.68,.21,.01,1.1)',
                transform: `translateX(-${this.state.winningIconPosition}px)`
            };

        var spin = ["iconWrap", ""];
        
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