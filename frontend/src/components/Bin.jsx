export default function Bin({ url, timestamp, handleClick, handleDelete }) {
  return (
    <div
      onClick={handleClick}
      id={url}
      style={{ border: "1px solid black" }}
      className="item"
    >
      {`/${url}`} {timestamp}{" "}
      <span onClick={handleDelete} className="delete-item">
        X
      </span>
    </div>
  );
}
