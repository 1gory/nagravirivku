import React, { Component } from "react";
import styled from "styled-components";
import modalClose from "./modal-close.svg";
import InputMask from "react-input-mask";
import validatePhone from "../functuons/validatePhone";

const Wrapper = styled.div`
  display: ${props => (props.isOpened ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
`;

const FormBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #edeaea;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 13px;
  height: 13px;
  padding-top: 5px;
  cursor: pointer;
`;

const Input = styled(InputMask)`
  width: 100%;
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  background-color: ${({ invalidNumber }) =>
    invalidNumber ? "#ff9292" : "#fff"};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 10px 40px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 26px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  // Change the color to separate the buttons
  background-color: #a2281f;

  &:hover {
    background-color: #f00;
  }

  @media (min-width: 768px) {
    background-color: #d92518;
  }
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      invalidNumber: false,
      phone: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.checkPhone = this.checkPhone.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleClick(formData) {
    yaCounter48967208.reachGoal("order");
    this.props.handleClose();
    this.props.handleOpen();
    fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData)
    })
      .then(async data => {
        this.props.handleOpen();
        const response = await data.json();
      })
      .catch((/* error */) => {
        // this.setState({
        //   fileFormStatus: ERROR_FORM_STATUS,
        // });
      });
  }

  checkPhone(formData) {
    if (!formData.phone || !validatePhone(formData.phone)) {
      this.setState({
        invalidNumber: true
      });
      return false;
    }
    return true;
  }

  render() {
    return (
      <Wrapper isOpened={this.props.isOpened}>
        <FormBlock>
          <StyledImg onClick={this.props.handleClose} src={modalClose} />
          <div>
            <Input
              onChange={this.handleChangeForm}
              placeholder="Имя"
              name="name"
            />
          </div>
          <div>
            <Input
              invalidNumber={this.state.invalidNumber}
              onChange={this.handleChangeForm}
              placeholder="Ваш телефон"
              mask="+7 (999) 999-99-99"
              name="phone"
            />
          </div>
          <div>
            <Button
              onClick={event => {
                event.preventDefault();
                if (this.checkPhone(this.state)) {
                  this.handleClick(this.state);
                }
              }}
            >
              Заказать
            </Button>
          </div>
        </FormBlock>
      </Wrapper>
    );
  }
}
