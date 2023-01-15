import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { MdBuild, MdShoppingCart } from 'react-icons/md';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const { openCart, cartQty, closeCart } = useShoppingCart();
  return (
    <Flex as="header" backgroundColor="blue.500" w="100%" zIndex={1} h="56px">
      <Box textColor="white" fontSize="2xl" paddingY="3" paddingX="9">
        Flipkart
      </Box>

      <Box
        marginLeft={'auto'}
        marginRight={'36'}
        position="relative"
        onClick={openCart}>
        <IconButton
          aria-label="cart"
          icon={<MdShoppingCart />}
          marginTop="2"
          colorScheme="yellow"
        />
        {cartQty !== 0 ? (
          <Box
            h="1.3rem"
            w="1.3rem"
            position="absolute"
            rounded="full"
            justifyContent="center"
            display="flex"
            textColor="white"
            top={0.5}
            right={-2}
            bg="red.500">
            {cartQty}
          </Box>
        ) : null}
      </Box>
    </Flex>
  );
}
