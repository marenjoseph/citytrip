import React, { useState } from "react"
import SbEditable from "storyblok-react"
import styles from "../styles/Transport.module.scss"
import DynamicComponent from './DynamicComponent'



const Transport = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;

  } else {
    var content = data;
  }


  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {content.body ? content.body.map((content) =>
          <DynamicComponent data={content} key={content._uid} locale={locale} />
        ) : null}

        <div className={styles.city}>      
          <div>
          <iframe src={`${content.map}`} width="80%" height="450" allowfullscreen="" loading="lazy"></iframe>
          </div>   
        </div>
      </main>
    </SbEditable>
  )
}

export default Transport
