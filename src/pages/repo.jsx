import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BrowserRouter,
  Routes,
  Link,
  Outlet,
  Route,
  Router,
} from "react-router-dom";

function RepoPages() {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RepoPages;
