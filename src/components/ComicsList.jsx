import { GetListComics } from "../services/comic-service";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "../styles/HeroList.css";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    GetListComics().then((res) => {
      setComicsList(res.data.results);
    });
  }, []);

  return (
    <div>
      <Container>
        <Col>
          {comicsList.map((comic) => (
            <Row key={comic.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={comic.image.small_url} />
                <Card.Body>
                  <Card.Title>{comic.volume.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Col>
      </Container>
    </div>
  );
};

export default ComicsList;
