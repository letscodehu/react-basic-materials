import './ErrorLabel.scoped.css'
export default function ErrorLabel(props) {
    if (props.validator()) {
        return null
    }
    return (
        <label className="error">{props.message}</label>
    )
}
