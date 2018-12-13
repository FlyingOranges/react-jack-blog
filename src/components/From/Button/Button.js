import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.clikcName} className={'default-button'}>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;