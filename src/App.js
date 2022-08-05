import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import Compteur from './pages/Compteur/Compteur'
import Error404 from './pages/404/404'
import Navigation from './components/Navigation/Navigation'

function App() {

    return (
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="compteur" element={<Compteur />}>
                    <Route path=":startNumber" element={<Compteur />}/>
                    </Route>
                    {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
  );
}

export default App;
