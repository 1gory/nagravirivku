import React from "react";
import styled from "styled-components";
import modalClose from "./modal-close.svg";

const WrapperH3 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Popup = styled.div`
  padding: 30px;
  margin: 20px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
`;

const Wrapper = styled.div`
  display: ${props => (props.isOpened ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
  z-index: 200;
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
  cursor: pointer;
`;

const Text = styled.p``;

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Popup>
      <WrapperH3>
        <H3>Спасибо, заявка принята!</H3>
        <StyledImg onClick={props.handleClose} src={modalClose} />
      </WrapperH3>
      <Text>Свяжемся с Вами в течении 10 минут!</Text>
    </Popup>
  </Wrapper>
);
