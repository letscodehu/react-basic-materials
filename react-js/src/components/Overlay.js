import Modal from './Modal'
function Overlay(props) {
    return (
        <div className={"overlay"} onClick={props.toggle}>
            <Modal text="I am just a span" />
        </div>
    )
}
export default Overlay

