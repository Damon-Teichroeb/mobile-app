import contacts from "./contactInfo";

function Contacts() {
    const pathStart = "./images/";
    const pathEnd   = ".png";

    const onClick = (event) => {
        console.log(event.target.id);
    }

    return (
        <>
            <h1>Contacts List</h1>
            {
                contacts.map((contact) =>
                <div className="App-contacts">
                    <li key={contact.email}><img src={pathStart + contact.phone.toString() + pathEnd} alt="Profile" width="100" height="100" />{contact.firstName + " " + contact.lastName + " " + contact.email + " " + contact.phone}</li>
                    <form onClick={onClick}>
                        <input type="button" id={contact.email} value="Delete" />
                    </form>
                </div>
                )
            }
        </>
    );
}

export default Contacts;