var Products = React.createClass({

    displayName: 'Класс продукта',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        img: React.PropTypes.string,
        quantity: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
        delFunc: React.PropTypes.func,
    },

    getInitialState: function() {
        return {selected : false}
    },

    highLightSelected: function() {
        let toggle = this.state.selected ? false : true;
        this.setState({selected:toggle})
    },

    deleting: function() {
        this.props.delFunc(this.props.code);
    },

    render: function() {
        return React.DOM.div({className:'product__block'+(this.state.selected ? ' selected' : ''), onClick:this.highLightSelected},
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