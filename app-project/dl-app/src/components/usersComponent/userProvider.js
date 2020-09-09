import React, { useState, useEffect } from "react";
import { getServerData, postUserData } from "../../business/requestServices";


export const UsersStateContext = React.createContext();
export function UserProvider(props){
    const [users, setUsers] = useState({
        usersData: []
    });
    useEffect(() => {
        let url = props.appData.HOST + "app-user-work";
        let userServerData = getServerData(url);

        userServerData.then((data) => {
            setUsers({
                usersData: data ? data : []
            })
        })
    }, [])
    return(
        <UsersStateContext.Provider value={[users, setUsers]}>
            { props.children }
        </UsersStateContext.Provider>
    )
}

