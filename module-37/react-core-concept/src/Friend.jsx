export default function Friend ({friend}){
    const {name,email,phone,address} = friend;
    const {city,street,suite,zipcode}=address
    console.log(friend)
    return (
        <div className="friend">
            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {suite},{street},{zipcode},{city}.</p>
        </div>
    )
}