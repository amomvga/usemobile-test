import {
  Flex,
  HStack,
  Icon,
  Link,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiArrowDropDownFill } from "react-icons/ri";

import { Itens } from "./Itens";

interface NavLinkProps {
  desserts: any;
  drinks: any;
  dishes: any;
  garnishes: any;
  filterDisabled: any;
}

export function NavLink({
  desserts,
  drinks,
  dishes,
  garnishes,
  filterDisabled,
}: NavLinkProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex>
      {!isWideVersion ? (
        <Flex w="100%" justify="end">
          <Flex align="center" mr={2}>
            <ChakraMenu isLazy>
              <MenuButton color="blue">Filtrar por</MenuButton>
              <Icon color="blue" mt="2" as={RiArrowDropDownFill} />
              <MenuList>
                <MenuItem onClick={desserts}>Sobremesas</MenuItem>
                <MenuItem onClick={drinks}>Bebidas</MenuItem>
                <MenuItem onClick={dishes}>Prato completo</MenuItem>
                <MenuItem onClick={garnishes}>Acompamhamentos</MenuItem>
                <MenuItem onClick={filterDisabled}>Remover filtro</MenuItem>
              </MenuList>
            </ChakraMenu>
          </Flex>
        </Flex>
      ) : (
        <Flex w="100%" justify="center">
          <HStack spacing={5} justify="center">
            <Link onClick={desserts}>
              <Itens name="Sobremesas" />
            </Link>

            <Link onClick={drinks}>
              <Itens name="Bebidas" />
            </Link>

            <Link onClick={dishes}>
              <Itens name="Prato Completo" />
            </Link>

            <Link onClick={garnishes}>
              <Itens name="Acompamhamentos" />
            </Link>

            <Link onClick={filterDisabled}>
              <Itens name="Todos" />
            </Link>
          </HStack>
        </Flex>
      )}
    </Flex>
  );
}
