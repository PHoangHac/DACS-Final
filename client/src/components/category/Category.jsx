import React from "react";
import "./category.scss";
import useFetch from "../../hooks/useFetch";

// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

const Category = () => {
  const { data, loading } = useFetch("/category");

  // console.log(data);

  // const [listall, setListAll] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:7070/api/category").then((res) => {
  //     setListAll(res.data);
  //     console.log(res);
  //   });
  // }, []);

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mt-2">Danh Mục</h3>
      <div className="row flex-row flex-nowrap overflow-auto">
        {loading ? (
          "loading data ....."
        ) : (
          <>
            {data.map((value, index) => {
              return (
                <div className="col-3" key={value._id}>
                  <div className="card">
                    <img src={value.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
