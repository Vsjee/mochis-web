import { useState } from 'react';
import type { IProduct } from './interface/products.interface';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from './data/products';
import ProductItem from './components/ProductItem';

import './ProductsCarousel.css';
import 'swiper/css';

function ProductsCarousel() {
  const [productList] = useState<IProduct[]>(products);

  return (
    <section className='carousel'>
      <h1 className='carousel__title'>Productos</h1>
      <Swiper
        direction='horizontal'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
        loop={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {productList.map((item) => {
          return (
            <SwiperSlide className='slide'>
              <ProductItem product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default ProductsCarousel;
