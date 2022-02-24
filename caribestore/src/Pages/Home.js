import Header from "../Structure/Header";
import Nav from "../Structure/Nav";
import ImgBar from "../Structure/Sections/Home/ImgBar";
import SubBar from "../Structure/Sections/Home/SubBar"
import SubBar2 from "../Structure/Sections/Home/SubBar_2"
import Categories from "../Structure/Sections/Home/Categories"
import "../CSS/Home.css"

const Home = () => {
    return (
        <div>
            <Header/>
            <Nav />
            <section id="content">
                <ImgBar />
                <SubBar />
                <SubBar2 />
                <Categories />
            </section>
        </div>
    )
}

export default Home;