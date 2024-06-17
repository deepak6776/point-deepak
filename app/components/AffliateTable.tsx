"use client";
import { PencilIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
// import {
//   Typography,
//   CardBody,
//   CardFooter,
//   Avatar,
//   IconButton,
//   Button,
// } from "@material-tailwind/react";
import truncate from "truncate";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchForm from "@/app/components/SearchForm";
import { Avatar, Button, CardBody, CardFooter, Flex, Heading, IconButton, Skeleton, Table, TableContainer, Tbody, Td, Thead, Tr, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  price: {
    mrp: number;
    salePrice: number;
    saleOff: number;
  };
  category: string;
  quantity: number;
}

const formatPrice = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(amount);
};

const TABLE_HEAD = [
  "Product",
  "MRP",
  "Sale Price",
  "Quantity",
  "Category",
  "Edit",
];

interface Props {
  products: Product[];
  currentPageNo: number;
  hasMore?: boolean;
  showPageNavigator?: boolean;
}

export default function AffliateTable(props: Props) {
  const router = useRouter();

  const {
    products = [],
    currentPageNo,
    hasMore,
    showPageNavigator = true,
  } = props;

  const handleOnPrevPress = () => {
    const prevPage = currentPageNo - 1;
    if (prevPage > 0) router.push(`/products?page=${prevPage}`);
  };

  const handleOnNextPress = () => {
    const nextPage = currentPageNo + 1;
    router.push(`/products?page=${nextPage}`);
  };


  const items = [
    { title: "Atlassian Design System", category: "Design Guidelines", model: "free", id: 1 },
    { title: "Ant Design System", category: "Design Guidelines", model: "free", id: 2 },
    { title: "Fluid Design System", category: "Design Guidelines", model: "free", id: 3 },
    { title: "Apple Design System", category: "Design Guidelines", model: "free", id: 4 }
  ]




  return (
    <Flex height='100vh' width="80%" ml='auto' p='32px' direction="column" gap="20px">
      <Flex width="100%" height="max-content" alignItems="center">
      <Text mr="auto">Alliate List</Text>
      <SearchForm />
        <Link href="affliate/create">
          <Button>Add Item</Button>
        </Link>
      </Flex>
      <TableContainer >
        <Table>
          <Thead>
            <Tr>
              {TABLE_HEAD.map((head) => (<th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Text>
                  {head}
                </Text>
              </th>
              ))}
            </Tr>
          </Thead>
          {/* <Thead>
            <Tr fontWeight="500" bgColor="gray.200">
              <Th>S.No</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Model</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead> */}
          <Tbody>
            {items.map((item) => {
              return <Tr mb='5px' key={item.id}>
                <Td>
                  <Skeleton isLoaded={true} >{item.id}</Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={true}>{item.title}</Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={true}>{item.category}</Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={true}>{item.model}</Skeleton>
                </Td>
                <Td>
                  <Skeleton>
                    <Link href={`/affliate/update/${item.id}`}>
                      <IconButton bgColor="white" aria-label="edit" icon={<EditIcon />} />
                    </Link>
                  </Skeleton>
                </Td>
              </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>
      
    </Flex>
  );
}

