import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BrowserRouter,
  Routes,
  Link,
  Outlet,
  Route,
  Router,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import Eachrepo from "./eachRepo";
//
const authToken = import.meta.env.VITE_GIT_AUTH;

function RepoPages() {
  // console.log(authToken);
  const { name } = useParams();
  // console.log(name);
  async function getIndividualRepo() {
    // console.log(name);
    const octokit = new Octokit({
      auth: authToken,
    });

    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    const repo = name;

    const { data } = await octokit.request(`GET /repos/${login}/${repo}`, {
      owner: "OWNER",
      repo: "REPO",
    });
    return data;
  }
  //
  const [singleRepo, setRepositories] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getIndividualRepo();
      setRepositories(data);
    })();
  }, []);
  // console.log(singleRepo);

  return <Eachrepo key={singleRepo.id} repository={singleRepo} />;
}

export default RepoPages;
