import { OurPolicy } from "../../Generals/Components";
import {
  BestSeller,
  Hero,
  LatestCollection,
  NewsletterBox,
} from "../Components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
