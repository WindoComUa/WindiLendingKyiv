import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Element } from 'react-scroll';
import rehau60 from '../../img/rehau/rehau-euro-design-60.jpg';
import rehau70 from '../../img/rehau/rehau-euro-design-70.jpg';
import rehauBrilliant from '../../img/rehau/rehau-brillant-design.jpg';
import rehauSynego from '../../img/rehau/rehau-zyro-image.jpg';
import wds5S from '../../img/wds/WDS-5S-1.png';
import wds6S from '../../img/wds/WDS-6S-1.png';
import wds7S from '../../img/wds/WDS-7S-1.png';
import wds8S from '../../img/wds/WDS-8S-1.png';
import BluEvolution73 from '../../img/salamander/salamander-1.png';
import Streamline76 from '../../img/salamander/salamander-2.png';
import BluEvolution82 from '../../img/salamander/salamander-3.png';
import BluEvolution92 from '../../img/salamander/salamander-4.png';
import { BoxAnchor, BoxAssortment, BoxImagesSlider, BtnAssortment, ContainerButtons, ImagesSlickSlide, NameProduct, TitleAssortment } from './Assortment.styled';



const Assortment = () => {
    const [activeCategory, setActiveCategory] = useState('Rehau');
    const [activeIndex, setActiveIndex] = useState(0);


    const categories = [
      {
        title: 'Rehau',
        images: [
          { image: rehau60, alt: 'Rehau Euro-Design 60', title: 'Rehau Euro-Design 60' },
          { image: rehau70, alt: 'Rehau Euro-Design 70', title: 'Rehau Euro-Design 70' },
          { image: rehauBrilliant, alt: 'Rehau Brillant-Design', title: 'Rehau Brillant-Design' },
          { image: rehauSynego, alt: 'Rehau Synego', title: 'Rehau Synego' }
        ]
      },
      {
        title: 'WDS',
        images: [
          { image: wds5S, alt: 'WDS 5S', title: 'WDS 5S' },
          { image: wds6S, alt: 'WDS 6S', title: 'WDS 6S' },
          { image: wds7S, alt: 'WDS 7S', title: 'WDS 7S' },
          { image: wds8S, alt: 'WDS 8S', title: 'WDS 8S' }
        ]
      },
      {
        title: 'Salamander',
        images: [
          { image: BluEvolution73, alt: 'BluEvolution 73', title: 'BluEvolution 73' },
          { image: Streamline76, alt: 'Streamline 76', title: 'Streamline 76' },
          { image: BluEvolution82, alt: 'BluEvolution 82', title: 'BluEvolution 82' },
          { image: BluEvolution92, alt: 'BluEvolution 92', title: 'BluEvolution 92' }
        ]
      }
    ];

  const handleCategoryClick = (category, index) => {
    setActiveCategory(category);
    setActiveIndex(index);
  };


  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    focusOnSelect: true,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
   }
  },
  {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }}
  ]
};


  return (
  <BoxAssortment>
    <BoxAnchor>
      <Element name="assortment" className="element"> <TitleAssortment>Різновиди профільних систем</TitleAssortment> </Element>
        </BoxAnchor>
        <ContainerButtons>
          {categories.map((category) => (
          <BtnAssortment
          key={category.title} 
          type='button'
          className={category.title === activeCategory ? "active" : ""}
          onClick={() => handleCategoryClick(category.title, activeIndex)}>
            {category.title}
          </BtnAssortment>
         ))}
        </ContainerButtons>
        <Slider {...settings}>
          {categories
          .find((category) => category.title === activeCategory)
          .images.map((image, index) => (
          <BoxImagesSlider key={index}>
            <ImagesSlickSlide src={image.image} alt={image.alt} width={170} height={475}/>
            <NameProduct>{image.title}</NameProduct>
          </BoxImagesSlider>
        ))}
      </Slider>
    </BoxAssortment>    
  )
}

export default Assortment;