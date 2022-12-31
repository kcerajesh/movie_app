import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from './components';
import { Home, Movie } from './pages';

import './index.css'

const App = () => {
    return (
        <>
            <div className="App">
                <Router>
                    <Header />
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="movie/:id" element={<Movie />}></Route>
                        <Route path="movies/:type" element={<Home />}></Route>
                        <Route path="/:searchText" element={<Home />}></Route>
                        <Route path="/*" element={<h1>Error Page</h1>}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App