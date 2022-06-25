export default function Container(props) {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center user-select-none">
      {props.children}
    </div>
  );
}
