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
        </Col>
        <Col className={styles.columns}>
          <h4>Our Brands</h4>
          <h2>RearPortal</h2>
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
          Affiliates including FebitLabs Inc. All Rights Reserved
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
