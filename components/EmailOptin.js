import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
       {formstate&&<iframe width="540" height="900" src="https://4188126f.sibforms.com/serve/MUIEAN1_CE4aiFvB8vqVu-dE3Q3uHJNGHrAvLR5Kp_DiYyquyAzUXFT3n4kKC6styt1NXmTIO7gEBtlmvZjYmQdwWIHnkZnc6S7zErHlMcdrLMHeztNPXRGi2TCn2rLvcTnmJk8XF_y1qDfIgcl6DcDHEY5PHBfIASSROhAlMRyAVeajt1xnyZxpOaAaebTdMExtAqxGw9Mbmnfr" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}


    </div>
  );
};

export default EmailOptin;
