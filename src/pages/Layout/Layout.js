import { Link, Outlet } from "react-router-dom";
import "./layout.css"
function Layout() {
    return <>
        <nav>
            <Link to="/"> All </Link>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/counterPage">Counter</Link>
            <Link to="/ToDo">To Do</Link>
            <Link to="/NovaPagina">Nova Página</Link>
            <Link to="ObjectPaginationPage">Person Of Interest</Link>
            <Link to="PhoneBookPage">PhoneBook</Link>
            <Link to="TablePage">TablePage</Link>
            <Link to="WordCounter">Word Counter</Link>
        </nav>
        
        <div className='midle-section'>
            <aside>
                <Link to='/'>All</Link><br />
                <Link to='/images'>Images</Link><br />
                <Link to='/videos'>Videos</Link><br />
                <Link to="/counterPage">Counter</Link><br />
                <Link to="/ToDo">To Do</Link><br />
                <Link to="/NovaPagina">Nova Página</Link><br />
                <Link to="/ObjectPaginationPage">Person Of Interest</Link><br />
                <Link to="/PhoneBookPage">PhoneBook</Link><br/>
                <Link to="/TablePage">TablePage</Link><br/>
                <Link to="/WordCounter">Word Counter</Link><br/>
            </aside>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>What are those?!</footer>
    </>
} 

export default Layout;