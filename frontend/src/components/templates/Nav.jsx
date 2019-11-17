import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i>Inicio
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i>Usuarias
            </Link>
            <Link to="/Mural">
                <i className="fa fa-comment"></i>Relatos
            </Link>
            <Link to="/delegacia" className="deg">
                <i className="fa fa-map"></i>Delegacias
            </Link>       
        </nav>
    </aside>