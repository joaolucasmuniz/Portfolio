import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/ Home';
import Layout from './components/Layout';
import NotFound from './pages/Not-Found';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/contato" element={ <Contato /> } />
        <Route path="/projetos" element={ <Projetos /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
