import { Link } from "react-router-dom"

export function NavBar() {
        return (
        <>
        <Link to='/'>Home</Link>
        <Link to='/library'>My Library</Link>
            
                <h3>Search</h3>
        
        </>
    )
}