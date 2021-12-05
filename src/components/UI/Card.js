// wrapper component to common out the styling
// wrapper component will render the HTML and Custom components as its children
function Card(props) {
  // classess passed to this wrapper should apply in addition to its own class
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
