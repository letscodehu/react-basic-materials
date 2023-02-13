import './Button.scoped.css'
export default function Button(props) {
    return (
        <button onClick={props.handler}>{props.text}</button>
    )
}

