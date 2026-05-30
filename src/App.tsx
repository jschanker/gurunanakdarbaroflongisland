import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*<Navigation />*/}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
