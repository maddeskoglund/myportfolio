import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <span className='brand'><Link to={process.env.PUBLIC_URL + '/'}> <b>Madelein</b>&nbsp;Skoglund</Link></span>
                    <ul className="nav desktop-nav">
                        <li><Link to={process.env.PUBLIC_URL + '/'}> Hem </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/#portfolio'}>Portfolio </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/cv'}> CV </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/about'}> Om mig </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/contact'}> Kontakt </Link></li>
                    </ul>
                    <Menu right={true} width={200} className={'mobile-nav'}>
                        <Link to={process.env.PUBLIC_URL + '/'}> Hem</Link>
                        <Link to={process.env.PUBLIC_URL + '/#portfolio'}> Portfolio</Link>
                        <Link to={process.env.PUBLIC_URL + '/cv'}> CV</Link>
                        <Link to={process.env.PUBLIC_URL + '/about'}> Om mig</Link>
                        <Link to={process.env.PUBLIC_URL + '/contact'}> Kontakt</Link>
                        <a onClick={this.showSettings} className="menu-item--small" href=""> </a>
                    </Menu>
                </div >
            </div >
        )
    }
}

export default Header;
