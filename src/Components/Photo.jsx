export default function Photo(props) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <img
        src={props.src}
        alt={`${props.alt}`}
        className="img-fluid w-25 mx-3 my-3 zoom border-img"
      />
    </a>
  );
}
