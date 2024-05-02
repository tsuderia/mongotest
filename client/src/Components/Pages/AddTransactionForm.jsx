import { VStack } from "@chakra-ui/react";
import AddButton from "../AddButton.jsx";
import InputField from "../InputField.jsx";

const AddTransactionForm = () => {
  return (
    <>
      <VStack spacing="20px">
        <InputField label='Transaction Name' description='Type Transaction Name'/>
        <InputField label='Transaction Type' description='Choose Transaction Type'/>
        <InputField label='Transaction Category' description='placeholder'/>
        <InputField label='Transaction Amount' desc='Input Transaction Amount'/>
      </VStack>
    </>
  );
};

export default AddTransactionForm;
