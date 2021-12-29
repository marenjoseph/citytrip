import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Activity.module.scss"
import { getData } from "../utils/storyblok"
import InPageSlideshow from "./InPageSlideshow"
import RelatedItemGallery from "./RelatedItemGallery"


const Activity = ({ data, level }) => {
  var locale = 'en';
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    
  } else {
    var content = data;
  }

  const [city, setCity] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'City', 'activities').then(
    function(result){
      setCity(result.data.stories);
    }
  )

  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.activity}>
          <h1 className={styles.title}>
            {content.Title}
          </h1>

          <div className={styles.citysegment}>
            {city.map((item, index) => (
              <a href={`/${item.full_slug}`} className={styles.relateditem}>
                <div className={styles.city}>
                  {item.content.Name}
                </div>
              </a>
            ))}
          </div>

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture}")` }}></div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
          <div className={styles.short}>
            {render(content.Summary)}
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default Activity
