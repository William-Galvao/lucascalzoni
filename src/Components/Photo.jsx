export default function Photo(props) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <img
        src={props.src}
        alt={`${props.alt}`}
        className="img-fluid w-25 px-2 py-2 zoom "
      />
    </a>
  );
}
