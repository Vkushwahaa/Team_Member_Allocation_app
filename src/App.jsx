import Header from "./Header";
import "./App.css";
import * as React from "react";
import Employees from "./Employees";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Employees />
        <Footer />
      </div>
    </>
  );
}

export default App;
