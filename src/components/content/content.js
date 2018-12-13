import React, {Component} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

import './content.css';

class Content extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Header {...this.props} tag={this.props.tag}/>

                <div className={'content'}>
                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }

}

export default Content;