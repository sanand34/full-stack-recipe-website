import React from "react";
import Cards from "./Cards.js";
import "./body.css";
import { useStateValue } from "./StateProvider";
export default function Body() {
  const [{ item }] = useStateValue();
  return (
    <div className="headbody">
      <h1 style={{ fontFamily: "serif" }}>Today's Special just for you </h1>
      <div className="mainbody">
        <div className="body">
          <Cards taste={item} />
        </div>
      </div>
      <br />
      <h1 style={{ fontFamily: "serif" }}>Indian Special </h1>
      <div className="mainbody">
        <div className="body">
          <Cards taste="indian" />
        </div>
      </div>
      <br />
      <h1 style={{ fontFamily: "serif" }}>Biryani Special </h1>
      <div className="mainbody">
        <div className="body">
          <Cards taste="biryani" />
        </div>
      </div>
      <br />
    </div>
  );
}
