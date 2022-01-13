import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const resolveText = {
  default: 'Keep me posted through the newsletter',
  nl: 'Hou me op de hoogte via de nieuwsbrief',
}


const EmailOptin = ({data, level, locale}) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  
  // var locale = 'default';


  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>{resolveText[locale]}</div>
       {formstate&&<iframe width="540" height="900" src="https://f299c96c.sibforms.com/serve/MUIEAFat7HhM0z5DNEVawyG9k_MypMKwD08TuxbLKdTW4RA3O-xybnYEdrYkyK9c5Yth-4ndT_oHa-0OJqINsJyD6ILSo8iLHskWqL73UF1w1YyegsMfVOQK950xvNb8yD6MFiygIe4xUb8m_Dgq41HDjzN4LKw0W1MNHcICB2VLv2dBYtqfxnUj8zDcq3gOZebY139_CSzK7PAZ"  frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}


    </div>
  );
};

export default EmailOptin;
