import { Button, useDisclosure, Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const AddButton = () => {
  const [transaction, setTransaction] = useState({
    transactionName: "",
    transactionType: "",
    transactionCategory: "",
    transactionAmount: 0,
  });
  const addTransaction = async () => {
    await axios.post("/api/addTransaction/", transaction);
    setTransaction({
      transactionName: "",
      transactionType: "",
      transactionCategory: "",
      transactionAmount: 0,
    });
  };
  return (
    <Box display="flex" alignItems="end" justifyContent="end">
      <Button colorScheme="green" onClick={<Navigate to='/addTransactionForm'/>}>
        Add
      </Button>
    </Box>
  );
};
export default AddButton;
