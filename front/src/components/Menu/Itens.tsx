import { Text } from "@chakra-ui/react";

interface ItensPropos {
  name: string;
}

export function Itens({ name }: ItensPropos) {
  return (
    <Text
      border="1px"
      borderColor="#595555"
      borderRadius={8}
      color="#595555"
      w='170px'
      align="center"
      p="2"
    >
      {name}
    </Text>
  );
}
