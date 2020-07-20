import React, { Component } from "react";
import styled from "styled-components";
import validatePhone from "../functuons/validatePhone";
import Scroll from "react-scroll";
import InputMask from "react-input-mask";
import H2 from "./../Elements/H2";
import bg from "./background.jpg";
import bgMin from "./background-min.jpg";

const FormAnchor = Scroll.Element;

const MainText = styled.div`
  width: 100%;
  padding-top: 110px;
  // position: absolute;
  color: #fff;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 35px;
  }
`;

const MainSubHeader = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
`;

const Br = styled.br`
  @media (min-width: 768px) {
    display: none;
  }
`;

const OfferText = styled(H2)`
  font-size: 28px;
  color: #fff;
  padding: 0;
  margin: 10px 0;
  padding-bottom: 10px;
  padding-top: 60px
  text-align: center;
  text-shadow: 1px 1px 2px black, 0 0 1em black;
  
  @media (min-width: 768px) {
    font-size: 38px;
    margin: 0;
    padding-bottom: 40px;
    padding-top: 120px;
  }
`;

const SubOffer = styled.span`
  text-transform: uppercase;
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 42px;
  }
`;

const Wrapper = styled.div`
  background: #fff;
  background-size: cover;
  background-image: url(${bgMin});
  @media (min-width: 768px) {
    background-image: url(${bg});
  }
`;

const Background = styled.div`
  padding: 30px 0;
  // background: rgba(93,95,102,0.66);
  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 768px) {
    display: flex;
    padding: 0 30px;
    max-width: 800px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
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

const FileLabel = styled.label`
  font-size: 22px;
  color: white;
  background-color: ${({ fileUploaded }) =>
    fileUploaded ? "#00bf2a" : "#3b3b3b"};
  display: inline-block;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  padding: 10px 40px;
  box-sizing: border-box;
  text-align: center;
  margin-top: 10px;
  & input {
    width: 0.1px !important;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  margin-bottom: 10px;
`;

const Text = styled.div`
  padding-bottom: 20px;
  text-shadow: 1px 1px 2px black, 0 0 1em black;
  @media (min-width: 768px) {
    width: 700px;
  }
`;

const Fields = styled.div`
  @media (min-width: 768px) {
    padding-top: 25px;
    width: 450px;
  }
`;

const Header = styled(H2)`
  color: #fff;
  padding: 0;
  margin: 10px 0;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 28px;
    margin: 0;
    padding-bottom: 20px;
  }
`;

const SubHeader = styled.span`
  font-family: "Roboto", sans-serif;
  display: block;
  color: #fff;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const FileLink = styled.a`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-top: 10px;
  display: ${({ isFileFieldHided }) =>
    isFileFieldHided ? "inline-block" : "none"};
  cursor: pointer;
  text-decoration: underline;
`;

const FileField = styled.div`
  display: ${({ isFileFieldHided }) => (isFileFieldHided ? "none" : "block")};
`;

const CallWrapper = styled.div`
  padding: 35px 0 20px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CallButtonDescription = styled.div`
  padding: 10px 0;
  text-align: center;
  font-family: "Roboto-Light", sans-serif;
  font-size: 18px;
  color: #fff;
`;

const CallButton = styled(Button)`
  background-color: #d92518;
  font-size: 20px;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      invalidNumber: false,
      fileUploaded: false,
      isFileFieldHided: true,
      fileLabelText: "Прикрепите файл...",
      phone: "",
      filePath: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.hideFileField = this.hideFileField.bind(this);
    this.checkPhone = this.checkPhone.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
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

  handleChangeFile(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (/* e */) => {
      if (file.size > 5000000) {
        alert("Пожалуйста, выберите файл меньше 5Мб");
      } else {
        this.sendFile(file);
      }
    };

    reader.readAsText(file);
  }

  sendFile(file) {
    this.setState({ fileLabelText: "Файл загружается" });
    const form = new FormData();
    form.append("file", file);
    fetch("/api/file", {
      method: "POST",
      body: form
    })
      .then(async response => {
        if (response.status !== 200) {
          this.setState({
            fileLabelText: "Не удалось загрузить файл.."
          });

          return;
        }
        const responseData = await response.json();
        this.setState({
          fileLabelText: "Файл загружен!",
          fileUploaded: true,
          filePath: responseData.path,
          fileStatus: "success"
        });

        console.log(this.state);
      })
      .catch((/* e */) => {
        this.setState({
          fileLabelText: "Не удалось загрузить файл.."
        });
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

  hideFileField() {
    this.setState({ isFileFieldHided: false });
  }

  render() {
    return (
      <div>
        <Wrapper>
          {/*<MainText>*/}
          {/*<H1>*/}
          {/*Лазерная резка, гравировка, УФ-печать*/}
          {/*<MainSubHeader> в Москве</MainSubHeader>*/}
          {/*</H1>*/}
          {/*</MainText>*/}
          <OfferText>
            <small>
              ВЫСОКОЕ КАЧЕСТВО ЛАЗЕРНОЙ РЕЗКИ, ГРАВИРОВКИ, УФ-ПЕЧАТИ
            </small>
            <SubOffer>
              <br />По цене производителя!
            </SubOffer>
          </OfferText>
          <FormAnchor name="FormAnchor" />
          <Background>
            <Form>
              <Text>
                <SubHeader>— Расчет стоимости за 14 минут</SubHeader>
                <SubHeader>— Гарантия на работу 12 месяцев</SubHeader>
                <SubHeader>— Изготовление от 30 минут</SubHeader>
                <SubHeader>— Любые объемы заказа</SubHeader>
                <SubHeader>— Бесплатные образцы</SubHeader>
                <SubHeader>— Разработка дизайна</SubHeader>
              </Text>
              <Fields>
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
                    Получить консультацию
                  </Button>
                </div>
                <FileField isFileFieldHided={this.state.isFileFieldHided}>
                  <FileLabel fileUploaded={this.state.fileUploaded}>
                    {this.state.fileLabelText}
                    <input
                      name="file"
                      onChange={this.handleChangeFile}
                      type="file"
                    />
                  </FileLabel>
                  <input
                    name="filePath"
                    type="hidden"
                    value={this.state.filePath}
                  />
                </FileField>
                <FileLink
                  isFileFieldHided={this.state.isFileFieldHided}
                  onClick={this.hideFileField}
                  to="#"
                >
                  Есть макет, нажмите сюда
                </FileLink>
              </Fields>

              <CallWrapper>
                <CallButtonDescription>
                  Нет времени ждать?
                </CallButtonDescription>
                <CallButton
                  onClick={event => {
                    event.preventDefault();
                    yaCounter48967208.reachGoal("phone");
                    document.location.href = "tel:+79030069990";
                  }}
                >
                  Позвонить!
                </CallButton>
              </CallWrapper>
            </Form>
          </Background>
        </Wrapper>
      </div>
    );
  }
}
