import React, { useState } from "react"
import { getFPSData } from "../utils/storyblok"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/FrontpageSlideshow.module.scss"



const FrontpageSlideshow = ({ data, level, locale }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [cities, setCity] = useState([]);
  getFPSData(content._uid, locale, content.preview = false, 'City').then(
    function(result){
      setCity(result.data.stories);
    }
  );


  //returning the HTML
  return (

    <div className={styles.carouselwrapper}>
      <Carousel swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 0.5s ease-in-out"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style">
        {cities.map((item) => {
          const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
          return (
            <a
              href={`${lang}/city/${item.slug}`}
            >
              <div className={styles.item}>
                <div className={styles.mainpicture} style={{ backgroundImage: `url("${item.content.Picture}")` }}>
                  <div className={styles.newsiteminfo}>
                    <h1 className={styles.title}>
                      {item.content.Name}
                    </h1>
                  </div>

                </div>
              </div>
            </a>
          );
        })}
      </Carousel>
    </div>
  )
}

export default FrontpageSlideshow
