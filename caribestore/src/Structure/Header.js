import "../CSS/Header.css"

const Header = () => {
    return (
        <header>
            {/*logo styling*/}
            <div className="Logo">
                <a href="">
                    <span>C</span>
                        aribe
                    <span>S</span>
                        tore
                </a> 
            </div>
            <form action="search.php" method="POST">
                {/*search bar*/}
                <input type="search" placeholder="Search" name="search" required />
                <button type="submit" name="search_submit">
                    <i className="fa fa-search"></i>
                </button>{/*search icon*/}
            </form>
            
            {/*links*/}
            <ul>
                <li><a href="">Log In</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
        </header>
      );
}
 
export default Header;