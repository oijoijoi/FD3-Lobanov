import React from 'react';
import PropTypes from 'prop-types';

import './rainbowFrame.css';

class RainbowFrameCycle extends React.Component {

    static propTypes = {
        colors: PropTypes.arrayOf(
            PropTypes.string.isRequired,
        ),
    };

    render() {
        let htmlCode = this.props.children;
        this.props.colors.forEach(function(item) {
            htmlCode = <div style={{borderColor:item}} className="rainbow__block">
                    {htmlCode}
            </div>
        });
        return (
            htmlCode
        )
    };

}

export default RainbowFrameCycle;