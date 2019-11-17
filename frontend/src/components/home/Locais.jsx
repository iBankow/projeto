import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
    icon: 'comment',
    title: 'Usuarios',
    subtitle: '#VOCETEMDIREITO'
}

const initialState = {
    user: {name: '', post: '' },
    list:[]
}

const baseUrl = 'http://localhost:3001/map'

export default class Locais extends Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp =>{
            this.setState({ list: resp.data })
        })
    }

    getUpedateList(user, add = true) {
        const list = this.state.list.filter(u => u.idPerson !== user.idPerson)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderColumn() {
    return this.state.list.map(user => {
        return(
            <table className="table mt-4">
                <th><i className="fa fa-map"></i>-{user.id}</th>
                <div key={user.id}>
                    <th>Local:</th>
                    <th>{user.name}</th>                  
                    <th>Endereço:</th>
                    <th>{user.local}</th>
                    <div>Numero:    {user.Numero}</div>
                </div>
            </table>
        )
    })
}

/*renderRows() {
    return this.state.list.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.post}</td>
            </tr>
        )
    })
}*/

renderTable() {
    return (
        <table className="table mt-4">
            <div>
                {this.renderColumn()}
            </div>
        </table>
    )
}

render(){
    return(
        <Main icon="map-signs" title="Delegacias"subtitle="#VOCETEMDIREITO">
            <div className="display-4">
                Delegacias para mulheres
            </div>
            <hr/>
            <p className="mb-0">
                <i className="fa fa-map-marker"></i> Locais:
            </p>
            <div>
                {this.renderTable()}
            </div>
        </Main>
        )
    }
}
    /*<Main icon="female" title="Delegacias da Mulher"subtitle="#VOCETEMDIREITO">
    <div className="display-4">
        Bem Vindo!
    </div>
    <hr/>
    <p className="mb-0">
        {this.render()}
    </p>
    </Main>*/
