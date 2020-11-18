import React, { useEffect, useState } from "react";
import { request } from "./apicall.js";
import { base } from "./axios.js";
import { useParams } from "react-router-dom";
function Nutritionresult() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await base.get(request(id));
      setData(req);
      console.log(req);
    }
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        fontFamily: "arial",
        marginTop: "30px",
        backgroundColor: "grey",
        color: "white",
        borderRadius: "20px",
        padding: "100px",
      }}
    >
      <h1>
        Calories:
        <span style={{ color: "yellow" }}>{data && data.data.calories}</span>
      </h1>
      <br />
      <h2>Labels-----</h2>
      {data &&
        data.data.healthLabels.map((item) => (
          <h4 style={{ textTransform: "lowercase", color: "yellow" }}>
            {item}
          </h4>
        ))}
    </div>
  );
}

export default Nutritionresult;
