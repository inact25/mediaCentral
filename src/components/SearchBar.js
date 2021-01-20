import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        const {funcSubmit, title, funcChange, searchValue, btnStatus} = this.props
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control rounded-pill mr-sm-2" type="search"
                           onChange={(e) => funcChange(e)} value={searchValue} placeholder="Search"
                           aria-label="Search"/>
                    <button className="btn btn-outline-light rounded-pill my-2 my-sm-0" type="submit"
                            disabled={btnStatus} onClick={(e) => funcSubmit(e)}>{title}
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;