import React, { useContext } from "react";
import { UsersStateContext } from "./userProvider";
import { postServerData, deleteServerData } from "../../business/requestServices";
import "./style.css";


export function UsersPageComponent(props) {
    const [users, setUsers] = useContext(UsersStateContext);
    return(
        <div className="container page-body">
            <h1>Users Page</h1>
            <div className="user-screen-container">
                <UserForm userData={ users.usersData } setUsers={ setUsers } appData={ props.appData }></UserForm>
                <DisplayUsers allUsers={users.usersData} setUsers={ setUsers } appData={ props.appData }></DisplayUsers>
            </div>
            
        </div>
    )
}


function UserForm(props) {
    return(
        <React.Fragment>
            <form className="user-form" onSubmit={(e) => { 
                e.preventDefault(); 
                createUser(e.target, props.setUsers, props.appData);
                e.target.reset();
            }}>
                <label htmlFor="userName">
                    <p>* Enter you name</p>
                    <input id="userName" name="userName" type="text" placeholder="Enter you name" required />
                </label>
                <label htmlFor="nickName">
                    <p>* Enter you nick name</p>
                    <input id="nickName" name="nickName" type="text" placeholder="Enter you nick name" required />
                </label>
                <label htmlFor="userMail">
                    <p>* Enter you email</p>
                    <input id="userMail" name="userMail" type="mail" placeholder="Enter you email" required />
                </label>
                <label htmlFor="userPassword">
                    <p>* Enter you password</p>
                    <input id="userPassword" name="userPassword" type="password" placeholder="Enter you password" required />
                </label>
                <br></br>
                <input type="submit" value="Create user" />
            </form>
        </React.Fragment>
    )
}

//.dataBody
function DisplayUsers(props){
    let users = props.allUsers;
    if(!users || !users.dataBody) return false
    console.log(users.dataBody)
    const allUserCard = users.dataBody.map(item =>{
        return(
            <li key={item.id}>
                <p>Nick Name: {item.nickName}
                    <button onClick={() => deleteUser(item.id, props.setUsers, props.appData) }>X</button>
                </p>
                
            </li>
        )
    })
    return(
        <React.Fragment>
            <ul>{allUserCard ? allUserCard : ""}</ul>
        </React.Fragment>
    )
}


function deleteUser(userId, setUsers, appData){
    const headers = {
        'Content-Type' : 'application/json',
        'selecteduserid' : userId
    }
    let userPostLink = appData.HOST + "app-user-work";
    let serverUserRequest = deleteServerData(userPostLink)
    serverUserRequest.then(data => {
        console.log(data)
        setUsers({
            usersData: data
        })
    })
}


function createUser(targetForm, setUsers, appData){ 
    let formObject = {};
    for(let targetItem of targetForm){
        if(targetItem.name && targetItem.value){
            formObject[targetItem.name] = targetItem.value;
        }
    }
    let userPostLink = appData.HOST + "app-user-work";
    let serverUserRequest = postServerData(userPostLink, {"Content-Type" : "application/json"}, JSON.stringify(formObject));
    
    serverUserRequest.then(data => {
        if(!data.dataBody) return false

        console.log(data.dataBody, setUsers)
        setUsers({
            usersData: data
        })
    }) 
}