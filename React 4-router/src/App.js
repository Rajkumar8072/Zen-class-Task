import React from "react";
import Layout from "./Layout";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import fullstack from "./image/fullstack.PNG";
import all from "./image/all.PNG";
import cypersecurity from "./image/cypersecurity.PNG";
import career from "./image/career.PNG";
import datascience from "./image/datascience.PNG";

function All() {
  return (
    <>
      <img src={all} alt="all" />
    </>
  );
}

function Cypersecurity() {
  return (
    <>
      <img src={cypersecurity} alt="cypersecurity" />
    </>
  );
}
function Career() {
  return (
    <>
      <img src={career} alt="career" />
    </>
  );
}
function Fullstackdevelopment() {
  return (
    <>
      <img src={fullstack} alt="fullstack" />
    </>
  );
}

function Datascience() {
  return (
    <>
      <img src={datascience} alt="datascience" />
    </>
  );
}

function Nopage() {
  return (
    <>
      <p>Nopage</p>
    </>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
            <Route
              path="fullstackdevelopment"
              element={<Fullstackdevelopment />}
            />
            <Route path="datascience" element={<Datascience />} />
            <Route path="cypersecurity" element={<Cypersecurity />} />
            <Route path="career" element={<Career />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
