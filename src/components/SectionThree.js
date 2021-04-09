import React from 'react';
import './styles/bootstrap.min.css'
import './styles/styles.css'
import fotoEducacion from '../assets/img/education.jpg'

class SectionThree extends React.Component {
    render() {
        return (<section class="experinece education">
        <div>
            <h2>Educación</h2>
            <img src={fotoEducacion} width="100%" height="600" alt="img"></img>
        </div>
        <div class="container">
            <div class=" col-md-7 col-sm-8">
                <ul>
                    <li>
                        <h3>Desarrollo Web y base de datos</h3>
                        <h4>2014 - 2015</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>Desarrollo web</h3>
                        <h4>2015 - 2016</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>ingeniería de sistemas</h3>
                        <h4>2017 - 2021</h4>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        )
    }
}

export default SectionThree