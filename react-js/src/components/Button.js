function Button(props) {
    return (
        <button className={"btn"} onClick={props.toggle}>
            <span>Click me</span>
        </button>
    )

}
export default Button
