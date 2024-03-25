import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import { Element } from 'react-scroll';
import Portfolio1 from "../../img/portfolio-photo/gallery_photo_1.png";
import Portfolio2 from "../../img/portfolio-photo/1dsc_0856-800x600 1 1.png";
import Portfolio3 from "../../img/portfolio-photo/gallery_photo_3.png";
import Portfolio4 from "../../img/portfolio-photo/gallery_photo_4.png";
import Portfolio5 from "../../img/portfolio-photo/gallery_photo_5.png";
import Portfolio6 from "../../img/portfolio-photo/gallery_photo_6.png";
import Portfolio7 from "../../img/portfolio-photo/gallery_photo_7.png";
import Portfolio8 from "../../img/portfolio-photo/gallery_photo_8.png";
import Portfolio9 from "../../img/portfolio-photo/gallery_photo_9.png";
import Portfolio10 from "../../img/portfolio-photo/gallery_photo_10.png";
import { BoxAnchor, BoxButton, BtnPortfolio, ContainerPortfolio, PhotoPortfolio, TitlePortfolio } from "./Portfolio.styled";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { iconSize } from "../../constants/iconSize";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Фото");
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeVideoIndex, setActiveVideoIndex] = useState(-1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const categories = [
    { title: "Відео", videos: [
      "https://youtube.com/watch?v=GAIdZe_x0LY&si=VhnAqH8BhlA8c5IB",
      "https://youtube.com/watch?v=unZjDkbDJJ0&si=CLHxaCgi4Gn2zYec",
      "https://youtube.com/watch?v=oQf8qTCJDtE&si=TK39mX0iReSUQjxu",
      "https://youtu.be/GpnrlXMRbVk?si=rB75MDI8lXpiWFun",
      "https://youtu.be/f4WENC27MVg?si=tZhMzjji42MVJHeY"
    ] },
    { title: "Фото", images: [
      Portfolio1, 
      Portfolio2, 
      Portfolio3, 
      Portfolio4, 
      Portfolio5, 
      Portfolio6, 
      Portfolio7, 
      Portfolio8, 
      Portfolio9, 
      Portfolio10
    ] },
  ];

  const handleCategoryClick = (category, index) => {
    if (isVideoPlaying) {
      setIsVideoPlaying(false);
    }
  
    setActiveCategory(category);
    setActiveIndex(index);
  };

  function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", content: "none" }}
        onClick={onClick}
        >
          <MdKeyboardArrowRight size={iconSize.sm} color="white" style={{position: "absolute", top: "0", right: "0", color: "white", backgroundColor: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", transition: "background-color 0.3s, transform 0.3s", cursor: "pointer"}}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const arrowStyles = {
      display: "block",
      background: "var(--brand-gray)",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      zIndex: "1",
      transition: "background-color 0.3s",
      ":before": {
        content: "none",
      },
      ":hover": {
        backgroundColor: "linear-gradient(to left, #DF5306, #FC9850)",
      },
    };
      return (
      <div
      className={className}
      style={{ ...style, ...arrowStyles}}
      onClick={onClick}
      >
        <MdKeyboardArrowLeft size={iconSize.sm} color="white" style={{position: "absolute", top: "0", right: "0", color: "white", backgroundColor: "var(--brand-gray)", width: "40px", height: "40px", borderRadius: "50%", transition: "background-color 0.3s, transform 0.3s", cursor: "pointer"}}/>
      </div>
    );
  }

  const photoSettings  = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const videoSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <ContainerPortfolio>
      <BoxAnchor>
        <Element name="portfolio" className="element">
          <TitlePortfolio>Виконані роботи</TitlePortfolio>
        </Element>
      </BoxAnchor>
      <BoxButton>
        {categories.map((category) => (
          <BtnPortfolio
            key={category.title}
            type="button"
            className={category.title === activeCategory ? "active" : ""}
            onClick={() => handleCategoryClick(category.title, activeIndex)}
          >
            {category.title}
          </BtnPortfolio>
        ))}
      </BoxButton>
      {activeCategory === "Фото" ? (
        <Slider {...photoSettings}>
          {categories.find((category) => category.title === activeCategory).images.map((image, index) => (
            <div key={index}>
              <PhotoPortfolio src={image} alt={`Portfolio ${index + 1}`} height={450} />
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...videoSettings}>
          {categories.find((category) => category.title === activeCategory).videos.map((video, index) => (
            <div key={index}>
              <ReactPlayer
                url={video}
                width="100%"
                height={450} 
                controls={true}
                playing={index === activeVideoIndex && isVideoPlaying}
                onPlay={() => {
                  setActiveVideoIndex(index);
                  setIsVideoPlaying(true);
                }}
                onPause={() => setIsVideoPlaying(false)}
                preload="auto"
                loading={index === activeIndex ? "auto" : "lazy"}
              />
            </div>
          ))}
        </Slider>
      )}
    </ContainerPortfolio>
  );
};

export default Portfolio;