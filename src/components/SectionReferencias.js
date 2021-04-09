import React from 'react';
import './styles/bootstrap.min.css'
import './styles/styles.css'

class SectionReferencias extends React.Component {
    render() {
        return (<section className="referencias">
        <div class="container">
            <h2>Referencias</h2>
            <div class="row blog-referencias">
                <div class="col-md-6 left-sec">
                    <div class="blog-item">
                        <h3>Daniela Trejos Styles</h3>
                        <h5>Asistente administrativa</h5>
                        <h4>3122842748</h4>
                        <span class="icon-sec"><i class="far fa-newspaper"></i></span>
                    </div>
                    <div class="blog-item">
                        <h3>Alexandra Lasprilla </h3>
                        <h5>Analista de automatización</h5>
                        <h4>3148588733</h4>
                        <span class="icon-sec"><i class="far fa-newspaper"></i></span>
                    </div>

                    <div class="blog-item">
                        <h3>Juan Manuel Cárdenas  </h3>
                        <h5>Director de ingeniería de sistemas</h5>
                        <h4>3148909911</h4>
                        <span class="icon-sec"><i class="far fa-newspaper"></i></span>
                    </div>
                </div>
                <div class="col-md-6 right-sec">
                    <div class="blog-item">
                        <h3>Maritza Loaiza Fernández</h3>
                        <h5>Administradora de empresas</h5>
                        <h4>3213794878</h4>
                        <span class="icon-sec"><i class="far fa-newspaper"></i></span>
                    </div>
                    <div class="blog-item">
                        <h3>Jairo Loaiza Vázquez</h3>
                        <h5>Trabajador independiente</h5>
                        <h4>3117628003</h4>
                        <span class="icon-sec"><i class="far fa-newspaper"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}

export default SectionReferencias