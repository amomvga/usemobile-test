import { Flex, Icon, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiShoppingBag2Line } from "react-icons/ri";
import { EmptyList } from "./EmptyList";
import Link from "next/link";
import { List } from "./List";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Router from "next/router";
import { NavLink } from "./NavLink";
import { OrderBy } from "./OrderBy";
import { Pagination } from "../Form/Pagination";

interface ListItensProps {
  id: number;
  name: string;
  categories: number;
  description: string;
  price: number;
  portions: string;
  disponibility: string;
  img: string;
}

export function Menu() {
  const [nameFilter, setNameFilter] = useState<ListItensProps[]>([]);
  const [listItens, setListItens] = useState<ListItensProps[]>([]);
  const [filterList, setFilterList] = useState("");
  const [orderList, setOrderList] = useState("");
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState<any[]>([]);
  const [newSearch, setNewSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalCountOfRegistersPage, setTotalCountOfRegistersPage] = useState(0);

  useEffect(() => {
    api
      .get(
        `itens?categories=${filterList}&order=${orderList}&name=${newSearch}&page=${
          page - 1
        }&size=5`
      )
      .then((response) => {
        setListItens(response.data.rows);
        setTotalCountOfRegistersPage(response.data.count);
        setNameFilter(response.data.names);
      });
  }, [filterList, orderList, newSearch, page]);

  useEffect(() => {
    setFilterSearch(filterName);
  }, [search]);

  useEffect(() => {
    if (listItens.length === 0) {
      setPage(1);
    }
  }, [listItens]);

  var autoComplete: any[] = [];

  nameFilter.map((list) => {
    autoComplete.push({ name: list.name });
  });

  const filterName = autoComplete.filter((value) => {
    return value.name.toLocaleLowerCase().includes(search);
  });

  const maxQuantity = Number(autoComplete.length);

  async function handleClickAutoComplete(value: string) {
    setSearch(value);
    setFilterSearch([]);
    setNewSearch(value);
  }

  async function handleRemoveItem(e: number) {
    await api.delete(`itens/${e}`);
    await api.get("itens").then((response) => setListItens(response.data.rows));
    setPage(1);
  }

  function handleEditItem(e: number) {
    Router.push(`/edit?id=${e}`);
  }

  function handlefilter(value: string) {
    setFilterList(value);
  }

  function handleFilterOrder(value: string) {
    setOrderList(value);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" direction="column">
      {!isWideVersion && (
        <Flex align="center" ml="auto">
          <Flex justify="end">
            <OrderBy
              ASC={() => handleFilterOrder("ASC")}
              DESC={() => handleFilterOrder("DESC")}
            />
            <NavLink
              filterDisabled={() => handlefilter("")}
              desserts={() => handlefilter("1")}
              dishes={() => handlefilter("3")}
              drinks={() => handlefilter("2")}
              garnishes={() => handlefilter("4")}
            />
          </Flex>
        </Flex>
      )}

      {isWideVersion && (
        <NavLink
          filterDisabled={() => handlefilter("")}
          desserts={() => handlefilter("1")}
          dishes={() => handlefilter("3")}
          drinks={() => handlefilter("2")}
          garnishes={() => handlefilter("4")}
        />
      )}

      <Flex justify="space-around" mt={6} mx={6} align="center">
        {isWideVersion && (
          <Flex align="center">
            <Icon as={RiShoppingBag2Line} fontSize={["12", "15", "22"]} />
            <Text fontSize={["12", "15", "18"]} ml="2">
              Produtos Cadastrados
            </Text>
          </Flex>
        )}

        <Flex width={["500px"]} direction="column">
          <Input
            bg="#efefef"
            placeholder="Buscar na categoria"
            border="none"
            borderRadius={4}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />

          {filterSearch.length !== 0 && filterSearch.length !== maxQuantity && (
            <Flex
              justify="center"
              maxHeight={112}
              mt="41px"
              bg="#c0c0c0"
              borderRadius={4}
              p={2}
              position="absolute"
              zIndex={1}
              overflow="hidden"
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Flex ml={2} direction="column">
                {filterName.map((value, i) => (
                  <Text
                    key={i}
                    onClick={() => handleClickAutoComplete(value.name)}
                    cursor="pointer"
                  >
                    {value.name}
                  </Text>
                ))}
              </Flex>
            </Flex>
          )}
        </Flex>

        {isWideVersion && (
          <OrderBy
            ASC={() => handleFilterOrder("ASC")}
            DESC={() => handleFilterOrder("DESC")}
          />
        )}
      </Flex>

      {listItens.length > 0 ? (
        listItens.map((list) => {
          return (
            <List
              editItem={() => handleEditItem(list.id)}
              removeItemModal={() => handleRemoveItem(list.id)}
              dishName={list.name}
              description={list.description}
              portion={list.portions}
              price={list.price}
              path={list.img}
              key={list.id}
              disabled={list.disponibility}
            />
          );
        })
      ) : (
        <EmptyList />
      )}

      {listItens.length <= 2 ? <Flex minHeight={300}></Flex> : ""}

      {totalCountOfRegistersPage > 5 && (
        <Flex justify="center" mb="6">
          <Pagination
            totalCountOfRegisters={totalCountOfRegistersPage}
            currentPage={page}
            onPageChange={setPage}
          />
        </Flex>
      )}

      <Flex justify="center" mb="6">
        <Link href="/register">
          <a>
            <Flex
              align="center"
              justify="center"
              bgColor="#c14d19"
              color="gray.50"
              borderRadius={8}
              w={["160px", "250px"]}
              height={['40px', "50px"]}
              fontWeight="bold"
            >
              Cadastrar produtos
            </Flex>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}
