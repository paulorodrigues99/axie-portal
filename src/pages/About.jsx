// Sample card from Airbnb

import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Image, Text } from "@chakra-ui/react";
import strategy from "../../public/asset/arquitetura-1.png";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function AirbnbExample() {
  const imgurl =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0d34cb32-1f72-479d-8f8c-38a7c8c5f341/arquitetura-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210827T130610Z&X-Amz-Expires=86400&X-Amz-Signature=1607f622977f9ef877a710008b8184e8ef82e5a0d41da5c6696fe43da6dbaf24&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22arquitetura-1.png%22";
  const property = {
    imageUrl: imgurl,
    imageAlt: "Rear view of modern home with pool",
    title: "Histórias de usuário",
  };
  return (
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
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>
        <Box mt="1" fontWeight="normal" as="h4" lineHeight="tight" isTruncated>
          <Heading as="h2" size="2xl">
            Jogador
          </Heading>
          <br></br>
          <List spacing={2}>
            <ListItem>
              <Text as="p">
                Eu como um usuário quero ter acesso a plataforma por meio de
                login e senha
              </Text>
            </ListItem>
            <ListItem>
              <Text as="p">Eu como um aluno desejo alugar uma conta</Text>
            </ListItem>
            <ListItem>
              <Text as="p">
                Eu como usuário quero ter disponível pra mim um status de
                aprovação do meu login no jogo.
              </Text>
            </ListItem>
            <ListItem>
              <Text as="p">
                Eu como usuário desejo ter acesso a um contrato virtual
                garantindo meus serviços
              </Text>
            </ListItem>
          </List>
          <br></br>
          <Heading as="h2" size="2xl">
            Administrador
          </Heading>
          <br></br>
          <List spacing={2}>
            <ListItem>
              Eu como um administrador quero ter acesso a plataforma por meio de
              login e senha
            </ListItem>
            <ListItem>
              Eu como usuário quero ter disponível pra mim um status de
              aprovação dos logins inscritos nas minhas contas.
            </ListItem>
            <ListItem>
              Eu como um usuário administrador quero cadastrar contas Eu como
              usuário quero ter disponível pra mim um status de aprovação do meu
              login no jogo.
            </ListItem>
            <ListItem>
              Eu como usuário administrador desejo ter acesso a um contrato
              virtual garantindo meus serviços
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default AirbnbExample;
