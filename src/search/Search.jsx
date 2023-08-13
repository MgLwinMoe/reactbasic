import { Component } from "react";
import './search-box.css'

class SearchBar extends Component {
    render () {
        return (
            <input type='search' className={`search-box ${this.props.className}`} placeholder={this.props.placeholder} onChange={this.props.onSearchHandler} />
        );
    }
}

export default SearchBar