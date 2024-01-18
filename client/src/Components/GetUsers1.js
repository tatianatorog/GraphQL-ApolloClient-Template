import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers1() {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

   
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.firstName}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
export default GetUsers1;