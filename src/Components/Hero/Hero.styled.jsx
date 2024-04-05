import styled from '@emotion/styled';
import { Field, ErrorMessage, Form } from 'formik';
import backgroundMobile from '../../img/main-background-mobile.jpg';


export const ContainerHero = styled.div`
    background-image: url(${backgroundMobile});
    background-repeat: no-repeat;
    background-position: 50% 43%;
    padding: 24px 16px;
    background-color: #4E4E4E;

    @media (min-width: 375px) {
        background-position: 50% 62%;
    }

    @media (min-width: 688px) {
        background-color: var(--text-white);
        background-image: none;
        padding: 0 30px 11px;
    }
    
    @media (min-width: 1280px) {
        padding: 0 80px 38px;
    }

    @media (min-width: 1350px) {
        padding: 0 80px 68px;
    }

    @media (min-width: 1440px) {
        padding: 0 100px 60px;
    }
    
    @media (min-width: 1500px) {
        padding: 0 110px 50px;
    }
    
    @media (min-width: 1600px) {
        padding: 0 140px 53px;
    }

    @media (min-width: 1700px) {
        padding: 0 140px 77px;
    }

    @media (min-width: 1800px) {
        padding: 0 140px 100px;
    }

    @media (min-width: 1920px) {
        padding: 0 305px 80px;
    } 
`;

export const BoxMobil = styled.div`
    padding: 15px 15px;
    background-color: #fff;
    position: absolute;
    top: 69px;
    width: auto;


    @media (min-width: 290px) {
        padding: 15px 20px;
    }

    @media (min-width: 300px) {
        padding: 15px 25px;
    }

    @media (min-width: 310px) {
        padding: 15px 30px;
        top: 71px;
    }

    @media (min-width: 320px) {
        padding: 15px 35px;
    }

    @media (min-width: 330px) {
        padding: 15px 40px;
        top: 71px;
    }

    @media (min-width: 340px) {
        padding: 15px 45px;
    }

    @media (min-width: 350px) {
        adding: 20px 50px;
    }

    @media (min-width: 360px) {
        padding: 7px 20px;
    }

    @media (min-width: 372px) {
        padding: 12px 27px;
    }

    @media (min-width: 378px) {
        padding: 18px 29px;
    }

    @media (min-width: 380px) {
        padding: 26px 30px;
        top: 72px;
    }

    @media (min-width: 390px) {
        padding: 26px 35px;
    }

    @media (min-width: 400px) {
        padding: 24px 40px;
        top: 72px;
    }

    @media (min-width: 410px) {
        padding: 26px 45px;
        top: 72px;
    }

    @media (min-width: 410px) {
        padding: 34px 46px;
        top: 77px;
    }

    @media (min-width: 420px) {
        padding: 26px 50px;
        top: 78px;
    }

    @media (min-width: 430px) {
        padding: 35px 55px;
    }

    @media (min-width: 440px) {
        padding: 35px 60px;
    }

    @media (min-width: 450px) {
        padding: 35px 65px;
    }

    @media (min-width: 460px) {
        padding: 35px 70px;
    }

    @media (min-width: 470px) {
        padding: 36px 75px;
        top: 76px;
    }

    @media (min-width: 480px) {
        padding: 36px 80px;
    }

    @media (min-width: 484px) {
        padding: 36px 82px;
    }

    @media (min-width: 490px) {
        padding: 36px 85px;
    }

    @media (min-width: 500px) {
        padding: 36px 90px;
    }

    @media (min-width: 510px) {
        padding: 36px 95px;
    }

    @media (min-width: 530px) {
        padding: 36px 105px;
    }

    @media (min-width: 550px) {
        padding: 36px 115px;
    }

    @media (min-width: 560px) {
        padding: 37px 120px;
    }

    @media (min-width: 570px) {
        padding: 37px 125px;
    }

    @media (min-width: 570px) {
        padding: 37px 130px;
    }

    @media (min-width: 590px) {
        padding: 37px 135px;
    }

    @media (min-width: 600px) {
        padding: 37px 140px;
    }

    @media (min-width: 610px) {
        padding: 37px 145px;
    }

    @media (min-width: 620px) {
        padding: 37px 150px;
    }

    @media (min-width: 630px) {
        padding: 36px 155px;
        top: 76px;
    }

    @media (min-width: 640px) {
        padding: 40px 160px;
    }

    @media (min-width: 650px) {
        padding: 41px 165px;
    }

    @media (min-width: 660px) {
        padding: 41px 170px;
    }

    @media (min-width: 670px) {
        padding: 41px 175px;
    }

    @media (min-width: 678px) {
        padding: 41px 178px;
    }

    @media (min-width: 688px) {
        display: none;
    }
`;

