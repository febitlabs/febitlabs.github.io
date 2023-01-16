import {Carousel} from 'primereact/carousel';
import {useState} from 'react';
import styles from './styles.module.scss';
import {Button} from 'primereact/button';
import {PrimeIcons} from 'primereact/api';

const FebitCarousel = () => {
  const [content, setContent] = useState([
    {image: '/images/slide1.jpg', text: 'We Implement Your Digital'},
    {image: '/images/slide2.jpg', text: 'Accelerated DevSevOps & AIOps'},
    {image: '/images/slide3.jpg', text: 'Expert in AI/ML & DataOps'},
  ]);
  const itemTemplate = (product: {image: string; text: string}) => {
    return (
      <div className={styles.carouselDiv}>
        <img
          className={styles.carouselImage}
          src={product.image}
          width="100%"
          height={550}
        />
        <div className={styles.slideContent}>
          <h1 className={styles.heading}>{product.text}</h1>
          <Button
            label="READ MORE"
            className={styles.readMore}
            icon={PrimeIcons.ARROW_RIGHT}
            iconPos="right"
          />
        </div>
      </div>
    );
  };
  return (
    <Carousel
      value={content}
      itemTemplate={itemTemplate}
      autoplayInterval={5000}
      numVisible={1}
      numScroll={1}
      circular
      containerClassName={styles.container}
    ></Carousel>
  );
};

export default FebitCarousel;
