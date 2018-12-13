import React, {Component} from 'react';
import Content from '../../components/content/content';
import PostLeft from '../../components/layoutList/postLift/postLeft';

import './index.css';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'flying origins',
        }
    }

    render() {
        return (
            <div>
                <Content {...this.props} tag={'index'}>
                    <PostLeft {...this.props}/>
                </Content>
            </div>
        );
    }

    //该生命周期加载数据
    componentDidMount() {

    }

}

export default Index;