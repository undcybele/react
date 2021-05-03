import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location,
} from "./pages";
//https://api.github.com/users

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;

//api-s
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   if (!login) return;
//   setLoading(true);
//   fetch(`https://api.github.com/users/${login}`)
//     .then((response) => response.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
// }, [login]);

// if (loading) return <h1>Loading...</h1>;
// if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
// if (!data) return null;
