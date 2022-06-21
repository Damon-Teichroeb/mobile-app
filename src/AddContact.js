import { useState } from "react";
import { stringify } from "postcss";
import contacts from "./contactInfo";

function AddContact() {
    const [inputs, setInputs] = useState({});

    const handleChange = (data) => {
        const name = data.target.name;
        const value = data.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
       e.preventDefault();

       fetch('fileHandler.js', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify.inputs
       }).then(() => console.log("Sent contact data"));
    };

    return (
        <>
            <h1>Add Contact</h1>
            <form className="App-add" onSubmit={handleSubmit}>
                <label>Upload a profile image</label>
                <input type="file" name="file" />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={inputs.phone || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={inputs.fname || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={inputs.lname || ""}
                    onChange={handleChange}
                />
                <input type="submit" value="Add Contact" />
            </form>
        </>
    );
}

export default AddContact