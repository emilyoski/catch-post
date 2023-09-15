export default function Request({
  method,
  path,
  timestamp,
  ui_id,
  handleClick,
}) {
  return (
    <div
      onClick={handleClick}
      id={ui_id}
      style={{ border: "1px solid black" }}
      className="item"
    >
      {method} {path} {timestamp}
      <span className="delete-item">X</span>
    </div>
  );
}
