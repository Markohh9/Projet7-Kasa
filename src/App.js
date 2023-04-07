import './sass/index.scss'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Propos from './pages/Propos';
import AppartementPage from './pages/AppartementPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} errorElement={<ErrorPage />} />
        <Route path='/about' element={<Propos />} errorElement={<ErrorPage />} />
        <Route path='/location/:id' element={<AppartementPage />} errorElement={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
