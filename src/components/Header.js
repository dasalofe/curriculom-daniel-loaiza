import React from 'react';
import './styles/bootstrap.min.css'
import './styles/styles.css'
import fotoPerfil from '../assets/img/perfil.png'

class Header extends React.Component {
    render() {
        return (<header><div>
            <h1 className="titulo">HOJA DE VIDA</h1>
            <h2 className="subtitulo">DANIEL SANTIAGO LOAIZA FERNANDEZ</h2>
{/*             <div className="Redes_sociales">
                <ul>
                    <li>
                        <a href="#"> <span className="fab fa-facebook"></span></a>
                    </li>
                    <li>
                        <a href="#"> <span className="fab fa-instagram"></span></a>
                    </li>
                    <li>
                        <a href="#"> <span className="fab fa-twitter"></span></a>
                    </li>
                    <li>
                        <a href="#"> <span className="fab fa-pinterest"></span></a>
                    </li>
                    <li>
                        <a href="#"> <span className="fab fa-google-plus-g"></span></a>
                    </li>
                </ul>
            </div> */}

            <div className="profile-img">
                <img src={fotoPerfil}  width="200" height="200" alt="img"></img>
            </div>
        </div></header>)
    }
}

export default Header