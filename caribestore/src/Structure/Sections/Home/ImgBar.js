import "../../../CSS/Sections/Home/ImgBar.css"

const ImgBar = () => {
    return ( 
        <section class="img_bar">
            <div className="center">
                <h1>Welcome to <span>C</span><span class="text">aribe</span><span>S</span><span class="text">tore</span></h1>
                <h3>The place where there's never a shortage of items!</h3>
                
                <form method="POST" action="Solely_PHP/SignupBtn.php">
                    <div>
                        <button class="button" name="signUp" type="submit">Sign Up</button>
                        <a href="AboutUs.php" class="button">About us</a> 
                    </div>
                </form>              
            </div>   
        </section>
     );
}
 
export default ImgBar;