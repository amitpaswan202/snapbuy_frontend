import React from "react";
import { useParams } from "react-router-dom";

import "./Category.scss";
import categoriesData from "./categories.json"; // Update the path to your JSON file

const Category = () => {
  const { id } = useParams();

  // Find the category data in the categories.json file based on the id parameter
  const category = categoriesData.find(
    (category) => category.id === Number(id)
  );

  // Extract only the necessary data from the category object
  const { title, products } = category?.attributes || {};

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{title}</div>
        {/* <Products innerPage={true} products={products} /> */}
      </div>
    </div>
  );
};

export default Category;
