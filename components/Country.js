import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Country.module.scss"
import { getData } from "../utils/storyblok"



const Country = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;

    if(content.Capital){
      var capital = data.rels.filter(obj => {
        return content.Capital.includes(obj.uuid);
      })
    }

  } else {
    var content = data;
  }



  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}

        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.Name}
          </h1>
        </div>

        <div className={styles.country}>
          <div className={styles.flag} style={{ backgroundImage: `url("${content.Flag}")` }}>
            </div>

          <div className={styles.description}>
            {render(content.Summary)}
          </div>

          <div className={styles.picture} style={{ backgroundImage: `url("${content.Picture}")` }}>
            </div>

          <div>
            <p>CAPITAL: </p>
            {capital && capital.length>0 && <p>content.Capital.Name</p>}
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default Country
