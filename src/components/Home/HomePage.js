import TopItems from "../TopItems/TopItems";
import Header from "./Header/Header";
import PremiumCollection from "./PremiumCollection/PremiumCollection";
import Story from "./Story/Story";
import Achievement from './Achievement/Achievement.js'
import Insights from './Insights/Insights.js'
import NewsLetter from "../NewsLetter/NewsLetter";

function HomePage() {
  return (
    <>
      <div className="HomePage-body">
        <Header />
        <PremiumCollection />
        {/* <TopItems /> */}
        <Story />
        <Achievement />
        <Insights />
        <NewsLetter />
      </div>
    </>
  );
}

export default HomePage;
