import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/IconButton.css';

function IconButton(props: any) {
    return (
        <button style={props.style} className="icon-button" onClick={props.clickHandler}>
            <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        </button>
    );
}

export default IconButton;