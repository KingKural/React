import './App.css';

import All from './pages/All/All';
import Videos from './pages/Videos/Videos';
import Images from './pages/Images/Images';
import Layout from "./pages/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/Counter/counterPage";
import ToDo from './pages/toDo/toDoPage';
import NovaPagina from './pages/novaPagina/novaPagina';
import ObjectPaginationPage from './pages/ObjectPaginationPage/objectPaginationPage';
import PhoneBookPage from './pages/PhoneBook/PhoneBook';
import TablePage from './pages/Table/TablePage';
import WordCounter from './pages/WordCounter/WordCounter';
import ShopCart from './pages/ShopCart/ShopCart';

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
            <Route path="ToDo" element={<ToDo />} />
            <Route path="NovaPagina" element={<NovaPagina />} />
            <Route path="ObjectPaginationPage" element={<ObjectPaginationPage/>}/>
            <Route path="PhoneBookPage" element={<PhoneBookPage/>}/>
            <Route path="TablePage" element={<TablePage/>}/>
            <Route path="WordCounter" element={<WordCounter/>}/>
            <Route path="ShopCart" element={<ShopCart/>}/>

            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
