import "./styles.scss";

function CardList(props) {

    return (
        <div className="square">
            <p>{props.list}
                <p>{props.sortHandler}</p>
            <span className="remove" onClick={props.removeHandler}>x</span>
            </p>
        </div>
    )
}
export default CardList;