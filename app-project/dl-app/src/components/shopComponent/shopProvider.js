import React, { useState, useEffect } from "react";
import { getServerData } from "../../business/requestServices";


export const ShopStateContext = React.createContext();
export function ShopProvider(props){
    const [shopState, setShopState] = useState({
        shopData: []
    });
    useEffect(() => {
        let url = props.appData.HOST + "get-product";
        let shopServerData = getServerData(url);

        shopServerData.then((data) => {
            //console.log(data, "Data")
            setShopState({
                shopData: data ? data : []
            })
        })
    }, [])
    return(
        <ShopStateContext.Provider value={[shopState, setShopState]}>
            { props.children }
        </ShopStateContext.Provider>
    )
}