import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/City.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"

const resolveCountry = {
  en: 'Country',
  nl: 'land',
}

const resolveTransportation = {
  en: 'Transportation',
  nl: 'Transport'
}

const City = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;

    if(content.Transportation){
      var transportation = data.rels.filter(obj => {
        return content.Transportation.includes(obj.uuid);
      })
    }

  } else {
    var content = data;
  }

  const [country, setCountry] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'Country', 'cities').then(
    function(result){
      setCountry(result.data.stories);
    }
  )

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.city}>

          <h1 className={styles.title}>
            {content.Name}
          </h1>

          <div className={styles.countrylist}>
            {country.map((item, index) => (
              <div className={styles.country}>
                {item.content.Name}
              </div>
            ))}
          </div>
          
          <div className={styles.picture} style={{ backgroundImage: `url("${content.Picture}")` }}>
          </div>

          <div className={styles.summary}>
            {render(content.Summary)}
          </div>

          <div className={styles.transportationsegment}>
            <div className={styles.content}>
              {transportation && transportation.length > 0 && <RelatedItemGallerySmall items={transportation} title={resolveTransportation[locale]} type="transportation"></RelatedItemGallerySmall>}
            </div>
          </div>

          <div className={styles.review}>
            {render(content.Review)}
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default City
