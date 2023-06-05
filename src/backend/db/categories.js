import { v4 as uuid } from "uuid";
import decor from "../../Images/categories/decor.jpg";
import kichen from "../../Images/categories/kichen.jpg";
import bedding from "../../Images/categories/bedding.jpg";
import storage from "../../Images/categories/storage.jpg";
import home_essentials from "../../Images/categories/home_essentials.jpg";
import Appliances from "../../Images/categories/Appliances.webp";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "Decor",
    categoryImage: decor,
  },
  {
    id: uuid(),
    categoryName: "Kitchen & Dining",
    categoryImage: kichen,
  },
  {
    id: uuid(),
    categoryName: "Bedding",
    categoryImage: bedding,
  },
  {
    id: uuid(),
    categoryName: "Storage",
    categoryImage: storage,
  },
  {
    id: uuid(),
    categoryName: "Home Essentials",
    categoryImage: home_essentials,
  },
  {
    id: uuid(),
    categoryName: "Appliances",
    categoryImage: Appliances,
  },
];
