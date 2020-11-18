import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "./axios.js";
import requests from "./apicall";
import Card from "react-bootstrap/Card";
import { Dropdown, Button, DropdownButton } from "react-bootstrap";
function Search() {
  const { id } = useParams();
  const [url, setUrl] = useState([]);
  const [param, setParam] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests(id, 50));
      setUrl(request.data.hits);
    }
    fetchData();
    setParam(0);
  }, [id]);

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  const data = url.slice(param, param + 5).map((url) => (
    <Card
      style={{
        width: "30rem",
        padding: "10px",
        margin: "40px",
        textAlign: "center",
        boxShadow: " -1px 4px 20px -6px #0b0a0a",
      }}
    >
      <Card.Img src={url.recipe.image} />
      <Card.Body>
        <Card.Title style={{ padding: "10px" }}>{url.recipe.label}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ padding: "10px" }}>
          {url.recipe.source}
        </Card.Subtitle>

        <DropdownButton
          id="dropdown-button-drop-up"
          variant="dark"
          drop="up"
          title=" Show Ingredients "
        >
          {url.recipe.ingredientLines.map((data) => (
            <Dropdown.Item>{data}</Dropdown.Item>
          ))}
        </DropdownButton>
        <br />

        <Button
          href={url.recipe.url}
          target="_blank"
          style={{ padding: "10px" }}
        >
          Get Full Recipe
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      {data}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {param !== 0 && (
          <Button
            onClick={() => {
              setParam(param - 5);
              topFunction();
            }}
          >
            Previous
          </Button>
        )}
        {param !== 25 && (
          <Button
            onClick={() => {
              setParam(param + 5);
              topFunction();
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Search;
