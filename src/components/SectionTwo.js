import React from 'react';
import './styles/bootstrap.min.css'
import './styles/styles.css'
import fotoExperiencia from '../assets/img/exp.jpg'


class SectionTwo extends React.Component {
    render() {
        return (<section>
        <div>
            <div >
                <h2>Mi experiencia</h2>
                <img src={fotoExperiencia} width="100%" height="600" alt="img"></img>
            </div>
            <div className="experinece" >
                <ul>
                    <li>
                        <h3>Desarrollador móvil y FrontEnd</h3>
                        <h4>Julio 2020 - Febrero 2021</h4>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        )
    }
}

export default SectionTwo