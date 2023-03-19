import "./App.css";
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ModelHeader from "./components/model-header";

const Square = lazy(() => import("./components/square"));
const Shape = lazy(() => import("./components/shape"));

function App() {
  return (
    <div className="App">
      <ModelHeader />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/square" element={<Square />}></Route>
          <Route path="/shape" element={<Shape />}></Route>
          <Route path="/" element={<Navigate to="square" />} />
          <Route
            path="*"
            element={<div className="not-found">not found</div>}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
