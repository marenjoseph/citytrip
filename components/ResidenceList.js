import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/CityList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const resolveOrderby = {
  default: 'Order by',
  nl: 'Sorteer op',
}

const resolveAsc = {
  default: 'Name (ascending)',
  nl: 'Naam (oplopend)',
}

const resolveDesc= {
  default: 'Name (descending)',
  nl: 'Naam (aflopend)',
}


const ResidenceList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  function updateSortby(sortby){
    setSortby(sortby);
    getAllItems('Residence', locale, sortby).then(
      function (result) {
        setItems(result.data.stories);
      });
  }
  

  const [items, setItems] = useState([]);
  getAllItems('Residence', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div className={styles.orderbypicker}>
        <div className={styles.orderbytitle}>
          {resolveOrderby[locale]}
        </div>
        <div className={styles.orderbyoptions} >
          <div className={styles.orderbyoption} onClick={() => updateSortby("content.Name:asc")}>
            {resolveAsc[locale]}
          </div>
          <div className={styles.orderbyoption} onClick={() => updateSortby("content.Name:desc")}>
            {resolveDesc[locale]}
          </div>
        </div>
      </div>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="residence"></SmallCardList>}
      </div>
    </div>

  );
};

export default ResidenceList;
