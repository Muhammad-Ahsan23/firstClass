import React, { useState } from 'react'

export default function MultiInputForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value)

        setFormData({
            ...formData, //Spread Operator Old values copy karta h 
            [name]: value // [name] dynamic key hai.
        });

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("form Data ", formData);
    }



    //  Example of Destructing Object

    // const user = {
    //     firstName:"Ahsan",
    //     LastName: "Shaikh"
    // }

    // const { firstName, LastName } = user;

    // console.log(firstName, LastName);

    // ============================
    // Computed Property Testing with Examples 
    // ============================

    // const obj = {
    //     name: "Ahsan"
    // }; //Yha key name h or value "Ahsan"

    // ---
    // Normal Object main value add karna  Ye static hai.
    const key = "email";

    // const obj = {
    //     email: "abc@gmail.com"
    // };

    // Dynamic Key Problem

    // Agar key variable se aaye?

    // const obj = {
    //     key: "abc@gmail.com"
    // };

    //  Wrong Output 

    // {
    //     key: "abc@gmail.com"
    // }

    // Solution → Computed Property

    const obj = {
        [key]: "abc@gmail.com"
    };

    // Output

    // {
    //     email: "abc@gmail.com"
    // }

    // Short Summary 

    // [key] means variable ki value use karo.


    // --------------------------Spread Operator-------------

    // const user = {
    //     name: "Ahsan",
    //     age: 21
    // };

    // const newUser = {
    //     ...user
    // };

    // // output:

    // {
    //     name: "Ahsan",
    //     age: 21
    // }

    // Matlab Copy kardo data 



    return (
        <>
            <h2>React Multi Input Form</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='name' name='name' value={formData.name}
                    onChange={handleChange}
                />

                <input type="text" placeholder='email' name='email' value={formData.email}
                    onChange={handleChange}
                />

                <input type="text" placeholder='age' name='age' value={formData.age}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>

            </form>

        </>
    )

}
