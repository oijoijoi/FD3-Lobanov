import React from 'react';
import PropTypes from 'prop-types';

import './editCard.css';

class EditCard extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
        quantity: PropTypes.number,
        description: PropTypes.string,
        idArray: PropTypes.array,
        exitEditMode: PropTypes.func,
        saveChanges: PropTypes.func,
    };

    state = {
        name: '',
        id: '',
        price: '',
        img: '',
        quantity: '',
        description: '',
        nameErrMsg: null,
        prodIDErrMsg: null,
        urlErrMsg: null,
        priceErrMsg: null,
        quantErrMsg: null,
        disableButton: true,
    };

    exitEditMode = () => {
        this.props.exitEditMode();
    };

    getNewStates = () => {
        this.setState({
            name: document.getElementById('prodName').value.trim(),
            id: document.getElementById('prodID').value.trim(),
            price: document.getElementById('price').value.trim(),
            img: document.getElementById('url').value.trim(),
            quantity: document.getElementById('quant').value.trim(),
            description: document.getElementById('desc').value.trim(),
        }, this.validForm);
    };

    validForm = () => {
        let errText = null;
        if (!this.state.name) {errText = 'Поле не может быть пустым'}
        if (this.state.name.length > 30) {errText = 'Не более 30 символов'}
        this.setState({nameErrMsg:errText});

        errText = null;
        if (this.state.id != parseInt(this.state.id)) {errText = 'Только цифры допустимы'}
        if (!this.state.id) {errText = 'Поле не может быть пустым'}
        this.state.id = parseInt(this.state.id);
        if (this.state.id !== this.props.id && this.props.idArray.indexOf(this.state.id) > 0) {errText = 'Такой ID уже используется'}
        this.setState({id:this.state.id, prodIDErrMsg:errText});

        errText = null;
        if (!this.state.img.match(/\.(png|jpe?g|gif)$/i)) {errText = 'Сыллка должна указывать на изображение расширения .jpg, .png или .gif'}
        if (!this.state.img) {errText = 'Поле не может быть пустым'}
        this.setState({urlErrMsg:errText});

        errText = null;
        if (this.state.price != parseInt(this.state.price)) {errText = 'Только цифры допустимы'}
        if (!this.state.price) {errText = 'Поле не может быть пустым'}
        this.state.price = parseInt(this.state.price);
        if (this.state.price < 0) {errText = 'Меньше 0 не допустимо'}
        this.setState({price:this.state.price, priceErrMsg:errText});

        errText = null;
        if (this.state.quantity != parseInt(this.state.quantity)) {errText = 'Только цифры допустимы'}
        if (!this.state.quantity) {errText = 'Поле не может быть пустым'}
        this.state.quantity = parseInt(this.state.quantity);
        if (this.state.quantity < 0) {errText = 'Меньше 0 не допустимо'}
        this.setState({quantity:this.state.quantity, quantErrMsg:errText});

        this.setState({}, this.activateButton);
    };

    activateButton = () => {
        if (!this.state.nameErrMsg &&
            !this.state.prodIDErrMsg &&
            !this.state.urlErrMsg &&
            !this.state.priceErrMsg &&
            !this.state.quantErrMsg) {
            this.setState({disableButton:false})
        }
    };

    saveChanges = () => {
        this.props.saveChanges(this.state.id, this.state.name, this.state.img, this.state.quantity, this.state.price, this.state.description);
    };

    render() {
        return (
            <form className="edit-card__wrapper">
                <label htmlFor="prodName">Название </label>
                <input id="prodName" type="text" defaultValue={this.props.name} onChange={this.getNewStates}/>
                <span className="edit-card__error-text">{this.state.nameErrMsg}</span>
                <br />
                <label htmlFor="prodID">ID товара </label>
                <input id="prodID" type="text" defaultValue={this.props.id} onChange={this.getNewStates}/>
                <span className="edit-card__error-text">{this.state.prodIDErrMsg}</span>
                <br />
                <img className='info-card__img' src={this.state.img} />
                <br />
                <label htmlFor="url">Ссылка </label>
                <input id="url" type="url" defaultValue={this.props.img} onChange={this.getNewStates}/>
                <span className="edit-card__error-text">{this.state.urlErrMsg}</span>
                <div className='info-card__text'>
                    <label htmlFor="price">Цена </label>
                    <input id="price" type="text" defaultValue={this.props.price} onChange={this.getNewStates}/>
                    <span className="edit-card__error-text">{this.state.priceErrMsg}</span>
                    <br />
                    <label htmlFor="quant">Количество </label>
                    <input id="quant" type="text" defaultValue={this.props.quantity} onChange={this.getNewStates}/>
                    <span className="edit-card__error-text">{this.state.quantErrMsg}</span>
                    <br />
                    <label htmlFor="desc">Описание </label>
                    <br />
                    <textarea id="desc" type="text" defaultValue={this.props.description} onChange={this.getNewStates}>
                    </textarea>
                </div>
                <input type="button" value={this.props.name?'Save':'Add'} onClick={this.saveChanges} disabled={this.state.disableButton}/>
                <input type="button" value="Exit" onClick={this.exitEditMode} />
            </form>
        )
    }
}

export default EditCard;