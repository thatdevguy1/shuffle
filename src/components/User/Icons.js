import React from "react"

const Icons = (props)=>{
    let icon;
    //set class of different color based on some user id
    switch(props.userName){
        case("mrGreen") : icon = <div className="icon green"></div>
            break;
        case("mrPink") : icon = <div className="icon pink"></div>
            break;
        case("mrBlack") : icon = <div className="icon black"></div>
            break;
        default: icon = <div className="icon grey"></div>
    }

    return icon;
    
}

export default (Icons);