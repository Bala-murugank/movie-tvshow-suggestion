import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import TrendingToday from './Components/Trendings/TrendingToday';
import WebSeries from './Components/WebSeries/WebSeries'
import FooterNavigatioin from './Components/FooterNavigation/FooterNavigatioin'
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='movie_suggestion_content'>
      <Routes>
      <Route path='/' element={<TrendingToday />}/>
      <Route path='movies' Component={Movies}/>
      <Route path='series' Component={WebSeries}/>
      <Route path='search' Component={Search} />

      
     </Routes>
     </div>
    
     <FooterNavigatioin />
    </div>
  );
}

export default App;
