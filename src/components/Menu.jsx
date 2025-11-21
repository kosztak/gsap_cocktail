import { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
  const [currentIndex, setCurrerntIndex] = useState(0);
  const contentRef = useRef(null);

  const currentCocktail = sliderLists[currentIndex];

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  function handleSlide(index) {
    const newIndex = index % sliderLists.length;
    setCurrerntIndex(newIndex < 0 ? sliderLists.length - 1 : newIndex);
  }

  function getCocktailNameByIndex(index) {
    const newIndex = index % sliderLists.length;
    return sliderLists[newIndex < 0 ? sliderLists.length - 1 : newIndex].name;
  }

  return (
    <div id="menu" aria-labelledby="manu-heading">
      <img src="images/slider-left-leaf.png" alt="left leaf" id="m-left-leaf" />
      <img
        src="images/slider-right-leaf.png"
        alt="right leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((slider, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={slider.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => setCurrerntIndex(index)}
            >
              {slider.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => handleSlide(currentIndex - 1)}
          >
            <span>{getCocktailNameByIndex(currentIndex - 1)}</span>
            <img
              src="images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-right"
            onClick={() => handleSlide(currentIndex + 1)}
          >
            <span>{getCocktailNameByIndex(currentIndex + 1)}</span>
            <img
              src="images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
              className="ml-auto"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt="cocktail"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
