import "../../../CSS/Sections/Home/SubBar_2.css"

const SubBar2 = () => {
    return (  
        <section id="sub_bar2">
            <a href="#" className="box">
                <img src={require("../../../Img/HomeContentImg/payment_method.png")} alt="Payment Methods" />
                <div className="container">
                    <h1>Payment Methods</h1>
                    <p>Check out how we like to receive our payments, it's pretty simple.</p>
                </div>
            </a>
            <a href="#" className="box">
                <img src={require("../../../Img/HomeContentImg/best.png")} alt="Top Buys" />
                <div className="container">
                    <h1>Top Buys</h1>
                    <p>These are our customer's favorites</p>
                </div>
            </a>
        </section>
    );
}
 
export default SubBar2;