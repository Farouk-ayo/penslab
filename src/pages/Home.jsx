import SwiperShow from "../components/SwiperShow";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <SwiperShow />
      <section className={classes.service}>
        <div>
          <img
            src="https://geya.axiomthemes.com/wp-content/uploads/2021/09/icon-1.svg
"
            alt=""
          />
          <h2>Energy Solutions</h2>
          <p>
            Solar energy is a great alternative for anyone who values
            independence.
          </p>
        </div>
        <div>
          <img
            src="https://geya.axiomthemes.com/wp-content/uploads/2021/09/icon-2.svg
"
            alt=""
          />
          <h2>Global Expertise</h2>
          <p>
            Customized design of photovoltaic systems to offset electrical bill.
          </p>
        </div>
        <div>
          <img
            src="https://geya.axiomthemes.com/wp-content/uploads/2021/09/icon-3.svg"
            alt=""
          />
          <h2>Commercial Use</h2>
          <p>
            Solar power is affordable, accessible and prevalent as never before.
          </p>
        </div>
      </section>
      <hr />
      <section></section>
    </>
  );
};
export default Home;
