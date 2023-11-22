import Banner from "./components/Banner";
// import FoodRecommender from "./components/FoodRecommender";
import Header from "./components/Header";
import "./styles.css";
import Specials from "./components/Specials";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Test from "./components/ReserveTable";

const menuItems = [

  {
    name: "Special Offers",
    link: "#specials", // Updated link to point to the specials section
    type: "link",
  },
  {
    name: "About",
    link: "#about", // Updated link to point to the about section
    type: "link",
  },
  {
    name: "Testimonial",
    link: "#testimonials", // Updated link to point to the about section
    type: "link",
  },
  {
    name: "Book Table",
    link: "/components/ReserveTable", // Updated link to navigate to the reserveTable page
    type: "button",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems} />
      {/* have students add the banner in themselves */}
      <Banner
        title="Fast food, made fresh, right to your door"
        subtitle="Explore Our Menu"
        imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
      />
      <h1 id="specials"></h1> 
      <Specials /> {/* Added an id for the specials section */}
      <h1 id="testimonials">Testimonials</h1> {/* Added an id for the testimonials section */}
      <Testimonial />
      <h1 id="about"></h1> 
      <About />
      <Footer />
    </div>
  );
}


