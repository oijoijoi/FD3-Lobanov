import React from 'react';
import PropTypes from 'prop-types';

import './brtojsx.css';

class BrToJsx extends React.Component {

    static propTypes = {
        str: PropTypes.string.isRequired,
    };

    render() {
        let array = this.props.str.split(/<br>|<br \/>|<br\/>/);
        let text = array.map( (v, i) =>
            <div key={i} className="onestring">
                {v}
            </div>
        );
        console.log(array);
        console.log(text);
        return (
            <div className="mlinetext">
                {text}
            </div>
        )
    };
}

export default BrToJsx;