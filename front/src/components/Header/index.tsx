import { Box, Flex, Icon, Text, Link, Image } from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="117"
      mx="auto"
      p="6"
      align="center"
      bg="#f29c46"
    >
      <Box>
        <Link href="/">
          <Image src="/logo.svg" w={["40px", "80px"]} h={["40px", "80px"]} />
        </Link>
      </Box>

      <Box ml="5">
        <Text fontSize={["15", "27px"]}>Olá, Joana!</Text>
      </Box>

      <Flex direction="column" ml="auto" align="center">
        <Icon as={RiLogoutBoxLine} fontSize={["23px", "40px"]} />
        <Text fontWeight="bold" fontSize={["10px", "16px"]}>
          Sair
        </Text>
      </Flex>
    </Flex>
  );
}
