import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import bgImage from '../../assets/backgroundg.png';

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)), url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1``;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 20px;
`;

const FakeInput = styled.div`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Grey = styled.span`
  color: ${(props) => props.theme.colors.greyColor};
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.greyColor};
  padding: 20px 10px;
`;

const SocialLink = styled.span`
  color: ${(props) => props.theme.colors.blueColor};
  font-size: 18px;
  cursor: pointer;
`;

interface IProps extends RouteComponentProps<any> {}

const LoginPresenter: React.FC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Login | Rider</title>
    </Helmet>
    <Header>
      <Logo>
        <Title>Rider</Title>
      </Logo>
    </Header>
    <Footer>
      <Link to='/phone-login'>
        <PhoneLogin>
          <Subtitle>Get moving with Rider</Subtitle>
          <FakeInput>
            <Grey>Enter your mobile number</Grey>
          </FakeInput>
        </PhoneLogin>
      </Link>
      <Link to='/social-login'>
        <SocialLogin>
          <SocialLink>Or connect with social</SocialLink>
        </SocialLogin>
      </Link>
    </Footer>
  </Container>
);

export default LoginPresenter;
