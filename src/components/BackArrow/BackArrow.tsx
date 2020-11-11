import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {BackArrowIcon} from '../Icon';

const Container = styled.div`
  transform: scale(0.6);
`;

interface IProps {
  backTo: string;
  className?: string;
}

const BackArrow: React.FC<IProps> = ({backTo, className}) => (
  <Container className={className}>
    <Link to={backTo}>
      <BackArrowIcon/>
    </Link>
  </Container>
);

export default BackArrow;
