import "../../../CSS/Sections/Home/SubBar.css"

const SubBar = () => {
    return ( 
        <section id="sub_bar">
            <div id="user_guide">
                <img src={require("../../../Img/HomeContentImg/userguide.png")} alt="User Guide"/>
                <div class="text-container">
                    <h1>User Guide</h1>
                    <p>Learn more about our site requirements, tips and tricks and many more!</p>
                </div>
                <div className="button-container">
                    <a href="">Check it out</a> 
                </div>
            </div>
        </section>
     );
}
 
export default SubBar;