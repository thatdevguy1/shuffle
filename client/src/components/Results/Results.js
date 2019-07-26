import React, {Component} from "react"
import './Results.css'

class Results extends Component{
    state ={
        msgShow: false
    };

    componentWillReceiveProps(props){
        if(props.showMsg === true){
            this.setState({msgShow: true});
            setTimeout(()=>{
                this.setState({
                    msgShow: false
                });
            }, 3000);
        };        
    };

    render(){ 
        let msg = <h1 className={this.state.msgShow ? 'showResult' : 'showNone'}> {this.props.win ? 'YOU WIN!' : 'YOU LOSE!'} </h1>;
        return msg;
    };
};

export default (Results);