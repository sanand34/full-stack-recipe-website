import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nutritionresult from "./Nutritionresult.js";
function Analysis() {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "grid", placeContent: "center", padding: "100px" }}>
      <Router>
        <Form inline>
          <FormControl
            type="text"
            className="mr-sm-2"
            placeholder="example : 1 kg milk"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Link to={`/nutrition/result/${value}`}>
            <Button variant="dark" type="submit">
              Get Calories
            </Button>
          </Link>
        </Form>
        <Route
          path="/nutrition/result/:id"
          children={<Nutritionresult />}
        ></Route>
      </Router>
    </div>
  );
}

export default Analysis;
