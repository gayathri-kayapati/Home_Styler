import "./categoryCard.css";

export default function CategoryCard({ category }) {
  const { _id, categoryName, categoryImage } = category;
  return (
    <div key={_id} className="card">
      <img src={categoryImage} alt={categoryName} className="categoryImage" />
      <h3 className="categoryName">{categoryName}</h3>
    </div>
  );
}
