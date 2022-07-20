import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 7px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: 'none'}}>
      <Container>
        <Image src="https://cdn.pixabay.com/photo/2022/06/02/00/04/dog-7236774_1280.jpg" />
        <Details>
          <ChannelImage src="https://res.cloudinary.com/da-b-martinez/image/upload/v1656618419/op0tebwkr4nvmbcz7myl.png"/>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName >
              Da.B Channel
            </ChannelName>
            <Info>654.651 views • 1 Day Ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
