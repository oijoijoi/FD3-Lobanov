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
      })
    ),
  };

  state = {
    name: this.props.name,
    fullList: this.props.clients,
    filtList: this.props.clients,
    filter: 'all',
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  filterClients = (EO) => {
    let newList = [];
    switch (EO.target.id) {
      case 'all':
        newList = [...this.state.fullList];
        break;
      case 'active':
        newList = [...this.state.fullList.filter((client)=>client.balance > 0)];
        break;
      case 'banned':
        newList = [...this.state.fullList.filter((client)=>client.balance <= 0)];
        break;
    }
    this.setState({filtList:newList, filter:EO.target.id});
  };

  changeInfo = (newInfo) => {
    let newList = [...this.state.fullList];
    let newFilteredList = [...this.state.filtList];
    let change = false;
    newList.forEach((client, i) => {
      if (client.id === newInfo.id) {
        if (client.fio !== newInfo.fio || client.balance !== newInfo.balance) {
          newList[i] = newInfo;
          change = true;
        }
      }
    });
    newFilteredList.forEach((client, i) => {
      if (client.id === newInfo.id) {
        if (client.fio !== newInfo.fio || client.balance !== newInfo.balance) {
            newFilteredList[i] = newInfo;
        }
      }
    });
    this.setState({fullList:newList, filtList:newFilteredList});
  };

  addNewClient = () => {
    let lastOne = this.state.fullList[(this.state.fullList.length-1)];
    //if (lastOne.editSwitch) {console.log('Нельзя сразу двух'); return;}
    let newList = [...this.state.fullList];
    let newFilteredList = [...this.state.filtList];
    let newClient = {id:this.state.fullList.length === 0 ? 1 : lastOne.id+1,fio:'',balance:0,editSwitch:true,};
    newList.push(newClient);
    newFilteredList.push(newClient);
    this.setState({fullList:newList,filtList:newFilteredList});
  };

  deleteClient = (ID) => {
      let newList = [...this.state.fullList];
      let newFilteredList = [...this.state.filtList];
      newList.forEach((client, i) => {
        if (client.id === ID) {
          newList.splice(i, 1);
        }
      });
      newFilteredList.forEach((client, i) => {
        if (client.id === ID) {
          newFilteredList.splice(i, 1);
        }
      });
      this.setState({fullList:newList,filtList:newFilteredList});
  };

  render() {

    console.log("MobileCompany render");
    console.log(this.state.fullList);
    let clientsCode=this.state.filtList.map( client =>
      <MobileClient key={client.id} info={client}
                    onDelete={this.deleteClient} onChange={this.changeInfo} />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <form>
          <input type="radio" name="filter" onClick={this.filterClients} id="all" defaultChecked={true} /><label htmlFor="all">Все</label>
          <input type="radio" name="filter" onClick={this.filterClients} id="active" /><label htmlFor="active">Активные</label>
          <input type="radio" name="filter" onClick={this.filterClients} id="banned" /><label htmlFor="banned">Заблокированные</label>
        </form>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Добавить нового клиента" onClick={this.addNewClient} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
