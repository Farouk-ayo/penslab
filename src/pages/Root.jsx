import { useEffect } from "react";
import gsap from "gsap";
import Header from "../layouts/Header";
import { GoArrowUp } from "react-icons/go";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";

function Root() {
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    let yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  const fixedUpButton = document.querySelector(".fixedUp");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      fixedUpButton.style.display = "block";
    } else {
      fixedUpButton.style.display = "none";
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <GoArrowUp
        onClick={scrollToTop()}
        className="arrowUp"
        size={40}
        color="white"
      />
      <div className="flair"></div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
