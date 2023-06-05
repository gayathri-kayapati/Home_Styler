import "./secondaryButton.css";
export default function SecondaryButton({ name }) {
  return (
    <div>
      <button className="secondaryButton">{name}</button>
    </div>
  );
}
