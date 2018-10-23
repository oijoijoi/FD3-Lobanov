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
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
        img: this.props.img,
        quantity: this.props.quantity,
        description: this.props.description,
        nameErrMsg: null,
        prodIDErrMsg: null,
        urlErrMsg: null,
        priceErrMsg: null,
        quantErrMsg: null,
    };

    previewImg = (e) => {
        this.setState({img:e.target.value})
    };

    exitEditMode = () => {
        this.props.exitEditMode();
    };

    validForm = () => {
        let prodName = document.getElementById('prodName').value.trim();
        let errText = null;
        if (!prodName) {errText = 'Поле не может быть пустым'}
        if (prodName.length > 30) {errText = 'Не более 30 символов'}
        this.setState({name:prodName, nameErrMsg:errText});
        let prodID = document.getElementById('prodID').value.trim();
        errText = null;
        if (prodID != parseInt(prodID)) {errText = 'Только цифры допустимы'}
        if (!prodID) {errText = 'Поле не может быть пустым'}
        prodID = parseInt(prodID);
        if (prodID !== this.props.id && this.props.idArray.indexOf(prodID) > 0) {errText = 'Такой ID уже используется'}
        this.setState({id:prodID, prodIDErrMsg:errText});
        let url = document.getElementById('url').value.trim();
        errText = null;
        if (!url.match(/\.(png|jpe?g|gif)$/i)) {errText = 'Сыллка должна указывать на изображение расширения .jpg, .png или .gif'}
        if (!url) {errText = 'Поле не может быть пустым'}
        this.setState({img:url, urlErrMsg:errText});
        let price = document.getElementById('price').value.trim();
        errText = null;
        if (price != parseInt(price)) {errText = 'Только цифры допустимы'}
        if (!price) {errText = 'Поле не может быть пустым'}
        price = parseInt(price);
        if (price < 0) {errText = 'Меньше 0 не допустимо'}
        this.setState({price:price, priceErrMsg:errText});
        let quant = document.getElementById('quant').value.trim();
        errText = null;
        if (quant != parseInt(quant)) {errText = 'Только цифры допустимы'}
        if (!quant) {errText = 'Поле не может быть пустым'}
        quant = parseInt(quant);
        if (quant < 0) {errText = 'Меньше 0 не допустимо'}
        this.setState({quantity:quant, quantErrMsg:errText});
        let desc = document.getElementById('desc').value.trim();
        this.setState({description:desc});
        if (!errText) {this.props.saveChanges(prodID, prodName, url, quant, price, desc)}
    };

    render() {
        return (
            <form className="edit-card__wrapper">
                <label htmlFor="prodName">Название </label>
                <input id="prodName" type="text" defaultValue={this.props.name} />
                <span className="edit-card__error-text">{this.state.nameErrMsg}</span>
                <br />
                <label htmlFor="prodID">ID товара </label>
                <input id="prodID" type="text" defaultValue={this.props.id} />
                <span className="edit-card__error-text">{this.state.prodIDErrMsg}</span>
                <br />
                <img className='info-card__img' src={this.state.img} />
                <br />
                <label htmlFor="url">Ссылка </label>
                <input id="url" type="url" defaultValue={this.props.img} onChange={this.previewImg} />
                <span className="edit-card__error-text">{this.state.urlErrMsg}</span>
                <div className='info-card__text'>
                    <label htmlFor="price">Цена </label>
                    <input id="price" type="text" defaultValue={this.props.price}/>
                    <span className="edit-card__error-text">{this.state.priceErrMsg}</span>
                    <br />
                    <label htmlFor="quant">Количество </label>
                    <input id="quant" type="text" defaultValue={this.props.quantity} />
                    <span className="edit-card__error-text">{this.state.quantErrMsg}</span>
                    <br />
                    <label htmlFor="desc">Описание </label>
                    <br />
                    <textarea id="desc" type="text" defaultValue={this.props.description}>
                    </textarea>
                </div>
                <input type="button" value="Save" onClick={this.validForm} />
                <input type="button" value="Exit" onClick={this.exitEditMode} />
            </form>
        )
    }
}

export default EditCard;