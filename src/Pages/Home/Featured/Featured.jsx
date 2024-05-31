import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import featuredImg from "../../../assets/home/featured.jpg"
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-20 pt-8 text-white">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div  className="md:flex bg-opacity-60 bg-slate-500 justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            labore provident exercitationem perspiciatis? Qui at reiciendis
            nihil, amet possimus doloremque iste quam molestiae illo optio id
            aliquid non eaque deleniti voluptas eum vero neque labore. Nulla,
            itaque! Quasi modi officiis accusantium perferendis praesentium.
            Saepe sapiente, sint maiores voluptatem nam beatae!
          </p>
          <button className="btn btn-outline border-b-4 mt-4 border-0">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
