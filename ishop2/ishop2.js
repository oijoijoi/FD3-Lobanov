var IShop2 = React.createClass({

    displayName: 'Класс магазина',

    propTypes: {
        goods: React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            goods: goods.slice(),
        }
    },

    deletingFunction: function(code) {
        if (confirm('Удалить?')) {
            this.state.goods.splice(code, 1);
            this.setState({goods:this.state.goods});
        }
    },

    render: function() {

        let products = this.state.goods.map( (v, i) =>
            React.DOM.div({key: i, className:'product__wrapper'}, React.createElement(Products,
                {name:v.name, price:v.price, quantity:v.quantity, img:v.img, code:i, delFunc:this.deletingFunction})
            ),
        );
        return React.DOM.div( {className:'shop_wrapper'}, products);
    },

});