import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

import Products from './ishop3-products';
import InfoCard from './infoCard.js';
import EditCard from './editCard.js';

class IShop3 extends React.Component {

    static propTypes = {
        goods: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                img: PropTypes.string,
                quantity: PropTypes.number.isRequired,
                description: PropTypes.string,
            })
        ),
    };

    state = {
        goods: this.props.goods,
        selected: null,
        workMode: 'show',
    };

    selectFunction = (id, val) => {
        if (val) {
            return;
        }
        if (this.state.selected === id) {
            this.setState({selected:null});
        }
        else {
            this.setState({selected:id, workMode:'show'});
        }
    };

    editFunction = (id) => {
        if (this.state.workMode === 'edit') {
            alert('Уже редактрируете элемент! Закончите или отмените редактирование перед началом нового.');
            return;
        }
        this.setState({selected:id, workMode:'edit'});
    };

    exitEditModeFunction = () => {
        this.setState({workMode:'show'});
    };

    deletingFunction = (code) => {
        if (confirm('Удалить?')) {
            this.state.goods.splice(code, 1);
        }
        this.setState({goods:this.state.goods});
    };

    render() {
        let prodList = this.state.goods.map( (v, i) =>
            <Products
                key={i}
                name={v.name}
                price={v.price}
                quantity={v.quantity}
                img={v.img}
                id={v.id}
                arrayCode={i}
                selectedID={this.state.selected}
                delFunc={this.deletingFunction}
                selectFunc={this.selectFunction}
                editFunc={this.editFunction}
            />
        );
        let selectedHash = this.state.goods.find(el => el.id === this.state.selected);
        let mainBlock;
        if (this.state.selected && selectedHash !== undefined) {
            if (this.state.workMode === 'show') {
                mainBlock =
                    <InfoCard
                        name={selectedHash.name}
                        price={selectedHash.price}
                        quantity={selectedHash.quantity}
                        img={selectedHash.img}
                        id={selectedHash.id}
                        description={selectedHash.description}
                        selectedID={this.state.selected}
                        delFunc={this.deletingFunction}
                        selectFunc={this.selectFunction}
                    />
            }
            if (this.state.workMode === 'edit') {
                mainBlock =
                    <EditCard
                        name={selectedHash.name}
                        price={selectedHash.price}
                        quantity={selectedHash.quantity}
                        img={selectedHash.img}
                        id={selectedHash.id}
                        description={selectedHash.description}
                        exitEditMode={this.exitEditModeFunction}
                        selectFunc={this.selectFunction}
                    />
            }
        }

        return (
            <div className="shop__wrapper">
                <div className="shop__header">
                    Магазин оружия CS:GO
                </div>
                <div className="shop__prod-list">
                    {prodList}
                </div>
                <div className="shop__info-card">
                    {mainBlock}
                </div>
            </div>
        )
    };
}

export default IShop3;