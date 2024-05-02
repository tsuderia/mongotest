import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
} from "@chakra-ui/react";
import AddButton from "../AddButton.jsx";

const AddTransactionForm = () => {
  return (
    <>
    <VStack spacing='20px'>
    <FormControl isRequired>
      <FormLabel>Transaction Name</FormLabel>
        <Input type="text" />
      <FormHelperText>Type Transaction Information</FormHelperText>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Transaction Type</FormLabel>
        <Input type="text" />
      <FormHelperText>Select Transaction Type</FormHelperText>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Transaction Category</FormLabel>
        <Input type="text" />
      <FormHelperText>Select Transaction Category</FormHelperText>
    </FormControl>
    <FormControl isRequired>
      <FormLabel>Transaction Amount</FormLabel>
        <Input type="number" />
      <FormHelperText>Input Transaction Amount</FormHelperText>
    </FormControl>
    </VStack>
    </>
    
  );
};

export default AddTransactionForm;
