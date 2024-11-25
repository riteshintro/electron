import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./app/Home";
import Contact from "./app/Contact";
import About from "./app/About";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
