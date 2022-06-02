import "./Card.css";
export default function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.imagem} alt="img-destaques" />
        </div>
        <div className="flip-card-back">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
          <p>{props.p5}</p>
        </div>
      </div>
    </div>
  );
}
