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

    saveChangesFunction = (id, name, url, quant, price, desc) => {
        let product = {
            id: id,
            name: name,
            price: price,
            img: url,
            quantity: quant,
            description: desc,
        };
        if (!this.state.selected) {
            this.state.goods.push(product);
        }
        else {
            this.state.goods.forEach((item, i) => {
                if (item.id === this.state.selected) {
                    this.state.goods.splice(i, 1, product);
                }
            })
        }
        this.setState({goods:this.state.goods,selected:id});
        this.exitEditModeFunction();
    };

    deletingFunction = (code) => {
        if (confirm('Удалить?')) {
            this.state.goods.splice(code, 1);
        }
        this.setState({goods:this.state.goods});
    };

    addNewElement = () => {
        this.setState({selected:null, workMode:'edit'})
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
        let IDArr = [];
        this.state.goods.forEach(item => {
            IDArr.push(item.id);
        });
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
                        idArray={IDArr}
                        description={selectedHash.description}
                        exitEditMode={this.exitEditModeFunction}
                        saveChanges={this.saveChangesFunction}
                    />
            }
        }
        if (!this.state.selected && this.state.workMode === 'edit') {
            mainBlock =
                <EditCard
                    idArray={IDArr}
                    exitEditMode={this.exitEditModeFunction}
                    saveChanges={this.saveChangesFunction}
                />
        }

        return (
            <div className="shop__wrapper">
                <div className="shop__header">
                    Магазин оружия CS:GO
                </div>
                <div className="shop__sidebar">
                    <div className="shop__prod-list">
                        {prodList}
                    </div>
                    <input className="shop__sidebar-button" type="button" value="Add new" onClick={this.addNewElement} />
                </div>
                <div className="shop__info-card">
                    {mainBlock}
                </div>
            </div>
        )
    };
}

export default IShop3;