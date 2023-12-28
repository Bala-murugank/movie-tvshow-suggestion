import "./App.css";
import { Route, Routes } from "react-router-dom";
//import Header from './Components/Header/Header';
//import Movies from './Components/Movies/Movies';
// import TrendingToday from './Components/Trendings/TrendingToday';
// import WebSeries from './Components/WebSeries/WebSeries'
// import FooterNavigatioin from './Components/FooterNavigation/FooterNavigatioin'
// import Search from './Components/Search/Search';
import React, { Suspense } from "react";

const Header = React.lazy(() => import("./Components/Header/Header"));
const Movies = React.lazy(() => import("./Components/Movies/Movies"));
const TrendingToday = React.lazy(() =>
  import("./Components/Trendings/TrendingToday")
);
const WebSeries = React.lazy(() => import("./Components/WebSeries/WebSeries"));
const FooterNavigatioin = React.lazy(() =>
  import("./Components/FooterNavigation/FooterNavigatioin")
);
const Search = React.lazy(() => import("./Components/Search/Search"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Header />
      </Suspense>

      <div className="movie_suggestion_content">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <TrendingToday />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="series"
            element={
              <Suspense>
                <WebSeries />
              </Suspense>
            }
          />
          <Route
            path="search"
            element={
              <Suspense>
                <Search />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Suspense>
         <FooterNavigatioin />
      </Suspense>
     
    </div>
  );
}

export default App;
