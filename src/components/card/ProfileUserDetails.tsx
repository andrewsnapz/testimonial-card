import styled from "styled-components";

type ProfileUserDetailsProps = {
  profileImageSrc: string;
  profileImageAlt: string;
  name: string;
  userTag: string;
};

const ProfileUserDetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfileUserThumbnail = styled.img`
  width: 48px;
  object-fit: contain;
`;

const ProfileUserName = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: var(--lg-font-size);
  line-height: var(--lg-line-height);
  font-weight: 600;
`;

const ProfileUserTag = styled.p`
  color: var(--text-tertiary);
  font-size: var(--sm-font-size);
  line-height: var(--sm-line-height);
  font-weight: 400;
`;

export default function ProfileUserDetails({
  profileImageSrc,
  profileImageAlt,
  name,
  userTag,
}: ProfileUserDetailsProps) {
  return (
    <ProfileUserDetailsWrapper>
      <ProfileUserThumbnail src={profileImageSrc} alt={profileImageAlt} />
      <ProfileUserName>
        {name}
        <ProfileUserTag>{userTag}</ProfileUserTag>
      </ProfileUserName>
    </ProfileUserDetailsWrapper>
  );
}
