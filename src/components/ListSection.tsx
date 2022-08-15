import { useEffect, useState } from 'react';
import usePosts from '../hooks/api/usePosts';
import { colors } from '../styles/Colors';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ListSection() {
  const { postValue } = usePosts();

  return (
    <Container>
      {postValue.map(list => (
        <List key={list.postId}>
          <StlyedLink to={`/posts/${list.postId}`}>
            <Title>{list.postTitle}</Title>
            {/* <Content>{list.postContent}</Content> */}
            <Wrapper>
              <div>
                <Id>{list.postId}번째 글</Id>
                <Border>|</Border>
                <Time>{list.createTime}</Time>
              </div>
            </Wrapper>
          </StlyedLink>
        </List>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 2.5rem;
  padding: 0 18rem;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;
const StlyedLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 23%;
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  padding: 0 0.35rem;
  min-width: 50vw;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.45);
`;
const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem 0;
`;
const Content = styled.span`
  font-size: 0.8rem;
  opacity: 0.8;
  width: 100%;
  height: 2vh;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const Id = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
`;
const Time = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
`;
const Border = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
  margin: 0 0.5rem;
`;
