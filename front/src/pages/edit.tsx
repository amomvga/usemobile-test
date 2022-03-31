import {
  Button,
  Flex,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Image as ChakraImage,
  useBreakpointValue,
} from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { RiArrowLeftLine, RiShoppingBag2Line } from "react-icons/ri";
import { api } from "../services/api";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function edit() {
  const [image, setImage] = useState<any>();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategorie] = useState("");
  const [portions, setPortion] = useState("");
  const [disponibility, setDisponibility] = useState("");
  const [checkButton, setCheckButton] = useState(true);

  const { query } = useRouter();

  useEffect(() => {
    if (
      !(
        name === "" ||
        description === "" ||
        price === "" ||
        categories === "" ||
        portions === "" ||
        disponibility === ""
      )
    ) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [image, name, description, price, categories, portions, disponibility]);

  useEffect(() => {
    if (query.id) {
      api.get(`/itens/${query.id}`).then((response) => {
        const {
          name,
          description,
          price,
          categories,
          portions,
          disponibility,
          img,
        } = response.data[0];

        setName(name);
        setDescription(description);
        setPrice(price);
        setCategorie(categories);
        setPortion(portions);
        setDisponibility(disponibility);
        setImg(img);
      });
    }
  }, [query]);

  async function handlEditItem(event: FormEvent) {
    event.preventDefault();
    const formatData = new FormData();

    if (image != undefined) {
      formatData.append("image", image);
      formatData.append("name", name);
      formatData.append("description", description);
      formatData.append("price", price);
      formatData.append("categories", categories);
      formatData.append("portions", portions);
      formatData.append("disponibility", disponibility);
    } else {
      formatData.append("name", name);
      formatData.append("description", description);
      formatData.append("price", price);
      formatData.append("categories", categories);
      formatData.append("portions", portions);
      formatData.append("disponibility", disponibility);
    }

    await api.put(`/itens/${Number(query.id)}`, formatData);
  }

  function changePath() {
    setTimeout(() => {
      Router.push("/");
    }, 300);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction="column" w="100%" maxWidth={1480} mx="auto">
      <Header />

      <Flex w="100%" mt={4} align="center">
        <Flex ml={2}>
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftLine} fontSize={["25px", "30px"]} />
            </a>
          </Link>
        </Flex>

        <Flex w="98%" justify="center" align="center">
          {isWideVersion ? <Icon as={RiShoppingBag2Line} fontSize="25" /> : ""}

          <Text ml="2">Cadastrar produto</Text>
        </Flex>
      </Flex>

      <Flex as="form" w="100%" p="6" onSubmit={handlEditItem}>
        <Flex direction="column" w="100%" align="center">
          <Flex direction="column">
            <Stack spacing={4}>
              <Flex direction="column" w={["270px", "100%"]}>
                <Stack spacing={4}>
                  <Text>Escolha uma imagem:</Text>
                  <input
                    type="file"
                    name="image"
                    onChange={(e: any) => setImage(e.target.files[0])}
                  />
                  <Flex>
                    {image ? (
                      <Image
                        src={URL.createObjectURL(image)}
                        width={150}
                        height={150}
                      />
                    ) : (
                      <ChakraImage
                        src={`http://localhost:3333/files/${img}`}
                        width={150}
                        height={150}
                      />
                    )}
                  </Flex>
                </Stack>
              </Flex>

              <Input
                name="name"
                placeholder="Nome do produto"
                w={[250, 400, 600]}
                h={["40px", "50px"]}
                value={name}
                maxLength={34}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                name="description"
                placeholder="Descrição"
                w={[250, 400, 600]}
                h={["40px", "50px"]}
                value={description}
                maxLength={120}
                onChange={(event) => setDescription(event.target.value)}
              />
              <Input
                name="price"
                type="number"
                placeholder="Valor (R$)"
                w={[250, 400, 600]}
                h={["40px", "50px"]}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />

              <Select
                name="categories"
                placeholder="Categoria"
                border="2px"
                borderColor="orange.300"
                focusBorderColor="orange.300"
                w={[250, 400, 600]}
                h={["40px", "50px"]}
                value={categories}
                onChange={(event) => setCategorie(event.target.value)}
              >
                <option value="3">Prato completo</option>
                <option value="1">Sobremesa</option>
                <option value="2">Bebida</option>
                <option value="4">Acompanhamento</option>
              </Select>

              <Text>Para quantas pessoas?</Text>

              <RadioGroup
                name="portions"
                value={portions}
                onChange={setPortion}
              >
                <Stack>
                  <Radio colorScheme="orange" value="Serve 1 pessoa">
                    Serve 1 pessoa
                  </Radio>
                  <Radio colorScheme="orange" value="Serve 2 pessoa">
                    Serve 2 pessoa
                  </Radio>
                  <Radio colorScheme="orange" value="Família - até 4 pessoas">
                    Família - até 4 pessoas
                  </Radio>
                </Stack>
              </RadioGroup>

              <Text>Disponibilidade do produto para o público</Text>

              <RadioGroup
                name="disponibility"
                value={disponibility}
                onChange={setDisponibility}
              >
                <Stack>
                  <Radio colorScheme="orange" value="Produto disponível">
                    Produto disponível
                  </Radio>
                  <Radio colorScheme="orange" value="Produto não disponível">
                    Produto não disponível
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </Flex>

          <Button
            type="submit"
            mt="60px"
            size={"md"}
            colorScheme="orange"
            disabled={checkButton}
            onClick={changePath}
          >
            Salvar alterações
          </Button>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
