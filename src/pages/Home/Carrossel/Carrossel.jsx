import "./Carrossel.css";

export default function Carrossel() {
  return (
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <a href="#carousel__slide3" class="carousel__prev">
              Go to last slide
            </a>
            <a href="#carousel__slide2" class="carousel__next">
              Go to next slide
            </a>
          </div>
          <div class="container__titulo1">
            <h2>
              Festa Junina - Dia 27/06 - Quadra São Silvestre - Av Dias da Cruz
            </h2>
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide1" class="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide3" class="carousel__next">
            Go to next slide
          </a>
          <div class="container__titulo2">
            <p>
              " Ensinar não é transferir conhecimento, mas criar as
              possibilidades para a sua própria produção ou a sua construção."
            </p>
            <h2>Paulo Freire</h2>
          </div>
        </li>
        <li id="carousel__slide3" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide2" class="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide1" class="carousel__next">
            Go to next slide
          </a>
          <div class="container__titulo3">
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
