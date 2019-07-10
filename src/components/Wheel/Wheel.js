import React from "react";
import Icons from "../User/Icons"
import uuidv from "uuid/v4";
import "./Wheel.css";


class Wheel extends React.Component{
    state = {
        icons: ["mrGreen", "mrPink", "mrBlack"],
        wheelColors: []
    };



    componentWillMount(){
        this.randomIcons();
    }

    randomIcons = () => {
        let tempArray = [];
        for(var i = 0; i < 13; i++){
            let random = Math.floor(Math.random() * Math.floor(3));
            tempArray.push(this.state.icons[random]);
            console.log(random);
        }
        this.setState({wheelColors : tempArray});
    }

    render(){

        var spin = ["iconWrap", this.props.spin ? "iconWrapAnimate" : "" ];
        
        let iconElements = this.state.wheelColors.map((value)=>{
            return <Icons key={uuidv()} className = "icon" userName = {value} />
        });

        return(
            <div className="wheel">
                <div className={spin.join(" ")} >
                    {iconElements}
                    {iconElements}
                    {iconElements}
                </div>
            </div>
        );
    };
};

export default (Wheel);