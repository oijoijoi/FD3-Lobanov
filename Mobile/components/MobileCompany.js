import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fio: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            }),
        ),
    };

    state = {
        name: this.props.name,
        fullList: this.props.clients,
        clients: this.props.clients,
        filter: 'all',
    };

    setFilter = (EO) => {
        let filterState = EO.target.value;
        this.filterClients(this.state.fullList, filterState);
    };

    filterClients = (array, filter) => {
        let newClients = [];
        switch (filter) {
            case 'all' :
                newClients = array;
                break;
            case 'active' :
                array.forEach(client => {
                    if (client.balance > 0) {
                        newClients.push(client);
                    }
                });
                break;
            case 'baned' :
                array.forEach(client => {
                    if (client.balance <= 0) {
                        newClients.push(client);
                    }
                });
                break;
        }
        this.setState({clients:newClients, filter:filter, fullList:array})
    };

    deleteClientFunction = (ID) => {
        let newClients = [];
        this.state.fullList.forEach((client) => {
            if (ID !== client.id) {
                newClients.push(client);
            }
        });

        this.filterClients(newClients, this.state.filter)
    };

    render() {
        console.log("MobileCompany render");
        let clientsCode=this.state.clients.map( client =>
            <MobileClient key={client.id} info={client} deleteFunc={this.deleteClientFunction}/>
        );

        return (
            <div className='MobileCompany'>
                <div>
                    <span>Фильтрация клиентов:</span>
                    <br />
                    <input type="radio" name="filter" id="filterAll" onChange={this.setFilter} value="all" defaultChecked={true}/>
                    <label htmlFor="filterAll">Все клиенты</label>
                    <br />
                    <input type="radio" name="filter" id="filterActive" onChange={this.setFilter} value="active" />
                    <label htmlFor="filterActive">Активные</label>
                    <br />
                    <input type="radio" name="filter" id="filterBaned" onChange={this.setFilter} value="baned" />
                    <label htmlFor="filterBaned">Заблокированные</label>
                    <br />
                </div>
                <div className='MobileCompanyClients'>
                    {clientsCode}
                </div>
                <input type="button" value="Добавить ового клиента" onClick={this.addNewClient} />
            </div>
        );
    }
}

export default MobileCompany;