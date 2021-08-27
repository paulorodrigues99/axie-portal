import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [instagram, setInstagram] = useState("");
  let sucessMessage = true;
  const handleFormInput = async (event) => {
    event.preventDefault();
    console.log("CHegou");
    const msg = `${email}|${telefone}|${cidade}|${estado}|${instagram}`;
    try {
      axios.get(
        `https://api.telegram.org/bot1907611009:AAHd_RN1HrYDaGHB0FNUohHcL_4vkQbiTw8/sendMessage?chat_id=-432866452&text=${msg}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        as="section"
        maxW="1440px"
        py="4"
        px={[4, 6, 10, 14, 20]}
        mx="auto"
        display="flex"
        flexDir={{ base: "column-reverse", lg: "column" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        textAlign={{ base: "center", lg: "left" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <form onReset onSubmit={handleFormInput}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="city">
            <FormLabel>Cidade</FormLabel>
            <Input
              onChange={(event) => setCidade(event.target.value)}
              type="text"
            />
          </FormControl>
          <FormControl id="state">
            <FormLabel>Estado</FormLabel>
            <Input
              onChange={(event) => setEstado(event.target.value)}
              type="text"
            />
          </FormControl>
          <FormControl id="instagram">
            <FormLabel>Instagram</FormLabel>
            <Input
              onChange={(event) => setInstagram(event.target.value)}
              type="text"
            />
          </FormControl>
          <FormControl id="cellphone">
            <FormLabel>Telefone</FormLabel>
            <Input
              onChange={(event) => setTelefone(event.target.value)}
              type="text"
            />
          </FormControl>
          <br></br>
          <Button type="submit">Enviar</Button>
        </form>
        <br></br>
        <Stack spacing={3}>
          <Button >
            <Link href="https://t.me/joinchat/d5-tSUIpOZ0yNGQx">
              Quero entrar no grupo do telegram
            </Link>
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default SignInPage;
