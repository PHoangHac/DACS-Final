import React from "react";
import GifNoR from "../../../src/assets/img/NoResultFound2.gif";

const Empty = () => {
  return (
    <main className="col-md-9">
      <article className="card card-product-list mb-2">
        <div className="row no-gutters">
          <div className="col-md-6" style={{ width: "100%" }}>
            {/* <div className="fs-4">No Room Found</div> */}
            <img src={GifNoR} alt="NoResults" style={{ width: "100%" }} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Empty;
