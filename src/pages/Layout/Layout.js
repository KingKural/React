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
        </nav>
        
        <div className='midle-section'>
            <aside>
                <Link to='/'>All</Link><br />
                <Link to='/images'>Images</Link><br />
                <Link to='/videos'>Videos</Link><br />
                <Link to="/counterPage">Counter</Link><br />
                <Link to="/ToDo">To Do</Link><br />
                <Link to="/NovaPagina">Nova Página</Link>
            </aside>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>What are those?!</footer>
    </>
} 

export default Layout;