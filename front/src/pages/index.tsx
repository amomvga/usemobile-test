import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />

      <Flex direction="column" w="100%" mt="6" maxWidth={1480} mx="auto">
        <Menu />
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
