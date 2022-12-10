import { GetComicDetails } from "../services/comic-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
      <Card.Img variant="top" src={comicDetails?.image?.small_url} />
      <Card.Body>
        <Card.Title>{comicDetails?.volume?.name}</Card.Title>
        {comicDetails?.person_credits?.map((credit) => (
          <Card.Text key={credit.id}>Credits to: {credit.name}</Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ComicDetails;
