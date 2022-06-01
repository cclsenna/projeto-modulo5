import "./Carrossel.css";

export default function Carrossel() {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper">
            <a href="#carousel__slide3" className="carousel__prev">
              Go to last slide
            </a>
            <a href="#carousel__slide2" className="carousel__next">
              Go to next slide
            </a>
          </div>
          <div className="container__titulo1">
            <h2>
              Festa Junina - Dia 27/06 - Quadra São Silvestre - Av Dias da Cruz
            </h2>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide1" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide3" className="carousel__next">
            Go to next slide
          </a>
          <div className="container__titulo2">
            <p>
              " Ensinar não é transferir conhecimento, mas criar as
              possibilidades para a sua própria produção ou a sua construção."
            </p>
            <h2>Paulo Freire</h2>
          </div>
        </li>
        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide2" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide1" className="carousel__next">
            Go to next slide
          </a>
          <div className="container__titulo3">
            <h2>
              Venha para a Escola Holandesa do Méier! Matriculas abertas até
              25/06
            </h2>
          </div>
        </li>
      </ol>
    </section>
  );
}
