
import Navigation from './components/searchBar/Header/navigation.component';
import SignIn from './components/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom';

import Home from './components/searchBar/routes/home/home.route';
import PapularMovies from './components/searchBar/movies-list/papular.movies';




const App = () => {
 
  return (
    <div className="container">
      <Routes>
       
          <Route path='/' element={<Navigation/>} >
          <Route index element={  <Home/>} />
          <Route path='papular' element={<PapularMovies/>} />
     
 
          <Route path='sign' element={<SignIn/>} />
      
          </Route>
          
          
      </Routes>
    </div>
  );
}

export default App;
