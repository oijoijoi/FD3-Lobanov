var IShop = React.createClass({

    displayName: 'Интернет магазин',

    propTypes: {
        goods: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                img: React.PropTypes.string,
                quantity: React.PropTypes.number.isRequired,
            })
        )
    },

    render: function() {
        let shopBlock = [];
        this.props.goods.forEach( function(item, i) {  //тут сделал именно через forEach, т.к. было в задании написано...
            shopBlock[i] = React.DOM.div({className:'goods__block', key:i},
                React.DOM.img({className:'goods__img',src:item.img}),
                React.DOM.span({className:'goods__name'},item.name),
                React.DOM.span({className:'goods__quantity'},'Количество: '+item.quantity),
                React.DOM.span({className:'goods__price'},item.price+'$'),
            )}
        );
        return React.DOM.div({className:'goods__wrapper'}, shopBlock);
    }

});