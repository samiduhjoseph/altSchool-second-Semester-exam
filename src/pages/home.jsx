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
    per_page: 2,
    page,
  });
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="last")/i;
  const url = headers.link.match(nextPattern)[0];
  return { data, totalPages: url.substring(url.length - 1) };
}
//
function App() {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const setRepositoriesAndTotalPages = async (_page) => {
      console.log(_page);
      const { data, totalPages } = await getRepositories(_page);
      setRepositories(data);
      setTotalPages(totalPages);
    };

    setRepositoriesAndTotalPages(page);
  }, [page]);

  const handlePageClick = (page) => {
    setPage(page);
  };
  console.log(repositories);
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
        <PaginationBasic
          onClick={handlePageClick}
          totalPages={totalPages}
          currentPage={page}
        />
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
          this repo was created on <b>{repository.created_at.slice(0, 10)}</b>{" "}
          by <b>{repository.owner.login}</b>
        </Card.Text>
        <Button variant="primary" className="card__btn">
          {/* <Link to={/repos/${repository.id}}> view repo </Link> */}
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
