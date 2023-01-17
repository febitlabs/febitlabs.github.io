import {Carousel} from 'primereact/carousel';
import {useState} from 'react';
import styles from './mobileApps.module.scss';
import {Button} from 'primereact/button';
import {PrimeIcons} from 'primereact/api';

const MobileApplicationsComponent = () => {
  const [content, setContent] = useState([
    {
      image: '/images/slide1.jpg',
      text: 'We Implement Your Digital',
      background: styles.carouselDiv1,
      title: 'NATIVE MOBILE APPS',
      heading: 'iOS & Android',
      dialogLeft: 'Best Runtime Performance',
      dialogRight: 'Direct access to app APIs',
    },
    {
      image: '/images/slide2.jpg',
      text: 'Accelerated DevSevOps & AIOps',
      background: styles.carouselDiv2,
      title: 'CROSS PLATFORM APPS',
      heading: 'React ~ Django ~ Node',
      dialogLeft: 'Single Code for Multiple Platforms',
      dialogRight: 'Easier to Build and Maintain',
    },
    {
      image: '/images/slide3.jpg',
      text: 'Expert in AI/ML & DataOps',
      background: styles.carouselDiv3,
      title: 'HYBRID WEB APPS',
      heading: 'WEB CONTAINER BASED',
      dialogLeft: 'Shared Code Base Between Web and Mobile',
      dialogRight: 'Reuse Web Development Skill- set to Build Multiple Apps',
    },
    {
      image: '/images/slide3.jpg',
      text: 'Expert in AI/ML & DataOps',
      background: styles.carouselDiv4,
      title: 'PROGRESSIVE WEB APPS',
      heading: 'Offline Mode - ON',
      dialogLeft: 'Same App for Web and Mobile',
      dialogRight: 'Access via URL no Installation Needed',
    },
  ]);
  const itemTemplate = (product: {
    image: string;
    text: string;
    background: string;
    title: string;
    heading: string;
    dialogLeft: string;
    dialogRight: string;
  }) => {
    return (
      <div className={product.background + ' grid'}>
        <div className={styles.leftCol + ' col'}>
          <h3 className={styles.heading3}>{product.title}</h3>
          <h1 className={styles.heading1}>{product.heading}</h1>
          <Button
            icon={PrimeIcons.APPLE}
            label="IAppStore"
            className={styles.appButton}
          ></Button>
          <Button
            className={styles.appButton}
            icon={PrimeIcons.APPLE}
            label="GooglePlay"
          ></Button>
          <div className={styles.dialogs}>
            <p style={{width: '45%', paddingRight: '1.5rem'}}>
              {product.dialogLeft}
            </p>
            <p style={{width: '45%', paddingRight: '1.5rem'}}>
              {product.dialogRight}
            </p>
          </div>
        </div>
        <div className="col">1</div>
      </div>
    );
  };
  return (
    <Carousel
      value={content}
      itemTemplate={itemTemplate}
      orientation="vertical"
      autoplayInterval={5000}
      numVisible={1}
      verticalViewPortHeight={window.innerHeight - 61 + 'px'}
      numScroll={1}
      circular
      containerClassName={styles.container}
    ></Carousel>
  );
};

export default MobileApplicationsComponent;
