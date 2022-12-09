import { Table, Button } from "react-bootstrap";
import { GetListComics } from "../services/comic-service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ComicsList = () => {
  const [comics, setComicsList] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    GetListComics().then((res) => {
      setComicsList(res.data.results);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Comic Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.id}>
            <td>
              <img src={comic.image.small_url} alt="comic-img" />
            </td>
            <td>{comic.volume.name}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => {
                  navigation(`/details/${comic.id}`);
                }}
              >
                Get Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComicsList;
