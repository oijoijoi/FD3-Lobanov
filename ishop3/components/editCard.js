import React from 'react';
import PropTypes from 'prop-types';

import './editCard.css';

class EditCard extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string,
        exitEditMode: PropTypes.func,
    };

    state = {
        img: this.props.img,
        nameErrorMsg: '',
    };

    previewImg = (e) => {
        this.setState({img:e.target.value})
    };

    exitEditMode = () => {
        this.props.exitEditMode();
    };

    validateChanges = () => {
        let el = document.getElementById('name').value;
        if (el === '') {this.state.nameErrorMsg = 'Поле не может быть пустым'}
        if (el.length > 30) {this.state.nameErrorMsg = 'Не более 30 символов'}
        this.setState({nameErrorMsg:this.state.nameErrorMgs});
    };

    render() {
        return (
            <form className="edit-card__wrapper">
                <label htmlFor="name">Название </label>
                <input id="name" type="text" defaultValue={this.props.name}/>
                <span className="edit-card__error-text">{this.state.nameErrorMsg}</span>
                <br />
                <img className='info-card__img' src={this.state.img} />
                <br />
                <label htmlFor="url">Ссылка </label>
                <input id="url" type="url" defaultValue={this.props.img} onChange={this.previewImg} />
                <span className="edit-card__error-text">{this.state.urlErrorMsg}</span>
                <div className='info-card__text'>
                    <label htmlFor="price">Цена </label>
                    <input id="price" type="text" defaultValue={this.props.price}/>
                    <span className="edit-card__error-text">{this.state.priceErrorMsg}</span>
                    <br />
                    <label htmlFor="quan">Количество </label>
                    <input id="quan" type="text" defaultValue={this.props.quantity} />
                    <span className="edit-card__error-text">{this.state.quantErrorMsg}</span>
                    <br />
                    <label htmlFor="desc">Описание </label>
                    <br />
                    <textarea id="desc" type="text" defaultValue={this.props.description}>
                    </textarea>
                </div>
                <input type="button" value="Save" onClick={this.validateChanges} />
                <input type="button" value="Exit" onClick={this.exitEditMode} />
            </form>
        )
    }
}

export default EditCard;