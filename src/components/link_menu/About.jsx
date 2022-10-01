import img_about_david from '../../extensoes/img/david_oliveira.png'
import img_about_guilherme from '../../extensoes/img/guilherme_sene.png'
import img_about_joao from '../../extensoes/img/joao_lucas.png'

function About() {
      return (
        <div className="container">
          <div className="row mt-4" style={{textAlign: 'center'}}>
            <h1>Development Team</h1>
          </div>
          <div className="row mt-4">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" style={{textAlign: 'center'}}>
              <img src={img_about_david} alt="João Lucas" width="200px" height="200px" />
              <span style={{textAlign: 'center'}}><h2>David Gonçalves de Oliveira</h2></span>
              <span style={{textAlign: 'center'}}><h5>Development</h5></span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" style={{textAlign: 'center'}}>
              <img src={img_about_guilherme} alt="João Lucas" width="200px" height="200px" />
              <span style={{textAlign: 'center'}}><h2>Guilherme Henrique de Sene Oliveira</h2></span>
              <span style={{textAlign: 'center'}}><h5>Development</h5></span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" style={{textAlign: 'center'}}>
              <img src={img_about_joao} alt="João Lucas" width="200px" height="200px" />
              <span style={{textAlign: 'center'}}><h2>João Lucas Silva de Sousa</h2></span>
              <span style={{textAlign: 'center'}}><h5>Development</h5></span>
            </div>
          </div>
        </div>
      );
}

export default About