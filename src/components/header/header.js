import React, {Component} from 'react';

import './header.css';
import userCover from '../../statics/images/omikron.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '飞翔的橘子'
        };
    }

    render() {
        return (
            <div className={'navbar-container'}>
                <div className={'navbar header'}>
                    <ul className={'menu-ul'}>
                        <li onClick={this.clickHeader.bind(this, '/')}
                            className={this.props.tag === 'index' ? 'menu action' : 'menu'}>
                            主页
                        </li>
                        <li onClick={this.clickHeader.bind(this, '/home')}
                            className={this.props.tag === 'home' ? 'menu action' : 'menu'}>home
                        </li>
                        <li onClick={this.clickHeader.bind(this, '/message')}
                            className={this.props.tag === 'message' ? 'menu action' : 'menu'}>留言
                        </li>
                    </ul>
                </div>

                <div className={'user-cover'}>
                    <div>
                        <img className={'cover-src'} src={userCover} alt={''}/>
                    </div>
                    <div className={'cover-title'}>
                        {this.state.title}
                    </div>
                </div>
            </div>
        );
    }

    clickHeader(tag) {
        if (tag === this.props.location.pathname) {
            return false;
        }

        this.props.history.push(tag);
    }
}

export default Header;

