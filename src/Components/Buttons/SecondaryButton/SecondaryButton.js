import "./secondaryButton.css";
export default function SecondaryButton({ name, clickHandler }) {
  return (
    <div>
      <button onClick={clickHandler} className="secondaryButton">
        {name}
      </button>
    </div>
  );
}
