import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/City.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"

const resolveFrom= {
    default: 'From',
    en: 'From',
    nl: 'Van',
  }

const resolveTo = {
    default: 'To',
    en: 'To',
    nl: 'Naar',
}



const Transport = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;

    if(content.from){
      var departure = data.rels.filter(obj => {
        return content.from.includes(obj.uuid);
      })
    }
    if(content.to){
        var destination = data.rels.filter(obj => {
          return content.to.includes(obj.uuid);
        })
      }

  } else {
    var content = data;
  }


  

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.city}>      

          <h1 className={styles.title}>
            {departure.map((item, index) => (
                  <div>{item.content.Name}</div>
              ))}
            {destination.map((item, index) => (
                <div>{item.content.Name}</div>
            ))}
          </h1>

          <dev>
              <a href={`/${content.link}`}>
                <div>
                  nmbs
                </div>
              </a>
            </dev>

         



          
        </div>
      </main>
    </SbEditable>
  )
}

export default Transport
