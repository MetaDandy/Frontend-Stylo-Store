import { assets } from "../../assets/assets";
import { Title } from "../../Generals/Components";
import { NewsletterBox } from "../../HomePage/Components";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quia!
            Cum delectus, quod veritatis labore in dolor quisquam, temporibus,
            voluptates porro impedit totam ipsam laborum quo iusto dolores!
            Repellendus, quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto.
            Ea praesentium at impedit illum eum architecto, molestiae
            perspiciatis dignissimos quam obcaecati officia. Autem corporis,
            culpa consequuntur ea praesentium consequatur.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            recusandae suscipit accusamus quibusdam ipsum, debitis dolor neque
            quia eaque asperiores obcaecati odit nam eius cupiditate autem
            dolore voluptate molestiae porro?
          </p>
        </div>
      </div>
      <div
        className="text-xl py-4
      "
      >
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, totam quod. Amet in maxime dignissimos vel
            necessitatibus a minus autem, deserunt quod velit itaque reiciendis
            magni voluptatibus natus, error quia?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, totam quod. Amet in maxime dignissimos vel
            necessitatibus a minus autem, deserunt quod velit itaque reiciendis
            magni voluptatibus natus, error quia?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, totam quod. Amet in maxime dignissimos vel
            necessitatibus a minus autem, deserunt quod velit itaque reiciendis
            magni voluptatibus natus, error quia?
          </p>
        </div>
      </div>
      <div className="">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
