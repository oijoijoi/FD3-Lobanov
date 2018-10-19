var Products = React.createClass({

    displayName: 'Класс продукта',

    propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        img: React.PropTypes.string,
        quantity: React.PropTypes.number.isRequired,
        arrayCode: React.PropTypes.number.isRequired,
        delFunc: React.PropTypes.func,
        selectFunc: React.PropTypes.func,
        selectedID: React.PropTypes.number,
    },

    getInitialState: function() {
        return {selected : null}
    },

    highLightSelected: function() {
        this.props.selectFunc(this.props.id);
    },

    deleting: function() {
        this.props.delFunc(this.props.arrayCode);
    },

    render: function() {
        return React.DOM.div({className:'product__block'+(this.props.selectedID === this.props.id ? ' selected' : ''), onClick:this.highLightSelected},
            React.DOM.img({className:'product__img', src:this.props.img}),
            React.DOM.div({className:'product__info'},
                React.DOM.div({className:'product__name'}, 'Наиненование: ' + this.props.name),
                React.DOM.div({className:'product__price'}, 'Цена: ' + this.props.price),
                React.DOM.div({className:'product__quantity'}, 'Количество: ' + this.props.quantity),
            ),
            React.DOM.input({className:'product__delete-button', type:'button', value:'Удалить', onClick:this.deleting})
        );
    },

});