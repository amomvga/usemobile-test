import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export function EmptyList() {
  return (
    <Flex direction="column" w="100%" align="center" mt="80px">
      <Box>
        <Image src="/none.svg" width={144} height={157} />
      </Box>

      <Flex direction="column" align="center" color="#c14d19" mt="4" mb="40px">
        <Text>Ops!</Text>
        <Text>Nenhum produto cadastrado</Text>
        <Text mt="2" color="black">
          Cadastre o seu primeiro produto e
        </Text>
        <Text color="black">comece a vender agora mesmo.</Text>
      </Flex>
    </Flex>
  );
}
