import React from "react";
import { NavLink } from "react-router-dom";
import { convertSearchToObject, linkNameCreator } from "../../../business/pageServices";
import { formatImage } from "../shopProvider";
import "./style.css";


export function ShopSidePanelComponent(props){
    const productId = props.targetId;
    const host = props.host;
    let allProducts = props.allProducts || [];
    let allSideCards = allProducts.map(product => {
        return(
            <li key={product.id} className={ productId == product.id ? "side-panell-inner selected-card" : "side-panell-inner"}>
                <CreateSidePanelCard host={host} currentItem={product} productId={productId}></CreateSidePanelCard>
            </li> 
        )
    })
    return(
        <React.Fragment>
            <div className="side-panell-wrapper">
                <h3>Other Product</h3>
                <ul className="side-panel-card-body">
                    {allSideCards ? allSideCards : ""}
                </ul>
            </div>
            
        </React.Fragment>
    )
}

function CreateSidePanelCard(props) {
    const curentProduct = props.currentItem;
    const host = props.host;
    const {
        id,
        name,
        image,
        price
    } = curentProduct;

    let formatedPrice = new Intl.NumberFormat("us-US", {style: 'currency', currency: "USD"}).format(price);
    return(
        <React.Fragment>
            <NavLink to={{
                pathname : linkNameCreator(name) + `?id=${id}`,
                query: {id: id}
            }}>
                <div >
                    <div>
                        <img src={image? formatImage(image[0], host) : ""}/>
                    </div>
                    <h4>{name}</h4>
                    <h5>{formatedPrice}</h5>
                </div>
            </NavLink>
            
            
        </React.Fragment>
    )
}