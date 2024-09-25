import React from "react";

function Variable() {
    const appName = "React Variable Example"; // String variable
    let user = "John Doe";  // String variable that can change
    let age = 30;           // Number variable
    const isLoggedIn = true; // Boolean variable

    return (
        <div>
            <h1>{appName}</h1>
            <p>User: {user}</p>
            <p>Age: {age}</p>
            <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        </div>
    );
}

export default Variable;
