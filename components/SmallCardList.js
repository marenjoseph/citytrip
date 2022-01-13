import React, { useState } from "react"
import styles from "../styles/SmallCardList.module.scss"
import SmallCard from "./SmallCard"



const SmallCardList = ({ items, title, type }) => {

  return (

    <div className={styles.itemgallery}>
      {title&&title!=""&&<div className={styles.title}>{title}</div>}
      <div className={styles.gallerycontent}>
      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        return (
          <div className={styles.smallcardwrapper}>
            {(type == "city") && <SmallCard lang={lang} title={item.content.Name} picture={item.content.Picture} url={item.full_slug} type={type} />}
            {(type == "country") && <SmallCard lang={lang} title={item.content.Name} picture={item.content.Flag} url={item.full_slug} type={type} />}            
            {(type == "activity") && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture} url={item.full_slug} type={type} />}
            {(type == "residence") && <SmallCard lang={lang} title={item.content.Name} picture={item.content.Picture} url={item.full_slug} type={type} />}
            {/* add other types */}
          </div>
        );
      })}
      </div>
      
    </div>

  )
}

export default SmallCardList