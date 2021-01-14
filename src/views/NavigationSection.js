import React, {Component} from 'react';
import {linkList} from '../variables/NavigationLink'


class NavigationSection extends Component {

    render() {
        const {searchData, searchChange, searchButton, btnStatus} = this.props
        console.log(searchData)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-5 navStyle">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {linkList.map(linkData =>
                            <li className="nav-item">
                                <a className="nav-link" href={linkData.url}>{linkData.title}<span className="sr-only"/></a>
                            </li>
                        )}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control rounded-pill mr-sm-2" type="search"
                               onChange={(e) => searchChange(e)} value={searchData} placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-light rounded-pill my-2 my-sm-0" type="submit"
                                disabled={btnStatus} onClick={(e) => searchButton(e)}>Search
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavigationSection;