import GlobalStyle from "./globalStyles.ts";
import { PageLayout } from "./components/layout/index.ts";
import { ProfileCard } from "./components/card/index.ts";
import userInfo from "./userInfo.ts";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <ProfileCard {...userInfo} />
      </PageLayout>
    </>
  );
}
