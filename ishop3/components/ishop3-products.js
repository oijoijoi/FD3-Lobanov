import React from 'react';
import PropTypes from 'prop-types';

import './ishop3-products.css';

class Products extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string,
        quantity: PropTypes.number.isRequired,
        arrayCode: PropTypes.number.isRequired,
        delFunc: PropTypes.func,
        selectFunc: PropTypes.func,
        selectedID: PropTypes.number,
    };

    highLightSelected = () => {
        this.props.selectFunc(this.props.id);
    };

    deleting = () => {
        this.props.delFunc(this.props.arrayCode);
    };

    render() {
        return (
            <div className={'product__wrapper'+(this.props.selectedID === this.props.id ? ' selected' : '')} onClick={this.highLightSelected}>
                <img className='product__img' src={this.props.img} />
                <div className='product__info'>
                    <div className='product__name'>{'Наименование' + this.props.name}</div>
                    <div className='product__price'>{'Цена: ' + this.props.price}</div>
                    <div className='product__quantity'>{'Количество: ' + this.props.quantity}</div>
                </div>
                <input type='button' className='product__delete-button' value='Удалить' onClick='this.deleting' />
            </div>
        )
    }
}

export default Products;