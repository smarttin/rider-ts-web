import React from 'react';
import Helmet from 'react-helmet';
import BackArrow from '../../components/BackArrow';
import styled from 'styled-components';
import {FaceBookIcon} from '../../components/Icon';

const Container = styled.div`
  margin-top: 20px;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Link = styled.span`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const SocialLoginPresenter = () => (
  <Container>
    <Helmet>
      <title>Social Login | Rider</title>
    </Helmet>
    <Title>Choose an account</Title>
    <BackArrowExtended backTo='/' />
    <Link>
      <Icon>
        <FaceBookIcon />
      </Icon>
      Facebook
    </Link>
  </Container>
);

export default SocialLoginPresenter;
