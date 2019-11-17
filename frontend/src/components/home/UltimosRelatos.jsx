import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';

/*const headerProps = {
    icon: 'comment',
    title: 'Usuarios',
    subtitle: '#VOCETEMDIREITO'
}*/

const baseUrl = 'http://localhost:3001/post'

const initialState = {
    user: {name: '', post: '' },
    list:[]
}

export default class Mural extends Component {
    
    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp =>{
            this.setState({ list: resp.data })
        })
    }
    
    clear() {
        this.setState({user: initialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.idPerson ? 'put' : 'post'
        const url = user.idPerson ? `${baseUrl}/${user.idPerson}` : baseUrl
        axios[method](url, user).then(resp =>{
            const list = this.getUpedateList(resp.data)
            this.setState({user: initialState.user, list})
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

    renderForm() {
        return (
            <div className="form">
                <div className="column">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name} 
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..."/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label>Post</label>
                            <textarea type="text" className="form-control" 
                            name="post" rows="5"
                            value={this.state.user.post} 
                            onChange={e => this.updateField(e)}
                            placeholder="Escreva seu relato..."/>
                        </div>
                    </div>
                </div>
                
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderColumn() {
        return this.state.list.map(user => {
            return(
                <div key={user.id}>
                    <th>Nome:</th>
                    <th>{user.name}</th>
                <div>                   
                    <th>Relato</th>
                    {user.post}
                </div>
                </div>
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
            <body>
                <div className="display-4">
                </div>
                <div>
                    {this.renderTable()}
                </div>
            </body>
            )
        }
    }