import {
  Flex,
  MenuButton,
  MenuList,
  Menu as ChakraMenu,
  MenuItem,
  Button,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";

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
        <ChakraMenu>
          {() => (
            <>
              <MenuButton
                as={Select}
                placeholder="Ordenar por"
                border="none"
                color="blue"
              />

              <MenuList>
                <MenuItem onClick={ASC}>Menor preço</MenuItem>
                <MenuItem onClick={DESC}>Maior preço</MenuItem>
              </MenuList>
            </>
          )}
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
