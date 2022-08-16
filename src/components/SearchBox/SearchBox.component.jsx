import { Component } from "react";
import './SearchBox.css';
class SearchBox extends Component {
    render(){
        const {SearchOnChange, placeholder, className} = this.props;
        return (
            <div className='SearchBox'>
                <input type='search' placeholder={placeholder} className={className} onChange={SearchOnChange} />
            </div>
        )
    }
}

export default SearchBox;