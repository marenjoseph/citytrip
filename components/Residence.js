import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Residence.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import SmallCardList from "./SmallCardList"



const resolveCity = {
  default: 'City',
  nl: 'Stad',
}

const resolveTransportation = {
  default: 'Getting there:',
  nl: 'Hoe geraak je er:'
}

const Residence = ({ data, level }) => {
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

  const [city, setCity] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'City', 'residences').then(
    function(result){
      setCity(result.data.stories);
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
          
          <div className={styles.countrysegment}>
            {city.map((item, index) => (
              <a href={`/${item.full_slug}`}>
                <div className={styles.country}>
                  {item.content.Name}
                </div>
              </a>
            ))}
          </div>
          
          <div className={styles.picture} style={{ backgroundImage: `url("${content.Picture}")` }}>
          </div>

          <div className={styles.summary}>
            {content.Address}
          </div>

          <div className={styles.transportationsegment}>
            <div className={styles.content}>
              {transportation && transportation.length > 0 && <RelatedItemGallerySmall items={transportation} title={resolveTransportation[locale]} type="transportation"></RelatedItemGallerySmall>}
            </div>
          </div>



        </div>
      </main>
    </SbEditable>
  )
}

export default Residence