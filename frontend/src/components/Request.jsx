export default function Request({
  method,
  path,
  timestamp,
  ui_id,
  handleClick,
  handleDelete,
}) {
  return (
    <div
      onClick={handleClick}
      id={ui_id}
      style={{ border: "1px solid black" }}
      className="item"
    >
      {method} {path} {timestamp}
      <span onClick={handleDelete} className="delete-item">
        X
      </span>
    </div>
  );
}
