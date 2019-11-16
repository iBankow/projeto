import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de Usuarios: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: {name: '', email: '' },
    list:[]
}

export default class UserCrud extends Component {

    state = {...initialState}

    clear() {
        this.setState({user: initialState.user })
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}