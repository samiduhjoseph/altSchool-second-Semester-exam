import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Link, Outlet, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Octokit } from "octokit";
import "../App.css";

async function getUser() {
  const octokit = new Octokit({
    auth: "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",
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  const { data } = await octokit.request(`GET /users/${login}/repos`, {
    owner: "github",
    repo: "docs",
    per_page: 3,
  });
  return data;
}
//
function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getUser();
      setRepositories(data);
    })();
  }, []);
  console.log(repositories);
  //
  return (
    <div>
      {repositories.map((repository) => {
        return (
          <WithHeaderExample key={repository.id} repository={repository} />
        );
      })}
    </div>
  );
}

function WithHeaderExample({ repository }) {
  return (
    <Card style={{ border: "1px solid blue", margin: "10px" }}>
      <Card.Header>{repository.name}</Card.Header>
      <Card.Body>
        <Card.Title>{repository.language}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>

        <Link to={`/repos/${repository.id}`}>view repo</Link>
      </Card.Body>
    </Card>
  );
}
export default App;
