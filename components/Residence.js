import React, { useState } from "react"
import SbEditable from "storyblok-react"
import styles from "../styles/Residence.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"


const resolveInformation = {
  default: 'Information:',
  nl: 'Informatie:',
}

const resolvePrice = {
  default: 'Price:',
  nl: 'Prijs:',
}

const resolveWebsite = {
  default: 'Website:',
  nl: 'Website:',
}

const resolveClickHere = {
  default: 'Click here!',
  nl: 'Klik hier!',
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
            {content.Name} {content.Stars}
          </h1>

          <div>
            {transportation && transportation.length > 0 && <RelatedItemGallerySmall items={transportation} type="transportation"></RelatedItemGallerySmall>}
            {content.Address}
          </div>  
          
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

          <h2>
              {resolveInformation[locale]}
          </h2>

          <div className={styles.wrapper}>         
            <div className={styles.first}> {resolvePrice[locale]} </div>
            <div className={styles.second}> {content.Price} </div>   
            <div className={styles.first}> {resolveWebsite[locale]} </div>
            <div className={styles.second}>  <a href={content.website} target="_blank"> {resolveClickHere[locale]} </a>  </div>   
          </div>



        </div>
      </main>
    </SbEditable>
  )
}

export default Residence
