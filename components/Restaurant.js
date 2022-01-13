import React, { useState } from "react"
import SbEditable from "storyblok-react"
import styles from "../styles/Restaurant.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"

const resolveInformation = {
  default: 'Information:',
  nl: 'Informatie:',
}

const resolveType = {
  default: 'Type:',
  nl: 'Type:',
}

const resolvePrice = {
  default: 'Price:',
  nl: 'Prijs:',
}

const resolveRating= {
  default: 'Rating:',
  nl: 'Score:',
}


const Restaurant = ({ data, level }) => {
  var locale = 'en';
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
  getData(data.story.uuid, locale, content.preview = false, 'City', 'restaurants').then(
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
            {content.Name}
          </h1>
        
          <div>
            {transportation && transportation.length > 0 && <RelatedItemGallerySmall items={transportation} type="transportation"></RelatedItemGallerySmall>}
            {content.Address}
          </div>  

          <div className={styles.citysegment}>
            {city.map((item, index) => (
              <a href={`/${item.full_slug}`} className={styles.relateditem}>
                <div className={styles.city}>
                  {item.content.Name}
                </div>
              </a>
            ))}
          </div>

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.Picture}")` }}></div>

          <h2>
              {resolveInformation[locale]}
          </h2>

          <div className={styles.wrapper}>
            <div className={styles.first}> {resolveType[locale]} </div>
            <div className={styles.second}> {content.Type} </div> 
            <div className={styles.first}> {resolveRating[locale]} </div>
            <div className={styles.second}> {content.Rating} </div>            
            <div className={styles.first}> {resolvePrice[locale]} </div>
            <div className={styles.second}> {content.Price} </div>   
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default Restaurant
