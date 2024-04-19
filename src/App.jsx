import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Link, Outlet, Route } from "react-router-dom";
import { Octokit } from "octokit";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import WithHeaderExample from "./pages/home";
import RepoPages from "./pages/repo";

function App() {
  //
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<WithHeaderExample />}></Route> */}
        <Route path="repos" element={<WithHeaderExample />}></Route>
        <Route path="/repos/:repoId" element={<RepoPages />} />
      </Routes>
    </BrowserRouter>
  );
}
// return repositories.map((repository) => {
//   return <WithHeaderExample repository={repository} />;
// });

export default App;
