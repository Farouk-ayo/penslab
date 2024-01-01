import SwiperShow from "../components/SwiperShow";
import classes from "./Home.module.scss";
import { services, whatWeDos } from "./data";

const Home = () => {
  return (
    <>
      <SwiperShow />
      <section className={classes.service}>
        {services.map((service) => (
          <>
            <div>
              <img src={service.img} alt="" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </>
        ))}
      </section>
      <hr />
      <section className={classes.whatWeOffer}>
        <p>what we offer</p>
        <h2>Leading Solar Panels in the Industry</h2>
        <div className={classes.offers}>
          {whatWeDos.map((offer) => (
            <>
              <div>
                <p>{offer.number}</p>
                <img src={offer.img} alt="" />
                <h6>{offer.title}</h6>
              </div>
            </>
          ))}
        </div>
        <div>
          <button>About Us</button>
        </div>
      </section>
    </>
  );
};
export default Home;
