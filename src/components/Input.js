import "./Input.css"
export default function Input(props) {
    return (
        <input type={props.type} value={props.value} onChange={e => props.setter(e.target.value)} />
    )
}
