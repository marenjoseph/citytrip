import styles from "../styles/Footer.module.scss"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
            <Image src="/logo3.png" alt="Citytrips Logo" width="532" height="145" />
        </div>
        <p>The best citytrip for your needs!</p>
      </div>
    </footer>



  )
}

export default Footer
