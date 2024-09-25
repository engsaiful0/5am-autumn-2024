import React from "react";
function Excercise() {
    const user = {
        name: "John Doe",
        age: 30,
        isLoggedIn: true
    };

    // Accessing object properties
    console.log(user.name);      // "John Doe"
    console.log(user.age);       // 30
    console.log(user.isLoggedIn); // true

    const fruits = ["Apple", "Banana", "Cherry"];
    // Accessing array elements
    console.log(fruits[0]); // "Apple"
    console.log(fruits[1]); // "Banana"

    // Regular function
    function greetRegularFunction(name) {
        return `Hello, ${name}!`;
    }

    // Arrow function
    const greetArrow = (name) => `Hello, ${name}!`;
    console.log(greetArrow("John")); // "Hello, John!"


    const userData = { name: "John", age: 30 };
    // Destructuring
    const { name, age } = userData;

    console.log(name); // "John"
    console.log(age);  // 30

    const fruitsArray = ["Apple", "Banana", "Cherry"];
    // Destructuring
    const [first, second] = fruitsArray;

    console.log(first);  // "Apple"
    console.log(second); // "Banana"

    const fruitsArrayForSpread = ["Apple", "Banana"];
    const moreFruits = [...fruitsArrayForSpread, "Cherry", "Mango"];
    console.log(moreFruits); // ["Apple", "Banana", "Cherry", "Mango"]


    const userObject = { name: "John", age: 30 };
    const updatedUser = { ...userObject, age: 31 };
    console.log(updatedUser); // { name: "John", age: 31 }


    const printFruits = (first, ...rest) => {
        console.log(first);  // "Apple"
        console.log(rest);   // ["Banana", "Cherry"]
    };
    printFruits("Apple", "Banana", "Cherry");

    const nameTemplateLiterals = "John";
    const greeting = `Hello, ${nameTemplateLiterals}!`;

    console.log(greeting); // "Hello, John!"


    const defaultParameter = (name = "Guest") => `Hello, ${name}!`;
    console.log(defaultParameter());        // "Hello, Guest!"
    console.log(defaultParameter("Alice")); // "Hello, Alice!"


    return (
        <div>
            <h1>Excercise Page</h1>
            <h1>Name: {user.name}</h1>
            <p>Age: {user.age}</p>

            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}
export default Excercise;