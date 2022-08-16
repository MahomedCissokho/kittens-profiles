import { Component } from "react";
import CardContainer from "../CardContainer/CardContainer.component";
import './CardList.css';

class CardList extends Component {
    render() {
        const {FilteredMonsters} = this.props;
        return (
            <div className="CardList">
                {
                    FilteredMonsters.map((monster) => {
                        return (
                            <CardContainer monsters={monster}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;