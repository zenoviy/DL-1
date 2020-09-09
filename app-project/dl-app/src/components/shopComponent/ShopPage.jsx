import React, { useContext } from "react";
import { ShopStateContext } from "./shopProvider";
import { Link, useRouteMatch } from "react-router-dom";
import { linkNameCreator } from "../../business/pageServices";
import "./style.css";

export function ShopPageComponent(props) {
    const [shopState, setShopState] = useContext(ShopStateContext);
    console.log(shopState)
    return(
        <div className="container page-body">
            <h1>Shop Page</h1>
            <ShopInnerComponent marketData={shopState.shopData} setShopState={setShopState}></ShopInnerComponent>
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

    static getDerivedPropsData(props, stata){
        return { shopProduct: props.marketData ?  props.marketData : [] }
    }

    componentDidUpdate(){
        return { shopProduct: this.props.marketData ?  this.props.marketData : [] }
    }
         

    render(){
        const marketData = this.props.marketData.dataBody? this.props.marketData.dataBody : [];
        let allCard = marketData.map((productItem, index) => {
            return(<ShopCard key={index} currentProduct={productItem} currentId={index}></ShopCard>)
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
                 <img src={image[0]} alt={name} />
                <h3>{name}</h3>
                <h4>{formatedPrice}</h4>
             </div>
            </Link>
        </li>
       
    )

}