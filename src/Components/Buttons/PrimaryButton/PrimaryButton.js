import "./primarybutton.css";
export default function PrimaryButton({ clickHandler, name }) {
  return (
    <div>
      <button className="primaryButton" onClick={clickHandler}>
        {name}
      </button>
    </div>
  );
}
