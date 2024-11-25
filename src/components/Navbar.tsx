import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, HStack, IconButton, useDisclosure, VStack, Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.600" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Brand Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Link to="/">MiAplicación</Link>
        </Box>

        {/* Desktop Menu */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button as={Link} to="/" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>
            Home
          </Button>
          <Button as={Link} to="/project" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>
            Proyecto
          </Button>
          <Button as={Link} to="/contact" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>
            Contacto
          </Button>
          <Button as={Link} to="/services" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>
            Servicios
          </Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          bg="blue.500"
          _hover={{ bg: 'blue.700' }}
        />
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
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
