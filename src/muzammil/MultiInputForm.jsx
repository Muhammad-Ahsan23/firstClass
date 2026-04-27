import React, { useState } from 'react'

export default function MultiInputForm() {

    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        age: "",
        rollNumber: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("FormData: ", formData);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">
                    Name
                    <input name='name' onChange={handleChange} type="text" />
                </label>

                <br />
                <br />


                <label htmlFor="">
                    Father Name
                    <input name='fatherName'
                        onChange={handleChange}
                        type="text" />
                </label>

                <br />
                <br />


                <label htmlFor="">
                    Age
                    <input name='age'
                        onChange={handleChange}
                        type="text" />
                </label>

                <br />
                <br />


                <label htmlFor="">
                    roll number
                    <input name='rollNumber'
                        onChange={handleChange}
                        type="text" />
                </label>

                <br />
                <br />

                <button type='submit'>Submit</button>

            </form>

        </div>


    )
}
