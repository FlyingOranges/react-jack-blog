import React, {Component} from 'react';
import Content from '../../components/content/content';
import Button from '../../components/From/Button/Button';

import './home.css';

class Home extends Component {

    render() {
        return (
            <div>
                <Content {...this.props} tag={'home'} >
                    this is Home page
                    <Button text={'点击返回'} clikcName={this.callBack.bind(this)}/>
                </Content>

            </div>
        );
    }

    callBack() {
        this.props.history.push('/');
    }
}

export default Home;