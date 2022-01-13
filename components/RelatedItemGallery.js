import React, { useState } from "react"
import styles from "../styles/RelatedItemGallery.module.scss"
import RelatedItem from "./RelatedItem"



const RelatedItemGallery = ({ items, title, type }) => {

  return (
    <div className={styles.relateditemgallery}>
      <div className={styles.title}>{title}</div>
      <div className={styles.relateditems}>
        {items.map((item, index) => (
          <RelatedItem title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} />
        ))}
      </div>
    </div>
  )
}

export default RelatedItemGallery
