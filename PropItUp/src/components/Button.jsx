
const Button = (props) => {
    const {Firstname,incrementAge} = props
    return (
        <button className="btn btn-info"  onClick={(e)=>{alert("Happy Birthday!");{incrementAge(e)}}}> Birthday Button for {Firstname}</button>
        )
    }
    export default Button