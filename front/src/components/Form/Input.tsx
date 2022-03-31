import {
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  return (
    <FormControl>
      <ChakraInput
        id={name}
        name={name}
        placeholder={placeholder}
        bgColor="white"
        focusBorderColor="orange.500"
        borderColor="orange.300"
        variant="filled"
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
