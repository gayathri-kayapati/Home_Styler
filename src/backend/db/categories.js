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
    _id: uuid(),
    categoryName: "Decor",
    categoryImage: decor,
  },
  {
    _id: uuid(),
    categoryName: "Kitchen & Dining",
    categoryImage: kichen,
  },
  {
    _id: uuid(),
    categoryName: "Bedding",
    categoryImage: bedding,
  },
  {
    _id: uuid(),
    categoryName: "Storage",
    categoryImage: storage,
  },
  {
    _id: uuid(),
    categoryName: "Home Essentials",
    categoryImage: home_essentials,
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    categoryImage: Appliances,
  },
];
