import React, { useState } from 'react'

export default function MultiInputForm() {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        age:"",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log("form Data ",formData);
    }

    const handleChange = (e)=> {
        const {name,value} = e.target;
    }
    

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
