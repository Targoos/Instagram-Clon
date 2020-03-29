import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { feeds as posts } from "../feeds.js";
import styled from "styled-components";
import Feed from "./Feed";

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: auto;
  padding-top: 50px;
`;

const ProfileDetails = styled.div`
  display: flex;
`;

const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solud #ccc;
  padding: 5px;
`;

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;

const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;

  a {
    text-decoration: none;
    color: #262626;
  }
`;

const SettingsProfile = styled.div`
  margin-left: 20px;
  font-size: 25px;

  a {
    color: black;
  }
`;

const HeadingThreeText = styled.h3`
  color: #262626;
  font-weight: 300;
`;

const ParagraphText = styled.p`
  margin-right: 35px;
  color: #262626;
  margin: 10px;

  i {
    margin-left: 10px;
  }
`;

const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileDetailsName = styled.div`
  text-align: left;
`;

const BorderLine = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.0975);
  margin-top: 25px;
`;

const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Profile = () => {
  const [feeds] = useState(posts);

  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="profile1.png" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>Kiscia</HeadingThreeText>
            <EditProfileButton>
              <Link to={"#!"}>Edit Profile</Link>
            </EditProfileButton>
            <SettingsProfile>
              <Link to={"#!"}>
                <i className="fas fa-cog"></i>
              </Link>
            </SettingsProfile>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>6</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Gretel</strong>
            </ParagraphText>
            <ParagraphText>
              Scotish Girl
              <i className="fas fa-heart"></i>
            </ParagraphText>
            <ParagraphText>
              Clams Casino - I'm god
              <i className="fas fa-headphones"></i>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <BorderLine />
      <ImagesWrapper>
        {feeds.map(feed => (
          <Feed feed={feed} key={feed.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
  );
};

export default Profile;
