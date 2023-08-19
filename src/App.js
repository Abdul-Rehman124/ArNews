import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={10}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={10}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={10}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="again"
                pageSize={10}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={10} country="us" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={10}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={10} country="us" category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={10}
                country="us"
                category="technology"
              />
            }
          />
          {/* <Route element={<Protected />}> */}
            {/* <Route  path="/about" element={<About />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
