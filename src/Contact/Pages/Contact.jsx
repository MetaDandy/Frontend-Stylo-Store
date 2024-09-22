import { assets } from "../../assets/assets";
import { Title } from "../../Generals/Components";
import { NewsletterBox } from "../../HomePage/Components";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500">
            Ventura Mall <br /> Santa Cruz, Bolivia
          </p>
          <p className="text-gray-500">
            Tel: +591 65933751 <br />
            Email: benitezarroyojoseph@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className=" text-xl text-gray-600">
            Learn more about out teams and jobs openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore more
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
