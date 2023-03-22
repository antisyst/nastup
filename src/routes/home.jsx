import Navigation from "../components/navigation/navigation.component";
import Showcase from "../components/showcase/showcase.component";
import Footer from "../components/footer/footer.component";

function Home() {
    return(
        <div  className="gradient-bg-welcome" style={{height: "max-content"}}>
        <Navigation/>
        <Showcase/>
        <Footer/>
        </div>
    )
}
 export default Home;