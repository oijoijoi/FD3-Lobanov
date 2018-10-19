var IShop2 = React.createClass({

    displayName: 'Класс магазина',

    propTypes: {
        goods: React.PropTypes.array,
    },

    getInitialState: function() {
        return {
            goods: goods.slice(),
            selected: null,
        }
    },

    selectFunction: function(id) {
        if (this.state.selected === id) {
            this.setState({selected:null});
        }
        else {
            this.setState({selected:id});
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
                {name:v.name, price:v.price, quantity:v.quantity, img:v.img, id:v.id, arrayCode:i, selectedID:this.state.selected, delFunc:this.deletingFunction, selectFunc:this.selectFunction})
            ),
        );
        return React.DOM.div( {className:'shop__wrapper'}, products);
    },

});