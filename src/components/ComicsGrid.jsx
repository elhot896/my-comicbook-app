import { GetListComics, GetComicDetails } from "../services/comic-service";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroList.css";

const ComicsGrid = () => {
  const [comicsList, setComicsList] = useState([]);

  const navigation = useNavigate();

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
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigation(`/details/${comic.id}`);
                    }}
                  >
                    Get Details
                  </Button>
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
