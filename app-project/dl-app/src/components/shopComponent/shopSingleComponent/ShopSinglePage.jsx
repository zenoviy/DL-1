import React, { useContext } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { ShopSidePanelComponent } from "../shopSidePanel/shopSidePanel";
import { convertSearchToObject } from "../../../business/pageServices";
import { ShopStateContext } from "../shopProvider";
import "./style.css";


export function ShopSinglePageComponent(props){
    const [shopState, setShopState] = useContext(ShopStateContext);

    let location = useLocation();
    let linkRout = useParams();
    let {path, url} = useRouteMatch();

    const productIndex = location.query ? location.query.id : convertSearchToObject(location.search).id;
    return(
        <React.Fragment>
            <div className="container">
                <h1>{linkRout.name ? linkRout.name : ""}</h1>
                <div className="product-main-body">
                    <SinglePageInner allProduct={shopState.shopData.dataBody} targetId={productIndex}></SinglePageInner>
                    <ShopSidePanelComponent allProducts={shopState.shopData.dataBody} targetId={productIndex}></ShopSidePanelComponent>
                </div>
            </div>
        </React.Fragment>
    )
}

function searchCurrentProduct(allProduct, searchProductId){
    if(!allProduct) return
    return allProduct.find(productData => productData.id == searchProductId)
}


class SinglePageInner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentId: this.props.targetId
        }
    }
    render(){
        let targetProduct = searchCurrentProduct(this.props.allProduct, this.props.targetId) || [];
        console.log("single-panell reload", targetProduct)
        let {
            id,
            name,
            title,
            image,
            detailDescription,
            price,
            shortDescription
        } = targetProduct;
        let formatedPrice = new Intl.NumberFormat("us-US", {style: 'currency', currency: "USD"}).format(price) || "";
        let allProductPictures = image ? image.map((pic, i)=> {
            return( <img key={i} className="prod-galery-img" src={pic} />)
        }) : "";
        return(
            <React.Fragment>
                <div className="product-description-inner">
                    <div className="media-area">
                        <img src={image? image[0] : ""} />
                        <div className="product-gallery">
                            {allProductPictures}
                        </div>
                    </div>
                    <div className="product-description">

                        <h1>{name ? name : ""}</h1>
                        <h2>{title ? title : ""}</h2>
                        <p>{shortDescription ? shortDescription : ""}</p>
                        <h3>{price ? "Price: " + formatedPrice : ""}</h3>  
                        <p>{detailDescription ? detailDescription : ""}</p>
                    </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}