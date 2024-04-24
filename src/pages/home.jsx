import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Link, Outlet, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Octokit } from "octokit";
import "../App.css";
import PaginationBasic from "../component/pagination";
import NavBar from "../component/navBar";

const authToken = import.meta.env.VITE_GIT_AUTH;
async function getRepositories(page) {
  const octokit = new Octokit({
    auth: authToken,
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  const { data, headers } = await octokit.request(`GET /users/${login}/repos`, {
    owner: "github",
    repo: "docs",
    per_page: 3,
    page,
  });
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="last")/i;
  const url = headers.link.match(nextPattern)[0];
  console.log(data, url.substring(url.length - 1));
  return { data, totalPages: url.substring(url.length - 1) };
}
//
function App() {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    (async () => {
      const { data, totalPages } = await getRepositories(page);
      setRepositories(data);
      setTotalPages(totalPages);
    })();
  }, [page]);
  console.log(repositories, totalPages, page);
  //
  return (
    <div className="github">
      <NavBar repository={repositories} />
      <div className="card__section">
        {repositories.map((repository) => {
          return (
            <WithHeaderExample key={repository.id} repository={repository} />
          );
        })}
        {/* <Outlet /> */}
      </div>
      <div>
        <PaginationBasic totalPages={totalPages} currentPage={page} />
      </div>
    </div>
  );
}

function WithHeaderExample({ repository }) {
  return (
    <Card className="card">
      <Card.Header className="card__head">{repository.name}</Card.Header>
      <Card.Body className="card__body">
        <Card.Title className="card__title">
          <b>language:</b> {repository.language}
        </Card.Title>
        <Card.Text className="card__text">
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" className="card__btn">
          {/* <Link to={`/repos/${repository.id}`}> view repo </Link> */}
          <Link className="card__link" to={`/repos/${repository.name}`}>
            {" "}
            view repo{" "}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default App;
