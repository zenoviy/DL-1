import React from "react";
import { NavLink } from "react-router-dom";
import { convertSearchToObject, linkNameCreator } from "../../../business/pageServices";
import "./style.css";


export function ShopSidePanelComponent(props){
    const productId = props.targetId;
    let allProducts = props.allProducts || [];
    let allSideCards = allProducts.map(product => {
        return(
            <li key={product.id} className={ productId == product.id ? "side-panell-inner selected-card" : "side-panell-inner"}>
                <CreateSidePanelCard currentItem={product} productId={productId}></CreateSidePanelCard>
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
                        <img src={image? image[0] : ""}/>
                    </div>
                    <h4>{name}</h4>
                    <h5>{formatedPrice}</h5>
                </div>
            </NavLink>
            
            
        </React.Fragment>
    )
}