import React, {Component} from 'react';

import './detail.css';

class Detail extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                this is details page
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props);
    }

}

export default Detail;