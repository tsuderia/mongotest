import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

const InputField = ({label, description}) => {
  return (
      <FormControl isRequired>
        <FormLabel>{label}</FormLabel>
        <Input type='text' />
        <FormHelperText>{description}</FormHelperText>
      </FormControl>
  );
};


export default InputField
