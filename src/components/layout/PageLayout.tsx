import styled from "styled-components";
import { type ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-block-start: 200px;
`;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageWrapper>
      <main>{children}</main>
    </PageWrapper>
  );
}
