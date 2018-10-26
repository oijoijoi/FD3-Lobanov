import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    state = {
        info: this.props.info,
        edit: false,
    };

    componentWillReceiveProps = (newProps) => {
      console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
      this.setState({info:newProps.info});
    };

    deleteClient = () => {
        this.props.deleteFunc(this.state.info.id);
    };

    editClient = () => {
        this.setState({edit:true});
    };

    acceptChanges = (EO) => {
        let newFio = EO.target.parentNode.getElementById('name').value;
        let newBalance = EO.target.parentNode.getElementById('balance').value;
        console.log(newFio, newBalance);
    };

    cancelChanges = () => {
        this.setState({edit:false});
    };

    render() {
        console.log("MobileClient id="+this.state.info.id+" render");
        let clientBlock = [];
        if (this.state.edit) {
            clientBlock =
                <div className='MobileClient'>
                    <input className='MobileClientFIO-edit' defaultValue={this.state.info.fio} />
                    <input className='MobileClientBalance-edit' defaultValue={this.state.info.balance} type="number"/>
                    <input className='button' type="button" value="ok" onClick={this.acceptChanges}/>
                    <input className='button' type="button" value="cancel" onClick={this.cancelChanges} />
                </div>
            }
        else {
            clientBlock =
                <div className='MobileClient'>
                    <span className='MobileClientFIO'>{this.state.info.fio}</span>
                    <span className='MobileClientBalance'>{this.state.info.balance}</span>
                    <input className='button' type="button" value="edit" onClick={this.editClient}/>
                    <input className='button' type="button" value="del" onClick={this.deleteClient} />
                </div>
        }
        return (
            clientBlock
        );

    }

}

export default MobileClient;
