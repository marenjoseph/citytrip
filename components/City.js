import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/City.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import SmallCardList from "./SmallCardList"



const resolveCountry = {
  default: 'Country',
  nl: 'Land',
}

const resolveTransportation = {
  default: 'Getting there:',
  nl: 'Hoe geraak je er:'
}

const resolveActivities = {
  default: 'Tourist Activities:',
  nl: 'Activiteiten:'
}

const resolveResidences = {
  default: 'Residences:',
  nl: 'Verblijven:'
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
    if(content.activities){
      var activities = data.rels.filter(obj => {
        return content.activities.includes(obj.uuid);
      })
    }
    if(content.residences){
      var residences = data.rels.filter(obj => {
        return content.residences.includes(obj.uuid);
      })
    }


  } else {
    var content = data;
  }

  const [country, setCountry] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'Country', 'Majorcities').then(
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
            {transportation && transportation.length > 0 && <RelatedItemGallerySmall items={transportation} type="transportation"></RelatedItemGallerySmall>}
          </h1>
          
          <div className={styles.countrysegment}>
            {country.map((item, index) => (
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
            {render(content.Summary)}
          </div>

          {activities && activities.length > 0 && <SmallCardList items={activities} title={resolveActivities[locale]} type="activity"></SmallCardList>}
          {residences && residences.length > 0 && <SmallCardList items={residences} title={resolveResidences[locale]} type="residence"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default City
