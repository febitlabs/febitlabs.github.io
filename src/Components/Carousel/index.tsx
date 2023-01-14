import {Carousel} from 'primereact/carousel';
import {useState} from 'react';
import styles from './styles.module.scss';

const FebitCarousel = () => {
  const [content, setContent] = useState([
    {image: '/images/slide1.jpg'},
    {image: '/images/slide2.jpg'},
    {image: '/images/slide3.jpg'},
  ]);
  const itemTemplate = (product: {image: string}) => {
    return (
      <div className={styles.carouselDiv}>
        <img
          className={styles.carouselImage}
          src={product.image}
          width="100%"
          height={550}
        />
        <div className={styles.slideContent}>
          <h1>We Implement Your Digital</h1>
          <button>READ MORE</button>
        </div>
      </div>
    );
  };
  return (
    <Carousel
      value={content}
      itemTemplate={itemTemplate}
      autoplayInterval={3000}
      numVisible={1}
      numScroll={1}
      circular
      containerClassName={styles.container}
    ></Carousel>
  );
};

export default FebitCarousel;
