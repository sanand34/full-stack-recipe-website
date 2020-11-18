import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import requests from "./apicall";
import { Dropdown, Button, DropdownButton } from "react-bootstrap";
import instance from "./axios.js";
function Cards({ taste }) {
  const [data, setData] = useState([]);

  const random = Math.floor(Math.random() * 9);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests(taste, random + 20, random));
      setData(request.data.hits);
    }
    fetchData();
  }, []);

  return data.slice(0, 3).map((request) => (
    <Card
      style={{
        width: "24rem",
        padding: "5px",
        margin: "20px",
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: " -1px 4px 20px -6px #0b0a0a",
      }}
    >
      <Card.Img src={request.recipe.image} style={{ borderRadius: "20px" }} />
      <Card.Body>
        <Card.Title style={{ padding: "20px", height: "80px" }}>
          {request.recipe.label}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ padding: "10px" }}>
          {request.recipe.source}
        </Card.Subtitle>

        <DropdownButton
          id="dropdown-button-drop-up"
          variant="dark"
          drop="up"
          title=" Show Ingredients "
        >
          {request.recipe.ingredientLines.map((data) => (
            <Dropdown.Item>{data}</Dropdown.Item>
          ))}
        </DropdownButton>
        <br />
        <Button
          href={request.recipe.url}
          target="_blank"
          style={{ padding: "10px" }}
        >
          Get Full Recipe
        </Button>
      </Card.Body>
    </Card>
  ));
}

export default Cards;
