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
        editFunc: PropTypes.func,
        selectFunc: PropTypes.func,
        selectedID: PropTypes.number,
    };

    highLightSelected = (e) => {
        this.props.selectFunc(this.props.id, e.target.value);
    };

    deleting = () => {
        this.props.delFunc(this.props.arrayCode);
    };

    editing = () => {
        this.props.editFunc(this.props.id);
    };

    render() {
        return (
            <div className={'product__wrapper'+(this.props.selectedID === this.props.id ? ' selected' : '')} onClick={this.highLightSelected}>
                <div className="product__info">
                    <img className='product__img' src={this.props.img} />
                    <div className='product__text'>
                        <div className='product__name'>{'Наименование: ' + this.props.name}</div>
                        <div className='product__price'>{'Цена: ' + this.props.price}</div>
                        <div className='product__quantity'>{'Количество: ' + this.props.quantity}</div>
                    </div>
                </div>
                <div className="product__buttons-block">
                    <input type='button' className='product__delete-button' value='Edit' onClick={this.editing} />
                    <input type='button' className='product__delete-button' value='Delete' onClick={this.deleting} />
                </div>
            </div>
        )
    }
}

export default Products;