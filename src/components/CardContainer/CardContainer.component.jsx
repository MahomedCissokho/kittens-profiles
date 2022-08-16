import {Component} from "react";
import './CardContainer.css';

class CardContainer extends Component {
    render(){
        const {id, email, name} = this.props.monsters;
        return (
            <div className="CardContainer" key={id}>
                    <img src={`https://robohash.org/${id}?set=set4`} alt={`monster ${name}`}/>
                    <h3>{name}</h3>
                    <p>{email}</p>
            </div>
        )}
}

export default CardContainer;