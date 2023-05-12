//compontente contenitore
// Utilizziamo questo compoente come contenitore di altre, tramite le props includiamo le componenti che sono contenute in esso.
// props.children è una "funzione" di react, tramite questo capisce che deve prendere gli elementi figli dal codice.
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
