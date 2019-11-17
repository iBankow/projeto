import React, { Component } from 'react';
import Main from '../templates/Main';
import Mural from './UltimosRelatos'

export default props =>
    <Main icon="home" title="Inicio"subtitle="#VOCETEMDIREITO">
        <div className="display-4">
            Bem Vindo!
        </div>
        <hr/>
        <p className="mb-0">
            <strong> <i className="fa fa-clock-o"></i> Ultimos Relatos</strong>
        </p>
        <div>
        <Mural/>
        </div>
    </Main>