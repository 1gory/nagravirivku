import React, { Component } from 'react';
import styled from 'styled-components';
import validatePhone from '../functuons/validatePhone';
import Scroll from 'react-scroll';
import InputMask from 'react-input-mask';
import H2 from './../Elements/H2';
import bg from './bg.jpg';

const FormAnchor = Scroll.Element;

const Wrapper = styled.div`
  background: #FFF;
  background-image: url(${bg});  
  background-size: cover;
`;

const Background = styled.div`
  padding: 30px 0;
  background: rgba(93,95,102,0.80);
  
  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 0 30px;
  
  @media (min-width: 768px) {
    display: flex;
    max-width: 800px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 10px 40px;
  color:#ffffff;
  background-color:#d92518;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Roboto',sans-serif;
`;

const Input = styled(InputMask)`
  width: 100%;
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({invalidNumber}) => (invalidNumber ? '#ff9292' : '#fff' )};
  font-family: 'Roboto',sans-serif;
  font-size: 16px;
  
  margin-bottom: 10px;
`;

const FileLabel = styled.label`
  font-size: 22px;
  color: white;
  background-color: #3b3b3b;;
  display: inline-block;
  cursor: pointer;
  font-family: 'Roboto',sans-serif;
  font-size: 16px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  padding: 10px 40px;
  box-sizing: border-box;

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
  
  @media (min-width: 768px) {
    width: 700px;
  }
`;

const Fields = styled.div`

  @media (min-width: 768px) {
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
  font-family: 'Roboto', sans-serif;
  display: block;
  color: #fff;
  padding-bottom: 10px;
  
  @media (min-width: 768px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

// const handleClick

export default class extends Component {

  constructor(){
    super();

    this.state = {
      invalidNumber: false,
      phone: '',
      filePath: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendFile = this.sendFile.bind(this);
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
    yaCounter48967208.reachGoal('order');
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    }).then(async (data) => {
      this.props.handleOpen();
      const response = await data.json();
    }).catch((/* error */) => {
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
        alert('Пожалуйста, выберите файл меньше 5Мб');
      } else {
        this.sendFile(file);
      }
    };

    reader.readAsText(file);
  }

  sendFile(file) {
    const form = new FormData();
    form.append('file', file);
    fetch('/api/file', {
      method: 'POST',
      body: form,
    }).then(async (response) => {
      if (response.status !== 200) {
        // this.setState({
        //   fileFormStatus: ERROR_FORM_STATUS,
        // });

        return;
      }
      const responseData = await response.json();
      this.setState({
        filePath: responseData.path,
      });

      console.log(this.state);
    }).catch((/* e */) => {
      this.setState({
        fileFormStatus: ERROR_FORM_STATUS,
      });
    });
  }

  checkPhone(formData) {
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return false;
    }
    return true;
  }

  render() {
    return <div>
      <Wrapper>
        <FormAnchor name="FormAnchor" />
        <Background>
          <Form>
            <Text>
              <Header>Оставьте заявку и получите:</Header>
              <SubHeader>— Расчет в течение 30 минут</SubHeader>
              <SubHeader>— Помощь в создании макета</SubHeader>
              <SubHeader>— Консультацию по заказу</SubHeader>
            </Text>
            <Fields>
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
                <FileLabel>
                  Прикрепите файл...
                  <input
                    name="file"
                    onChange={this.handleChangeFile}
                    type="file"
                  />
                </FileLabel>
                <input name="filePath" type="hidden" value={this.state.filePath}/>
              </div>
              <div>
                <Button onClick={(event) => {
                  event.preventDefault();
                  if (this.checkPhone(this.state)) {
                    this.handleClick(this.state)
                  }
                }}>Оставить заявку</Button>
              </div>
            </Fields>
          </Form>
        </Background>
      </Wrapper>
    </div>
  }
}
