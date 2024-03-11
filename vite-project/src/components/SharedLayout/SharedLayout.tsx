import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "@/components/MainHeader";
import Container from "@/components/Container";
import Footer from "../Footer/Footer";

const SharedLayout: FC = () => {
  return (
    <>
      <Container>
        <MainHeader>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainHeader>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default SharedLayout;