export const BoxHeroTabletText = styled.div`
    display: none;

    @media (min-width: 688px) {
        display: block;
    }
`;


export const HeroTitle = styled.h1`
    margin-bottom: 12px;
    font-family: Inter;
    font-weight: 400;
    font-size: 23px;
    line-height: 1.13;
    letter-spacing: -0.24px;
    color: var(--text-black);
    text-align: center;

    @media (min-width: 375px) {
        font-size: 24px;
    }

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 27px;
        font-weight: 500;
        line-height: 1.14;
        letter-spacing: -0.28px;
        text-align: start;
    }

    @media (min-width: 1024) {
        font-size: 30px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 16px;
        font-size: 48px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const HeroBrandText = styled.h2`

    text-align: center;
    font-family: Inter;
    font-weight: 400;
    color: var(--brand-orange);
    font-size: 15px;
    line-height: 1.5;

    @media (min-width: 360px) {
        font-size: 20px;
    }

    @media (min-width: 768px) {
        margin-bottom: 16px;
        font-weight: 500;
        font-size: 20px;
        text-align: start;
    }

    @media (min-width: 768px) {
        font-size: 22px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 24px;
        font-family: Montserrat;
        font-size: 36px;
    }
`;

export const ContainerBtnText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 306px;

    @media (min-width: 280px) {
        align-items: center;
    }

    @media (min-width: 380px) {
        margin-top: 350px;
    }

    @media (min-width: 688px) {
        align-items: flex-start;
        margin-top: 0;
    }
`;

export const BoxHeroText = styled.div`
    width: 240px;

    @media (min-width: 360px) {
        width: 337px;
    }
    
    @media (min-width: 414px) {
        width: 385px;
    }

    @media (min-width: 640px) {
        width: 435px;
    }

    @media (min-width: 768px) {
        width: 329px;
    }

    @media (min-width: 912px) {
        width: 415px;
    }

    @media (min-width: 1024px) {
        width: 550px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 40px;
        width: 690px;
    }

    @media (min-width: 1920px) {
        width: 900px;
    }
`;

export const HeroText = styled.p`
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--grin-text);

    @media (min-width: 412px) {
        font-size: 14px;
    }

    @media (min-width: 640px) {
        font-size: 17px;
    }

    @media (min-width: 768px) {
        font-size: 17px;
        color: var(--text-black);
    }

    @media (min-width: 1920px) {
        font-size: 30px;
    }
`;

export const BoxBtnHero = styled.div`
    display: block;

    @media (min-width: 980px) {
        display: flex;
        justify-content: center;
        gap: 25px;
    }
`;

export const ButtonHero = styled.button`
    padding: 16px 32px;
    width: 240px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);
    background-color: var(--brand-orange);
    background-image: none;
    border-radius: 12px;
    border: transparent;
    transition: background-image 0.3s ease-in-out;
    margin-bottom: 20px;
  
    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 360px) {
        width: 328px;
    }

    @media (min-width: 414px) {
        width: 385px;
    }

    @media (min-width: 640px) {
        width: 445px;
    }

    @media (min-width: 688px) {
        border-radius: 3px;
        font-size: 18px;
        width: 224px;
    }

    @media (min-width: 1280px) {
        border-radius: 3px;
        font-size: 20px;
        width: 240px;
    }
`;

export const ButtonLinkHero = styled.button`
    display: block;
    padding: 16px 32px;
    width: 235px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);
    background-color: var(--brand-orange);
    background-image: none;
    border-radius: 12px;
    border: transparent;
    transition: background-image 0.3s ease-in-out;
    text-align: center;

    &:hover, &:focus {
        background-image: linear-gradient(to left, #DF5306, #FC9850);
    }

    @media (min-width: 360px) {
        width: 170px;
    }

    @media (min-width: 360px) {
        width: 330px;
    }

    @media (min-width: 414px) {
        width: 379px;
    }

    @media (min-width: 640px) {
        width: 445px;
    }

    @media (min-width: 688px) {
        border-radius: 3px;
        font-size: 18px;
        width: 225px;
    }


    @media (min-width: 980px) {
        width: 332px;
    }

    @media (min-width: 1280px) {
        font-size: 20px;
    }
`;

export const BoxContext = styled.div`

    @media (min-width: 688px) {
        display: block;
        padding-top: 15px;
        padding-bottom: 32px;
    }

    @media (min-width: 1920px) {
        padding-top: 55px;
        padding-bottom: 55px;
    }
`;

