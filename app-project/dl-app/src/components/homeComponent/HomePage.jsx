import React from "react";
import "./home-style.css";

export function HomePageComponent(props) {
    const appLocalState = {
        name: "App Home Object"
    }
    return(
        <div className="container page-body">
            <h1>Home Page</h1>
            <AppDescription localState={appLocalState} />
        </div>
    )
}


export class AppDescription extends React.Component{
    constructor(props){
        super(props)
        this.localState = props.localState? props.localState : props.value;
        this.state = {
            clicks: 0,
            price: 1,
            isTogled: false,
            displayText: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.priceIncrease = this.priceIncrease.bind(this);
        this.priceDecrise = this.priceDecrise.bind(this);
        this.toggleColors = this.toggleColors.bind(this);
        this.inpuText = this.inpuText.bind(this);
    }
    inpuText(event){
        this.setState({
            displayText: event.target.value
        })
    }
    toggleColors(){
        console.log("togle")
        let toggleState = !this.state.isTogled;
        this.setState({
            isTogled: toggleState
        })
    }
    priceIncrease(increaseValue){
        let newPrice = this.state.price + increaseValue;
        this.changeComponentState("price", newPrice)
    }
    priceDecrise(increaseValue){
        let newPrice = this.state.price - increaseValue;
        this.changeComponentState("price", newPrice)
    }
    handleClick(event){
        let clicks = this.state.clicks + 1;
        this.setState({
            clicks: clicks
        })
    }
    changeComponentState(key, value){
        this.setState(
        {
            [key] : value
        })
    }

    render(){
        const localState = this.localState;
        const clickNumber = this.state.clicks;
        const price = this.state.price;
        const isTogled = this.state.isTogled;
        return(
            <React.Fragment>
                <hr></hr>
                <p>App Description text</p>
                <i>{ localState ? localState.name : ""}</i>

                <h4>{clickNumber}</h4>
                <h4>Price: {price}</h4>
                <button onClick={this.handleClick}>Click</button>

                <button onClick={() => { this.priceIncrease(3) } }>+</button>
                <button onClick={() => { this.priceDecrise(3) } }>-</button>

                <div className={isTogled ? "toggle-squere red-square" : "toggle-squere"}></div>
                <div className={isTogled ? "toggle-squere" : "toggle-squere blue-square"}></div>
                <ToggleElement 
                    toggleColors={this.toggleColors} 
                    isTogled={isTogled}
                    inpuText={this.inpuText}
                    displayText={this.state.displayText}
                > </ToggleElement>
            </React.Fragment>
        )
    }
}



class ToggleElement extends React.Component {
    constructor(porps){
        super(porps)
    }
    render(){
        return(
            <div>
                <div className= {this.props.isTogled ? "toggle-squere red-square" : "toggle-squere yellow-square"}></div>
                <input onChange={() => { this.props.toggleColors() }} type="checkbox" />
                <TextComponent inpuText={this.props.inpuText} displayText={this.props.displayText}></TextComponent>
            </div>
        )
    }
}
export function TextComponent(props){
    return(
        <div>
            <h4>{props.displayText}</h4>
            <input onChange={((event) => { props.inpuText(event)})} type="text" placeholder="enter You text message"/>
        </div>
    )
}




