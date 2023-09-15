export default function Bin({ url, timestamp, handleClick }) {
  return (
    <div
      onClick={handleClick}
      id={url}
      style={{ border: "1px solid black" }}
      className="item"
    >
      {url} {timestamp} <span className="delete-item">X</span>
    </div>
  );
}
