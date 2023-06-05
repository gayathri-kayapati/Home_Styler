import { v4 as uuid } from "uuid";
import lighting from "../../Images/decor/lighting.webp";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";

const cartItem = [
  {
    id: uuid(),
    image: lighting,
    title: "MFD HOME FURNISHING",
    description: "H-L - 5552-3P Glass",
    rating: "5.0",
    discountPrice: "₹3,360",
    actualPrice: "₹8,400",
    discountPercentage: "60%",
    categoryName: "decor",
    details:
      "Black Metal & Luster Glass Quirky Design Cluster Light by MFD HOME FURNISHING",
  },
];
export default function CartItems() {
  return (
    <div>
      {cartItem.map((product) => (
        <div>
          <div>
            <img src={product.image} alt={product.title} />
            <span>
              <SecondaryButton name="Remove" />
            </span>
            <span>
              <SecondaryButton name="Move to Wishlist" />
            </span>
          </div>
          <div>
            {product.title}
            {product.description}
          </div>
        </div>
      ))}
    </div>
  );
}
