import React from 'react';
import Helmet from 'react-helmet';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import BackArrow from '../../components/BackArrow';
import styled from 'styled-components';
import {ButtonIcon} from '../../components/Icon';

const Container = styled.div`
  margin-top: 20px;
  padding: 50px 20px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

const PhoneLogin = () => {

  const handleOnChange = (value: any, country: any, e: any, formattedValue: any) => {
    console.log({value, country, e, formattedValue});
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log('clicked');
  }
  
  return (
  <Container>
    <Helmet>
      <title>Phone Login | Rider</title>
    </Helmet>
    <BackArrowExtended backTo="/" />
    <Title>Enter your mobile number</Title>
    <PhoneInput
      country={'us'}
      enableSearch={true}
      disableSearchIcon={true}
      inputProps={{
        name: 'phoneNumber',
        required: true,
        autoFocus: true,
      }}
      onChange={handleOnChange}
    />
    <Button onClick={onSubmit}>
      <ButtonIcon />
    </Button>
  </Container>
)};

export default PhoneLogin;
