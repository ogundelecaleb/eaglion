import "./App.css";
import Blog from "./component/blog";
import Customer from "./component/customer";
import Empower from "./component/empower";
import Faq from "./component/faq";
import Footer from "./component/footer";
import Herobanner from "./component/herobanner";
import Navbar from "./component/navbar";
import Newsletter from "./component/newsletter";
import Partner from "./component/partners";
import Service from "./component/service";
import Testimonial from "./component/testimonial";

const Home = () => {
  return (
    <div className="">
    <Navbar />
    <Herobanner />
    <Partner />
    <Service />
    <Empower />
    <Customer />

    <Testimonial />
    
    <Blog/>
    <Faq />
    <Newsletter />
    <Footer />
  </div>
  )
}

export default Home