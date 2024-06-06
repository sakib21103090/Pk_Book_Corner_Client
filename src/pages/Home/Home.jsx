import Author from "./Home/Author";
import Banner from "./Home/Banner";
import BestSellBooks from "./Home/BestSellBooks";
import { Gallery } from "./Home/Gallery";
import Publishers from "./Home/Publishers";


const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Gallery></Gallery>
          <BestSellBooks></BestSellBooks>
          <Author></Author>
          <Publishers></Publishers>
        </>
    );
};

export default Home;