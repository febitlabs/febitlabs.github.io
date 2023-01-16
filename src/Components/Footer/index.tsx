import styles from './styles.module.scss';
import {Button, Col, Row} from 'react-bootstrap';
const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <Row className={styles.footer}>
        <Col className={styles.columns}>
          <img src="/images/FebitLabs_Logo.jpeg" width={120} height={30} />
          <p>
            We accelerate your business transformation by leveraging best fit
            CLOUD NATIVE technologies wherever feasible.
          </p>
          <p>
            We are DIGITAL consultants who partner with you to solve & deliver.
          </p>
          {/* <h4>Social Media</h4>
        <p>
          <a
            className={styles.socialMediaLink}
            href="facebook.com/pages/category/Hotel-Services-Company/Bedoff-113730700369174/"
          >
            <div className={styles.socialMediaIcon} />
          </a>{' '}
          <a
            className={styles.socialMediaLink}
            href="https://www.instagram.com/bedoff_ig/"
          >
            <div className={styles.socialMediaIcon} />
          </a>{' '}
          <a className={styles.socialMediaLink} href="">
            <div className={styles.socialMediaIcon} />
          </a>
        </p> */}
        </Col>
        <Col className={styles.columns}>
          <h4>Our Brands</h4>
          <h2>RearPortal</h2>
          {/* <p>B-17, First Floor, Home Solution Mall, Sakchi, Jamshedpur-831006</p>
        <br />
        <p>reservations@bedoff.com</p>
        <p>+91 8197723127</p> */}
        </Col>
        <Col className={styles.columns}>
          <h4>Instagram</h4>
        </Col>
        <Col className={styles.columns}>
          <h4>Join The Newsletter</h4>
          <p>
            Please share your email and we will keep you updated with the latest
            on our side.
          </p>
          <Button className={styles.bookNow} href="/booking">
            BOOK NOW
          </Button>
        </Col>
      </Row>
      <hr />
      <Row className={styles.footer}>
        <Col>
          ©2022 FebitLabs Technology Consulting Pvt. Ltd. & its Global
          Affiliates including StatusNeo Inc. All Rights Reserved
        </Col>
        <Col>
          <a>Terms Of Use</a>
          <a>Privacy Policy</a>
        </Col>
        <Col>Follow us</Col>
      </Row>
    </div>
  );
};
export default Footer;
