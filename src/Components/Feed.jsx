import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 0 1 calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;

const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;

  i {
    margin-right: 10px;
  }
`;

const Img = styled.div`
  cursor: pointer;
  width: 100%;
`;

const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;

const Feed = ({ feed }) => {
  const { source, likes, comments } = feed;

  return (
    <ImgContainer>
      <Img>
        <img src={source} alt={source} />
      </Img>
      <ImgMeta>
        <ImgIcons>
          <i className="fas fa-heart"></i>
          {likes}
        </ImgIcons>
        <ImgIcons>
          <i className="fas fa-comment"></i>
          {comments}
        </ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
};

export default Feed;
