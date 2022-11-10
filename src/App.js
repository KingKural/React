import './App.css';

import All from './pages/All/All';
import Videos from './pages/Videos/Videos';
import Images from './pages/Images/Images';
import Layout from "./pages/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/Counter/counterPage";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />
            <Route path="CounterPage" element={<CounterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
