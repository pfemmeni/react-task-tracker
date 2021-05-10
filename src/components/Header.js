import PropTypes from "prop-types"
import Button from "./Button";

const Header = (props) => {
    const onClick = () =>{
        console.log("clicked")
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title: "Task tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// inline style <h1 style={headingStyle}>
// const headingStyle = {
//   color:"red",
//   backgroundColor:"black"
//}
export default Header