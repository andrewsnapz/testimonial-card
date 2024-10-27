import styled from "styled-components";
import ProfileUserDetails from "./ProfileUserDetails.tsx";
import ProfileDescription from "./ProfileDescription.tsx";

/*
    Wrapper of the card
*/

type ProfileCardProps = {
  name: string;
  userTag: string;
  profileImageSrc: string;
  profileImageAlt: string;
  description: string;
};

const ProfileCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 340px;
  height: 233px;
  background-color: var(--background-primary);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--line-primary);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function ProfileCard({
  name,
  userTag,
  profileImageSrc,
  profileImageAlt,
  description,
}: ProfileCardProps) {
  return (
    <ProfileCardWrapper>
      <ProfileUserDetails
        name={name}
        userTag={userTag}
        profileImageSrc={profileImageSrc}
        profileImageAlt={profileImageAlt}
      />
      <ProfileDescription description={description} />
    </ProfileCardWrapper>
  );
}
