import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex w="100%" h="93px" bg="#efefef" align="center" justify="center">
      <Text fontSize={["xs","lg"]} color="#595555">
        2021 | Usemobile. Todos direitos reservados.
      </Text>
    </Flex>
  );
}
