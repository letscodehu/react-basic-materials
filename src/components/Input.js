import "./Input.scoped.css"
export default function Input(props) {
    return (
        <input type={props.type} value={props.field.value} onChange={e => props.setter({ value: e.target.value, dirty: true })} placeholder={props.placeholder} />
    )
}
