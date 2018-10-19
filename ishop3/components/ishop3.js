import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

import Products from './ishop3-products';

class IShop3 extends React.Component {

    static propTypes = {
        goods: PropTypes.array.isRequired,
    };

    state = {
        goods: this.props.goods,
        selected: null,
    };

    selectFunction = (id) => {
        if (this.state.selected === id) {
            this.setState({selected:null});
        }
        else {
            this.setState({selected:id});
        }
    };

    deletingFunction = (code) => {
        if (confirm('Удалить?')) {
            this.state.goods.splice(code, 1);
            this.setState({goods:this.state.goods});
        }
    };

    render() {
        let products = this.state.goods.map( (v, i) =>
            <Products name={v.name}
                      price={v.price}
                      quantity={v.quantity}
                      img={v.img}
                      id={v.id}
                      arrayCode={i}
                      selectedID={this.state.selected}
                      delFunc={this.deletingFunction}
                      selectFunc={this.selectFunction}
            />
        );
        return <div className='goods__wrapper'>{products}</div>;
    };
}

export default IShop3;