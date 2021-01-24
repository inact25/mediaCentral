import React, {Component} from 'react';
import {navigationLink} from '../variables/NavigationLink'
import {Link} from 'react-router-dom'
import SearchBar from "../components/SearchBar";


class NavigationSection extends Component {

    render() {
        const {linkClick, searchData, searchChange, searchButton, btnStatus} = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-5 navStyle">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {navigationLink.map(linkData =>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => linkClick(linkData.url)}
                                      to={linkData.url}>{linkData.title}<span className="sr-only"/></Link>
                            </li>
                        )}
                    </ul>
                    <SearchBar funcSubmit={searchButton} title={"Cari"} funcChange={searchChange}
                               searchValue={searchData} btnStatus={btnStatus}/>
                </div>
            </nav>
        );
    }
}

export default NavigationSection;