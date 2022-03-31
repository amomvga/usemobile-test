import {
  Flex,
  HStack,
  Icon,
  Text,
  Image as ChakraImage,
  Button,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

interface ListProps {
  dishName: string;
  portion: string;
  description: string;
  price: number;
  path: string;
  removeItemModal: any;
  editItem: any;
  disabled: any;
}

export function List({
  dishName,
  portion,
  description,
  price,
  path,
  removeItemModal,
  editItem,
  disabled,
}: ListProps) {
  const [disabledItem, setDisabledItem] = useState(Boolean);

  useEffect(() => {
    if (disabled === "Produto não disponível") {
      setDisabledItem(true);
    } else {
      setDisabledItem(false);
    }
  }, []);

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex>
      <Flex w="100%" justify="center" my="6">
        {isWideVersion ? (
          <Flex bgColor="#efefef" p="2" m="2" borderRadius={8}>
            {disabledItem ? (
              <Flex style={{ opacity: 0.3 }}>
                <ChakraImage
                  src={`http://localhost:3333/files/${path}`}
                  width={150}
                  height={150}
                />
                <Flex
                  direction="column"
                  width={306}
                  ml="4"
                  borderRight="1px"
                  borderColor="#c0c0c0"
                >
                  <Flex>
                    <Text color="#c14d19" fontSize={15}>
                      {dishName}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text color="#f29c46" fontSize={15}>
                      {portion}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text maxWidth="300px" fontSize={15} mt="1" mr="2">
                      {description}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text color="#72bc54">{"R$" + price}</Text>
                  </Flex>
                </Flex>
              </Flex>
            ) : (
              <Flex>
                <ChakraImage
                  src={`http://localhost:3333/files/${path}`}
                  width={150}
                  height={150}
                />
                <Flex
                  direction="column"
                  width={306}
                  ml="4"
                  borderRight="1px"
                  borderColor="#c0c0c0"
                >
                  <Flex>
                    <Text color="#c14d19" fontSize={15}>
                      {dishName}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text color="#f29c46" fontSize={15}>
                      {portion}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text maxWidth="300px" fontSize={15} mt="1" mr="2">
                      {description}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text color="#72bc54">{"R$" + price}</Text>
                  </Flex>
                </Flex>
              </Flex>
            )}

            <Flex align="center">
              <Stack spacing={1} p="1">
                <Button onClick={editItem}>
                  <Icon as={RiEdit2Fill} color="#f29c46" fontSize={25} />
                </Button>
                <Button onClick={removeItemModal}>
                  <Icon as={RiDeleteBinFill} color="#f29c46" fontSize={25} />
                </Button>
              </Stack>
            </Flex>
          </Flex>
        ) : (
          <Flex
            direction="column"
            bgColor="#efefef"
            p="2"
            m={2}
            borderRadius={8}
            w="100%"
          >
            <Flex direction="column">
              <Flex justify="space-around" mx="4" align="center">
                {disabledItem ? (
                  <ChakraImage
                    mt={2}
                    src={`http://localhost:3333/files/${path}`}
                    width="80px"
                    height="80px"
                    style={{ opacity: 0.3 }}
                  />
                ) : (
                  <ChakraImage
                    mt={2}
                    src={`http://localhost:3333/files/${path}`}
                    width="80px"
                    height="80px"
                  />
                )}

                <Flex direction="column" p={1}>
                  <Text color="#c14d19">{dishName}</Text>
                  <Text mt="2" color="#f29c46">
                    {portion}
                  </Text>
                </Flex>
              </Flex>

              <Flex mt={4}>
                <Text align="center" mx={2}>
                  {description}
                </Text>
              </Flex>
            </Flex>

            <Flex justify="end" mt={3} borderBottom="1px" borderColor="#c0c0c0">
              <Text color="#72bc54">{"R$" + price}</Text>
            </Flex>

            <Flex justify="center">
              <HStack spacing={1} p="1">
                <Button onClick={editItem}>
                  <Icon as={RiEdit2Fill} color="#f29c46" fontSize={25} />
                </Button>
                <Button onClick={removeItemModal}>
                  <Icon as={RiDeleteBinFill} color="#f29c46" fontSize={25} />
                </Button>
              </HStack>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
