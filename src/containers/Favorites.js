import React from "react";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { useStore } from "../hooks-store/store";

const Favorites = (props) => {
  // const favoriteProducts = useContext(ProductsContext).products.filter(el => el.isFavorite);
  const state = useStore()[0];
  console.log(state.products);
  const favoriteProducts = state.products.filter((p) => p.isFavorite);
  console.log(favoriteProducts);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
