import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/RelatedItemGallerySmall.module.scss"
import RelatedItemSmall from "./RelatedItemSmall"



const RelatedItemGallerySmall = ({ items, title, type }) => {

  return (
    <div className={styles.relateditemgallery}>
      <div className={styles.relateditems}>
        {items.map((item, index) => (
          <RelatedItemSmall picture="/pin.png" url={item.full_slug} type={type} />
        ))}
      </div>
    </div>
  )
}

export default RelatedItemGallerySmall
