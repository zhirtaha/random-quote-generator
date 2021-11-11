// create a component for the dog images
//set a state and update state for the dog
//use useEffect for the api call
//create a function to fetch the api data and call it inside a button and useEffect
//use axios to fetch the data from the api
//rendering the dog images to the browser using a card or something else and make a button to generate new dog image

import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios";
function DogImages() {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    getDog();
  }, []);

  const getDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setDog(res.data);
    });
  };
  return (
    <div>
      <Container>
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dog.message} />
          <Card.Body>
            <Card.Title>Dog Images</Card.Title>
            <Card.Text>some Example text......</Card.Text>
            <Button variant="success" onClick={getDog}>
              New Dog
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default DogImages;
