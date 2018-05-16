import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import H2 from './../Elements/H2';
import bg from './bg.jpg';

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
  background-color: #ffffff;
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
    padding-bottom: 15px;
  }
`;

export default () => (
  <div>
    <Wrapper>
      <Background>
        <Form>
          <Text>
            <Header>Оставьте телефон и получите:</Header>
            <SubHeader>— Расчет стоимости заказа за 30 мин</SubHeader>
            <SubHeader>— Консультацию по маркировке/гравировке</SubHeader>
          </Text>
          <Fields>
            <div>
              <Input
                placeholder="Ваш телефон"
                mask="+7 (999) 999-99-99"
              />
            </div>
            <div>
              <FileLabel>
                Прикрепите файл...
                <input type="file"/>
              </FileLabel>
            </div>
            <div>
              <Button>Оставить заявку</Button>
            </div>
          </Fields>
        </Form>
      </Background>
    </Wrapper>
  </div>
);
