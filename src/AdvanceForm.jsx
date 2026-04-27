import React, { useState } from 'react'

export default function AdvanceForm() {

    const [formData, setFormData] = useState({
        gender: "",
        agree: false,
        country: "PK",
    });


    const handleChange = (e) => {
        const { name, type ,value ,checked } = e.target;

        setFormData({
            ...formData, //Spread Operator Old values copy karta h 
            [name]: type === 'checkbox' ? checked : value 
        });

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("form Data ", formData);
    }



    return (
        <>
            <h2>Advance form with checkbox, radio, select</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">
                    <input type="radio" name='gender' value="male"
                    checked={formData.gender === 'male'}
                     onChange={handleChange} />
                    Male
                </label>

                <label htmlFor="">
                    <input type="radio" name='gender' value="female"
                    checked={formData.gender === 'female'}
                     onChange={handleChange} />
                    Female
                </label>

                <label htmlFor="">
                    <select name="country" value={formData.country}  onChange={handleChange}>
                        <option value="UK">UK</option>
                        <option value="PK">PK</option>
                        <option value="IND">IND</option>
                    </select>
                    Country

                </label>

                <label htmlFor="">
                    <input type="checkbox" name='agree'  
                    checked={formData.agree}
                    onChange={handleChange}/>
                    check Agreement
                </label>


                <button type="submit">Submit</button>

            </form>

        </>
    )

}
