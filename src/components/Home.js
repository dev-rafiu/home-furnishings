import React, { useContext } from "react";

import Product from "./Product";
import Loading from "./Loading";
import { context } from "./hooks/context";

function Products({ data }) {
  const { isLoading } = useContext(context);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <div className="section-center">
            {data.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Products;
