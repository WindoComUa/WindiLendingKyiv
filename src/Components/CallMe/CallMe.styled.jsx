import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-15px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;

const showMessage = keyframes`
  0%, 25%, 100% {
    transform: translate(-100%, -50%) scale(0);
    opacity: 0;
  }
  5%, 20% {
    transform: translate(-100%, -50%) scale(1);
    opacity: 1;
  }
`;

export const BtnCallMe = styled.button`
    position: fixed;
    bottom: 80px;
    right: 20px;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 50%;
    background-color: var(--brand-orange);
    border: 3px solid #d5d5d5;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    animation: ${jumpAnimation} 3s infinite;

    &::after {
      content: "Хочете ми вам зателефонуємо?";
      position: absolute;
      top: -50%;
      left: 100%;
      transform: translate(-100%, -50%) scale(0);
      transition: transform 0.3s ease;
      padding: 18px 22px;
      border-radius: 25px;
      background-color: rgba(238, 235, 231, 0.15);
      color: var(--brand-orange);
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
      font-size: 14px;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(204, 204, 204, 0.7);
      z-index: 10;
      pointer-events: none;
      animation: ${showMessage} 15s infinite; 
      &::before {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background-color: #fff;
          box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
      }
  }

  &:hover::after {
      transform: translate(-100%, -50%) scale(1);
  }
`;

export const ShakeIcon = styled.div`
    display: inline-block;
    animation: ${shakeAnimation} 0.6s infinite;
`;

export const TextereaBoxCallMe = styled.textarea`
    height: 80px;
    width: 240px;
    margin-bottom: 12px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: 0.21px;
    color: var(--brand-gray);
    resize: none;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px 16px;

    @media (min-width: 688px){
        width: 300px;
    }

    @media (min-width: 780px){
        width: 512px;
        height: 80px;
    }
`;
