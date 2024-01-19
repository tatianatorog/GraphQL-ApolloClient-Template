import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { gql, useMutation } from "@apollo/client";

function Form1() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, {error}] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            },
        });
        if (error) {
            console.log(error);
        }
    }


return (
    <div>
        <input
            type="text"
            placeholder="First Name"
            onChange={(event) => {
                setFirstName(event.target.value);
            }}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => {
                setLastName(event.target.value);
            }}
        />
        <input
            type="text"
            placeholder="Email"
            onChange={(event) => {
                setEmail(event.target.value);
            }}
        />
        <input
            type="text"
            placeholder="Password"
            onChange={(event) => {
                setPassword(event.target.value);
            }}
        />
        <button onClick={addUser}>Add User</button>
    </div>
);
}
export default Form1;