export const ImgHeroTablet = styled.div`
    display: none;

    @media (min-width: 688px) {
        display: block;
        position: absolute;
        top: 0.8%;
        left: 52%;
    }

    @media (min-width: 800px) {
        left: 55%;
    }

    @media (min-width: 840px) {
        left: 57%;
    }

    @media (min-width: 880px) {
        left: 58%;
    }

    @media (min-width: 900px) {
        left: 62%;
    }

    @media (min-width: 990px) {
        left: 63%;
    }

    @media (min-width: 1020px) {
        left: 66%;
    }

    @media (min-width: 1050px) {
        left: 67%;
    }

    @media (min-width: 1080px) {
        left: 68%;
    }

    @media (min-width: 1110px) {
        left: 69%;
    }

    @media (min-width: 1128px) {
        left: 70%;
    }

    @media (min-width: 1200px) {
        left: 71%;
    }

    @media (min-width: 1280px) {
        display: none;
    }
`;

export const ImgHeroDesktop = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: block;
        position: absolute;
        top: 64px;
        left: 63%;
    }

    @media (min-width: 1300px) {
        top: 50px;
    }

    @media (min-width: 1345px) {
        top: 35px;
    }

    @media (min-width: 1370px) {
        top: 25px;
    }

    @media (min-width: 1350px) {
        top: 50px;
    }

    @media (min-width: 1420px) {
        top: 32px;
    }

    @media (min-width: 1440px) {
        top: 26px;
        left: 63%;
    }

    @media (min-width: 1470px) {
        left: 65%;
    }

    @media (min-width: 1540px) {
        left: 66%;
    }

    @media (min-width: 1590px) {
        left: 67%;
    }

    @media (min-width: 1620px) {
        left: 68%;
    }

    @media (min-width: 1920px) {
        top: 81px;
    }
`;

export const ContainerForForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 0px;
    top: 40px;
    border: none;
    background-color: transparent;
    color: var(--brand-orange);

    @media (min-width: 320px) {
        right: 10px;
        top: 50px;
    }

    @media (min-width: 540px) {
        top: 50px;
        right: 15px;
    }

    @media (min-width: 640px) {
        top: 55px;
        right: 15px;
    }

    @media (min-width: 1024px) {
        right: 30px;
        top: 90px;
    }
`;

export const TitleModal = styled.h1`
    margin-bottom: 16px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
    text-align: center;

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 48px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const LabelModal = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const LabelText = styled.span`
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 30px;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -1px;
    }
`;

export const Input = styled(Field)`
    width: 140px;
    height: 5px;
    padding: 16px 10px;
    border: 1px solid #4e4e4e38;
    color: var(--brand-gray);

    &:hover, &:focus {
        color: var(--brand-orange);
        border: 1px solid var(--brand-orange);
    }

    @media (min-width: 360px) {
        width: 240px;
    }

    @media (min-width: 450px) {
        width: 300px;
        padding: 20px 15px;
        font-size: 17px;
    }

    @media (min-width: 768px) {
        width: 513px;
    }
`;

export const MessageErr = styled(ErrorMessage)`
    margin-bottom: 6px;
    color: var(--error-color);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
`;

export const ButtonSubmit = styled.button`
    margin-top: 24px;
    margin-bottom: 26px;
    width: 160px;
    padding: 8px 32px;
    background-color: var(--brand-orange);
    border-radius: 3px;
    border: transparent;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-white);
    background-image: none;
    transition: background-image 0.3s ease-in-out;

    @media (min-width: 360px) {
        width: 260px;
    }


    @media (min-width: 450px) {
        width: 321px;
    }
`;

export const AllElementForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 830px) {
        flex-direction: column;
    }
`;

export const TextSocialForm = styled.p`
    margin-right: 4px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--text-black);

    @media (min-width: 768px) {
        font-size: 25px;
    }
`;

export const SocialForm = styled.a`
    color: var(--brand-orange);
`;

export const BoxSocialForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 320px) {
        flex-direction:  row;
    }
`;

export const BigFormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    

    @media (min-width: 1024px){
        margin-top: 110px;
    }
`;

export const FeedbackBox = styled.div`
    width: 343px;
    height: 201px;
    background-color: white;
    padding: 16px 16px;
    margin-top: 139px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 700px;
        height: 371px;

    }
`;

export const TitleFeedback = styled.h2`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-black);
    margin-bottom: 46px;

    @media (min-width: 768px) {
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 500;
        line-height: 1.22;
        margin-bottom: 75px;
    }
`;

export const ImageFeedback = styled.img`
    width: 102px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 46px;

    @media (min-width: 768px) {
        width: 203px;
        margin-bottom: 75px;
    }
`;

export const TextFeedback = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42
    letter-spacing: 0.21px;
    color: var(--brand-gray);

    @media (min-width: 768px) {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.33:
        letter-spacing: -0.24px;
    }
`;
