import { Link } from "react-router-dom"
import { SearchForm } from "../SearchForm/SearchForm";
import styles from './NavBar.module.css';

export function NavBar() {
        return (
                <>
                        <div className={styles.navbar}>                
        <Link to='/'>Trends</Link>
        <Link to='/library'>My Watchlist</Link>
            </div>
                <SearchForm />
        
        </>
    )
}