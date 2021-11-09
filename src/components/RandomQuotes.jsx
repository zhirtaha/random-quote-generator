import React from "react";
import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
function RandomQuotes() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    let isMounted = true;
    axios.get("https://api.quotable.io/random").then((response) => {
      if (isMounted) setQuote(response.data);
    });
  };
  return (
    <Container>
      <Card border="success">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {quote.content} </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{quote.author}</cite>
            </footer>
            <Button variant="success" onClick={getData}>
              New Quote
            </Button>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RandomQuotes;
