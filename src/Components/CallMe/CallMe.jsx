import { useEffect, useState } from "react";
import { Field, Form, Formik } from 'formik';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import * as yup from 'yup';
import { PiPhoneCallFill } from "react-icons/pi";
import { TfiClose } from 'react-icons/tfi';
import { iconSize } from "../../constants/iconSize";
import FeedbackModal from "../FeedbackModal";
import Loader from "../Loader/Loader";
import { BtnCallMe, TextereaBoxCallMe, ShakeIcon  } from "./CallMe.styled";
import { BigFormBox, ButtonSubmit, CloseButton, ContainerForForm, 
    ContainerForm, FeedbackBox, ImageFeedback, Input, LabelModal, 
    LabelText, MessageErr, TextFeedback, TitleFeedback, TitleModal
} from "../Hero/Hero.styled";
import Logo from '../../img/Logo-Windo.png';
import ModalMenu from "../ModalMenu/ModalMenu";
import { WindowText } from "../Discount/Discount.styled";

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^([a-zA-Zа-яА-ЯґҐєЄіІїЇ' -]*[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+[' -]*){1,}$/, 'Name is invalid')
        .required('Name is required'),
    number: yup
        .string()
        .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
        .required('Phone number is required'),
    textareaValue: yup
        .string()
        .max(600, 'Additional information should not exceed 200 characters')
});

const initialValues = {
    name: '',
    number: '',
    textareaValue: '',
}

const CallMeButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const toggleModal = () => {
        closeModals();
        setShowModal(!showModal);
    };

    const closeModals = () => {
        setShowModal(false);
        setIsFeedbackModalOpen(false);
    };

    const handleFormSubmit = async (values, { resetForm }) => {
        try {
            setIsLoading(true);


            const response = await emailjs.send(
                'service_jbxdkxg',
                'template_eee9w4e',
                values,
                'CkeKoYLQpAvNETsQz'
            );

            console.log('Email sent:', JSON.stringify(response));

            resetForm();
            setIsModalOpen(true);
        } catch (error) {
            toast.error('Error sending email:', error);
        }

        setIsLoading(false);
        resetForm();
    }


    useEffect(() => {
        if (isModalOpen) {
            const timer = setTimeout(() => {
                setIsModalOpen(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isModalOpen]);

    return (
        <div>
            {isLoading && <Loader />}
            <BtnCallMe type="button" onClick={toggleModal}>
                <ShakeIcon><PiPhoneCallFill size={iconSize.big} /></ShakeIcon>
            </BtnCallMe>

            <ModalMenu isOpen={showModal} onRequestClose={toggleModal} contentLabel="Get a discount">
            <CloseButton onClick={toggleModal} type="button">
                <TfiClose size={iconSize.sm} />
            </CloseButton>
                <BigFormBox>
                    <TitleModal>Зателефонуйте мені</TitleModal>
                    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleFormSubmit}>
                        <Form autoComplete="off">
                            <ContainerForForm>
                                <ContainerForm>
                                    <LabelModal>
                                        <LabelText>Ім‘я</LabelText>
                                        <Input type="text" name="name" placeholder="Введіть ім‘я" required />
                                        <MessageErr name="name" component="div" />
                                    </LabelModal>
                                    <LabelModal>
                                        <LabelText>Номер телефону</LabelText>
                                        <Input type="tel" name="number" placeholder="Введіть номер" required />
                                        <MessageErr name="number" component="div" />
                                    </LabelModal>
                                    <WindowText>
                                        <LabelText htmlFor="textareaValue">Ми відповімо на ваші запитання</LabelText>
                                        <Field name="textareaValue">
                                            {({ field }) => (
                                                <TextereaBoxCallMe {...field} id="textareaValue" placeholder="Як швидко ви встановлюєте вікна?" />
                                            )}
                                        </Field>
                                        <MessageErr name="textareaValue" component="div" />
                                    </WindowText>
                                    <ButtonSubmit type="submit">Відправити</ButtonSubmit>
                                </ContainerForm>
                            </ContainerForForm>
                        </Form>
                    </Formik>
                    {isLoading && <Loader />}
                </BigFormBox>
            </ModalMenu>
            <FeedbackModal isOpen={isFeedbackModalOpen} contentLabel="Call me">
                <FeedbackBox>
                    <TitleFeedback>Ми Вам зателефонуємо найближчим часом!</TitleFeedback>
                    <ImageFeedback src={Logo} alt="logo" />
                    <TextFeedback>Дякуємо, що обрали нас!</TextFeedback>
                </FeedbackBox>
            </FeedbackModal>
        </div>
    )
}

export default CallMeButton;