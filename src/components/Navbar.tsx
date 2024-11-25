import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.600" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo de la Marca */}
        <Box fontWeight="bold" fontSize="lg">
          <Link to="/">MiAplicación</Link>
        </Box>

        {/* Menú para Pantallas Grandes */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button as={Link} to="/" variant="link">
            Home
          </Button>
          <Button as={Link} to="/project" variant="link">
            Proyecto
          </Button>
          <Button as={Link} to="/contact" variant="link">
            Contacto
          </Button>
          <Button as={Link} to="/services" variant="link">
            Servicios
          </Button>
        </HStack>

        {/* Botón para Menú Móvil */}
        <IconButton
          aria-label="Abrir Menú"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      {/* Menú Móvil */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing={4} mt={4}>
              <Button as={Link} to="/" variant="link" onClick={onClose}>
                Home
              </Button>
              <Button as={Link} to="/project" variant="link" onClick={onClose}>
                Proyecto
              </Button>
              <Button as={Link} to="/contact" variant="link" onClick={onClose}>
                Contacto
              </Button>
              <Button as={Link} to="/services" variant="link" onClick={onClose}>
                Servicios
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
