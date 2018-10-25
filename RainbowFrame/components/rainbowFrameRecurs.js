import React from 'react';
import PropTypes from 'prop-types';

import './rainbowFrame.css';

class RainbowFrameRecurs extends React.Component {

    static propTypes = {
        colors: PropTypes.arrayOf(
            PropTypes.string.isRequired,
        ),
    };

    render() {
        if (this.props.colors.length === 0) {
            return (
                this.props.children
            );
        }
        return (
            <div style={{borderColor:this.props.colors[0]}} className="rainbow__block">
                <RainbowFrameRecurs colors={this.props.colors.slice(1)}>
                    {this.props.children}
                </RainbowFrameRecurs>
            </div>
        )
    };

}

export default RainbowFrameRecurs;