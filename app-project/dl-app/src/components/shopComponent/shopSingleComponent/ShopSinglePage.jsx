import React, { useContext } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { ShopSidePanelComponent } from "../shopSidePanel/shopSidePanel";
import { convertSearchToObject } from "../../../business/pageServices";
import { ShopStateContext, formatImage } from "../shopProvider";
import "./style.css";


export function ShopSinglePageComponent(props){
    const [shopState, setShopState] = useContext(ShopStateContext);

    let location = useLocation();
    let linkRout = useParams();
    let {path, url} = useRouteMatch();
    const host = props.appData.HOST;

    const productIndex = location.query ? location.query.id : convertSearchToObject(location.search).id;
    return(
        <React.Fragment>
            <div className="container">
                <h1>{linkRout.name ? linkRout.name : ""}</h1>
                <div className="product-main-body">
                    <SinglePageInner host={host} allProduct={shopState.shopData.dataBody} targetId={productIndex}></SinglePageInner>
                    <ShopSidePanelComponent host={host} allProducts={shopState.shopData.dataBody} targetId={productIndex}></ShopSidePanelComponent>
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
            currentId: this.props.targetId,
            currentGalleryImage: ""
        }
        this.clickOnGallery = this.selectPicture.bind(this);
    }
    selectPicture(picture){
        
        let currentImage = picture;
        console.log(picture)
        this.setState({
            currentGalleryImage: currentImage
        })
    }
    componentWillReceiveProps(){
        console.log("unmount")
        this.setState({
            currentGalleryImage: ""
        })/**/
    }
    render(){
        let targetProduct = searchCurrentProduct(this.props.allProduct, this.props.targetId) || [];
        const host = this.props.host;
        //console.log("single-panell reload", targetProduct)
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
            return( <img onClick={() => this.clickOnGallery(pic)} key={i} 
            className={this.state.currentGalleryImage === pic || !this.state.currentGalleryImage && i === 0? "prod-galery-img selected-picture" : "prod-galery-img"} 
            src={formatImage(pic, host)} />)
        }) : "";
        return(
            <React.Fragment>
                <div className="product-description-inner">
                    <div className="media-area">
                        <img src={image? formatImage(this.state.currentGalleryImage || image[0], host) : ""} />
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