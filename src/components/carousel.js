import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src="obrazek1.jpg" alt="První obrázek" />
                <p className="legend">Popis prvního obrázku</p>
            </div>
            <div>
                <img src="obrazek2.jpg" alt="Druhý obrázek" />
                <p className="legend">Popis druhého obrázku</p>
            </div>
            <div>
                <img src="obrazek3.jpg" alt="Třetí obrázek" />
                <p className="legend">Popis třetího obrázku</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;
