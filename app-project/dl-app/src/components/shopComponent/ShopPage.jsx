import React, { useContext } from "react";
import { ShopStateContext } from "./shopProvider";
import { Link, useRouteMatch } from "react-router-dom";
import { linkNameCreator } from "../../business/pageServices";
import { formatImage } from "./shopProvider";
import "./style.css";

export function ShopPageComponent(props) {
    const [shopState, setShopState] = useContext(ShopStateContext);
    let appData = props.appData;
    const host = appData.HOST;
    console.log(shopState, host, "<Host")
    return(
        <div className="container page-body">
            <h1>Shop Page</h1>
            <ShopInnerComponent marketData={shopState.shopData} setShopState={setShopState} host={host}></ShopInnerComponent>
        </div>
    )
}


class ShopInnerComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            shopProduct: []
        }
    }
    // Lifecycle in React
    static getDerivedStateFromProps(props, stata){
        console.log("getDerivedStateFromProps")
        return { shopProduct: props.marketData ?  props.marketData : [] }
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentDidCatch(){
        console.log("componentDidCatch")
    }
    

    render(){
        let host = this.props.host;
        const marketData = this.props.marketData.dataBody? this.props.marketData.dataBody : [];
        let allCard = marketData.map((productItem, index) => {
            return(<ShopCard key={index} currentProduct={productItem} currentId={index} host={host}></ShopCard>)
        })  
        return(
            <React.Fragment>
                <ul className="shop-card-wrapper">
                    {allCard? allCard : 'Loading...'}
                </ul>
            </React.Fragment>
        )
    }
}



function ShopCard(props){
    const {
        id,
        name,
        price,
        image
    } = props.currentProduct;
    const host = props.host;
    let { path, url} = useRouteMatch();
    console.log(path, url)
    let formatedPrice = new Intl.NumberFormat("us-US", {style: 'currency', currency: "USD"}).format(price);
    return(
        <li className="single-card">
            <Link to={{
                pathname: `${url}/${linkNameCreator(name)}?id=${id}`,
                query: { id: id }
            }}>
             <div className="card-inner">
                 <img src={formatImage(image[0], host)} alt={name} />
                <h3>{name}</h3>
                <h4>{formatedPrice}</h4>
             </div>
            </Link>
        </li> 
    )
}
