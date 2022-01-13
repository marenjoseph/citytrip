import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Activity.module.scss"
import { getData } from "../utils/storyblok"
import InPageSlideshow from "./InPageSlideshow"
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

const resolvePhone = {
  default: 'Phonenumber:',
  nl: 'Telefoonnummer:',
}

const resolveAge = {
  default: 'Age:',
  nl: 'Leeftijd:',
}

const resolveWebsite = {
  default: 'Website:',
  nl: 'Website:',
}

const resolveClickHere = {
  default: 'Click here!',
  nl: 'Klik hier!',
}


const Activity = ({ data, level }) => {
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
            {content.title}
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

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture}")` }}></div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
          <div className={styles.short}>
            {render(content.Summary)}
          </div>

          <h2>
              {resolveInformation[locale]}
          </h2>

          <div className={styles.wrapper}>
            <div className={styles.first}> {resolveType[locale]} </div>
            <div className={styles.second}> {content.Type} </div>            
            <div className={styles.first}> {resolveWebsite[locale]} </div>
            <div className={styles.second}>  <a href={content.website} target="_blank"> {resolveClickHere[locale]} </a>  </div>   
            <div className={styles.first}> {resolvePhone[locale]} </div>
            <div className={styles.second}> {content.phone_number} </div>    
            <div className={styles.first}> {resolveAge[locale]} </div>
            <div className={styles.second}> {content.Age} </div>    
            <div className={styles.first}> {resolvePrice[locale]} </div>
            <div className={styles.second}> {content.Price} </div>   
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default Activity
