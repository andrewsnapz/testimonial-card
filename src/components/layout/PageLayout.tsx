import styled from "styled-components";
import { type ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

const PageWrapper = styled.div`
  background-color: var(--background-primary);
  margin-block-start: 200px;
`;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageWrapper>
      <main>{children}</main>
    </PageWrapper>
  );
}
