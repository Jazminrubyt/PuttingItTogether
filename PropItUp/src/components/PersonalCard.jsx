import Button from "./Button"
import { useState} from "react"


const PersonalCard = (props) => {
    const {Firstname,LastName, age, hairColor} = props
    const [PresentAge, setAge] = useState(age)
    const incrementAge = (event) =>{
        console.log(event.target);
        setAge(PresentAge +1 );
    }
    return (
        <div className="card text-center bg-success">
            <h1> First Name: {Firstname}</h1>
            <h2> Last Name: {LastName}</h2>
            <p>Age :{PresentAge}</p>
            <p>Hair Color: {hairColor}</p> 
            <Button Firstname = {Firstname} incrementAge = {incrementAge}></Button>
        </div>
        )
}
    
    export default PersonalCard