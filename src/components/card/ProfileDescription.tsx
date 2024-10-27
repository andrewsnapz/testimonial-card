import styled from "styled-components";

type ProfileDescriptionProps = {
  description: string;
};

const ProfileDescriptionWrapper = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: var(--md-font-size);
  line-height: var(--md-line-height);
`;

export default function ProfileDescription({ description }: ProfileDescriptionProps) {
  return <ProfileDescriptionWrapper>{description}</ProfileDescriptionWrapper>;
}
