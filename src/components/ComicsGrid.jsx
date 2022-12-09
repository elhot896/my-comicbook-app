import { GetListComics } from "../services/comic-service";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "../styles/HeroList.css";

const ComicsGrid = () => {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    GetListComics().then((res) => {
      setComicsList(res.data.results);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {comicsList.map((comic) => (
            <Col key={comic.id}>
              <Card style={{ width: "18rem" }} className="mb-4">
                <Card.Img variant="top" src={comic.image.small_url} />
                <Card.Body>
                  <Card.Title>{comic.volume.name}</Card.Title>
                  <Button variant="primary">Get Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ComicsGrid;
