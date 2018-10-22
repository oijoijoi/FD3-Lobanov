import React from 'react';
import PropTypes from 'prop-types';

import './infoCard.css';

class InfoCard extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string,
        delFunc: PropTypes.func,
        selectFunc: PropTypes.func,
        selectedID: PropTypes.number,
    };

    render() {
        return (
            <div className="info-card__wrapper">
                <h1 className='info-card__name'>{this.props.name}</h1>
                <img className='info-card__img' src={this.props.img} />
                <div className='info-card__text'>
                    <div className="info-crd__description">{'Описание: ' + this.props.description}</div>
                    <div className='info-card__price'>{'Цена: ' + this.props.price}</div>
                    <div className='info-card__quantity'>{'Количество: ' + this.props.quantity}</div>
                </div>
            </div>
        )
    }
}

export default InfoCard;