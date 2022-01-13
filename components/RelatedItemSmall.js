import React, { useState } from "react"
import styles from "../styles/RelatedItemSmall.module.scss"



const RelatedItemSmall = ({ title, short, picture, url, type }) => {

  return (
    <a href={`/${url}`} className={styles.relateditem}>

      <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}>
      </div>
      <div className={styles.textpart}>
        <div className={styles.title}>
          {title}
        </div>
      </div>

    </a>
  )
}

export default RelatedItemSmall
