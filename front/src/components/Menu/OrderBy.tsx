import {
  Flex,
  MenuButton,
  MenuList,
  Menu as ChakraMenu,
  MenuItem,
  Button,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { RiArrowDropDownFill } from "react-icons/ri";

interface OrderByProps {
  ASC: any;
  DESC: any;
}

export function OrderBy({ ASC, DESC }: OrderByProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex>
      {!isWideVersion ? (
        <ChakraMenu isLazy>
          <MenuButton color="blue">Ordenar por</MenuButton>
          <Icon color="blue" mt="2" as={RiArrowDropDownFill} />
          <MenuList>
            <MenuItem onClick={ASC}>Menor preço</MenuItem>
            <MenuItem onClick={DESC}>Maior preço</MenuItem>
          </MenuList>
        </ChakraMenu>
      ) : (
        <ChakraMenu>
          {() => (
            <>
              <MenuButton
                w={["20", "30", "40"]}
                fontSize={["11", "13", "15"]}
                as={Button}
              >
                Ordenar por
              </MenuButton>
              <MenuList>
                <MenuItem onClick={ASC}>Menor preço</MenuItem>
                <MenuItem onClick={DESC}>Maior preço</MenuItem>
              </MenuList>
            </>
          )}
        </ChakraMenu>
      )}
    </Flex>
  );
}
