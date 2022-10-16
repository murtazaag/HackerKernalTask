import React, { useState } from "react";
import CreateComponent from "./Product/CreateComponent";
import ListComponent from "./Product/ListComponent";
import ListHeaderComponent from "./Product/ListHeaderComponent";
import SearchComponent from "./Product/SearchComponent";

export default function Home() {
  const [store, setStore] = useState([]);
  const [query, setQuery] = useState("");
  const getAllData = (product) => {
    setStore([...store, product]);
  };

  const deleteProduct = (product) => {
    setStore([
      ...store.filter((item) => item.productName !== product.productName),
    ]);
  };

  return (
    <div>
      <CreateComponent getAllData={getAllData} />
      <SearchComponent setQuery={setQuery} />
      <ListHeaderComponent />
      <h3> {store.length === 0 ? "NO PRODUCT FOUND" : ""} </h3>
      {store
        // eslint-disable-next-line array-callback-return
        .filter((post) => {
          if (query === "") {
            return post;
          } else if (
            post.productName.toLowerCase().includes(query.toLowerCase())
          ) {
            return post;
          }
        })
        .map((product, index) => {
          return (
            <ListComponent
              product={product}
              key={index}
              deleteProduct={deleteProduct}
            />
          );
        })}
    </div>
  );
}
