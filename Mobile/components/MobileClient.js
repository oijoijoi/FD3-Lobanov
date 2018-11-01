import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            editSwitch: PropTypes.bool,
            }),
        onChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    state = {
        info: this.props.info,
        edit: this.props.info.editSwitch,
    };

    componentWillReceiveProps = (newProps) => {
        //console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
        this.setState({info:newProps.info, edit:newProps.info.editSwitch});
    };

    setOnEdit = () => {
        this.setState({edit:true});
    };

    sendEditInfo = (EO) => {
        EO.preventDefault();
        let newInfo = {
            id: this.state.info.id,
            fio: EO.target.fio.value.trim(),
            balance: parseInt(EO.target.balance.value),
            editSwitch: false,
        };
        if (!newInfo.fio) {console.log('Нелья оставить без имени'); return;}
        this.props.onChange(newInfo);
    };

    cancelEdit = () => {
        this.setState({edit:false});
    };

    sentOnDelete = () => {
        this.props.onDelete(this.state.info.id);
    };

    render() {

        console.log("MobileClient id="+this.state.info.id+" render");

        let clientBlock;
        if (this.state.edit) {
            clientBlock =
                <form className='MobileClient' onSubmit={this.sendEditInfo}>
                    <input className='MobileClientFIO' type="text" name="fio" defaultValue={this.state.info.fio} />
                    <input className='MobileClientBalance' type="number" name="balance" defaultValue={this.state.info.balance} />
                    <input className='MobileClientButton' type="submit" value="Принять" />
                    <input className='MobileClientButton' type="button" value="Отмена" onClick={this.cancelEdit}/>
                </form>
        }
        if (!this.state.edit) {
            clientBlock =
                <div className='MobileClient'>
                    <span className='MobileClientFIO'>{this.state.info.fio}</span>
                    <span className='MobileClientBalance'>{this.state.info.balance}</span>
                    <input className='MobileClientButton' type="button" value="Изменить" onClick={this.setOnEdit} />
                    <input className='MobileClientButton' type="button" value="Удалить" onClick={this.sentOnDelete} />
                </div>
        }

        return clientBlock;

        }

    }

export default MobileClient;
