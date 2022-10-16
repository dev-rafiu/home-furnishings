import React, { useContext } from "react";
import Product from "./Product";
import { context } from "./hooks/context";
import Loading from "./Loading";

function Products({ data }) {
  const { isLoading } = useContext(context);

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
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
