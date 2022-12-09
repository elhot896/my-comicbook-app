import { GetComicDetails } from "../services/comic-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

const ComicDetails = () => {
  const { id } = useParams();

  const [comicDetails, setComicDetails] = useState({});

  useEffect(() => {
    GetComicDetails(id).then((res) => {
      setComicDetails(res.data.results);
    });
  }, []);

  return (
    <Card style={{ width: "18rem" }} className="ml-4">
      <Card.Img variant="top" src={comicDetails.image.small_url} />
      <Card.Body>
        <Card.Title>{comicDetails.volume.name}</Card.Title>
        <Card.Text>Credits:</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {comicDetails.concept_credits.map((comic) => (
          <ListGroup.Item>{comic.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ComicDetails;
