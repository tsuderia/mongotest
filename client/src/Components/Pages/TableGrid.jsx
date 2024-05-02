import { useEffect, useState } from "react";
import axios from "../../axios.js";
import AddButton from '../AddButton.jsx'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
} from "@chakra-ui/react";

const TableGrid = () => {
  const [transaction, setTransaction] = useState([]);
  const fetchTransactions = async () => {
    const res = await axios.get("/api/getAll");
    console.log(res.data.transaction);
    setTransaction(res.data.transaction);
  };
  // useEffect)
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <Box display='flex' justifyContent='end'>
        <AddButton/>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transaction?.map((data) => (
              <Tr key={data?._id}>
                <Td>{data.transactionName}</Td>
                <Td>{data.transactionType}</Td>
                <Td>{data.transactionCategory}</Td>
                <Td isNumeric>{data.transactionAmount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableGrid;
