import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export function Dropdown() {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderWidth="1px"
        w="207px"
        h="40px"
        bg="#efefef"
        placeholder="Ordenar por"
        border="none"
        borderRadius={4}
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
      >
        Ordenar por
      </MenuButton>
      <MenuList>
        <MenuItem>Maior preço</MenuItem>
        <MenuItem>Menor preço</MenuItem>
      </MenuList>
    </Menu>
  );
}
