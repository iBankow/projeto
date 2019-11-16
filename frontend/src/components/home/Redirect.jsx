import './Redirect.css'
import React from 'react';
import Main from '../templates/Main';
import { Link } from 'react-router-dom'

export default props =>
    <Main icon="home" title="Inicio">
        <div className="display-4">
            DECULPE ESSA PAGINA NAO EXISTE
        </div>
        <hr/>
        <nav className="lincado">
            <Link to='/'>
                Clique aqui para ir ao Inicio
            </Link>
        </nav>
    </Main>