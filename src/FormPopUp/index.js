import React, { Component } from "react";
import styled from "styled-components";
import modalClose from "./modal-close.svg";
import InputMask from "react-input-mask";

const Popup = styled.div`
  padding: 30px;
  margin: 20px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
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
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
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
      </Wrapper>
    );
  }
}
