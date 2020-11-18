import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import instance from "./axios.js";
import requests from "./apicall";

import "./header.css";
import { Carousel } from "react-bootstrap";

import { StylesProvider } from "@material-ui/core/styles";
import taste from "./taste.js";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  const [url, setUrl] = useState([]);

  const randomValue = taste[Math.floor(Math.random() * taste.length - 1)];

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests(randomValue, 15));
      console.log(request);
      setUrl(request.data.hits);
    }
    fetchData();
  }, []);

  const tile = url.map((path) => (
    <Carousel.Item>
      <div style={{ marginBottom: "120px" }}>
        <IconButton href={path.recipe.url} target="_blank">
          <Avatar
            style={{
              width: "230px",
              height: "230px",
              margin: "20px",
            }}
            className="avatar"
            src={path.recipe.image}
            alt="image"
          />
        </IconButton>
      </div>

      <Carousel.Caption>
        <strong style={{ fontSize: "40px" }}>{path.recipe.label}</strong>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <StylesProvider injectFirst>
      <div className="header">
        <Carousel>{tile}</Carousel>
      </div>
    </StylesProvider>
  );
}

export default Header;
