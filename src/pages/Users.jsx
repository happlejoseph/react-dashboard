

import React from "react";
import users from "../datas/users.json"

const User = ()=> {


    return(
        <div className="users-container">
            {users.map((user)=> (
                <div className="user-card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>City: {user.city}</p>

                </div>
            ))}
        </div>
    )
}

export default User;