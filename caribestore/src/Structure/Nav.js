import "../CSS/Nav.css"
const Nav = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <a href="">Categories<i className="fas fa-sort-down"></i></a>
                    <div className="sub-menu1">
                        <ul>
                            <li><a href="Electronics.php">Electronics</a></li>
                            <li><a href="Furniture.php">Furnitures</a></li>
                            <li><a href="Clothing.php">Clothing</a></li>
                            <li><a href="Shoes.php">Shoes</a></li>  
                            <li><a href="Tools.php">Tools</a></li>                      
                        </ul>
                    </div>
                </li>

                 <li><a href="">Offers<i className="fas fa-sort-down"></i></a>
                    <div className="sub-menu1">
                        <ul>
                            <li><a href="Payment.php">Payment</a></li>
                            <li><a href="TopBuys.php">Top Buys</a></li>                   
                        </ul>
                    </div>
                </li>

                <li><a href="LiveChat.php">Live Chat</a></li>

                <li><a href="">Help<i className="fas fa-sort-down"></i></a>
                    <div className="sub-menu1">
                        <ul>
                            <li><a href="0UserGuide.php">User Guide</a></li>
                            <li><a href="Support.php">Support</a></li>
                            <li><a href="AboutUs.php">About Us</a></li>                 
                        </ul>
                    </div>
                </li>
           </ul>
        </nav>
     );
}
 
export default Nav;