import React, { Component } from 'react';
import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de Usuarios: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}