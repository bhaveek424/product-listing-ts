import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';

import storeItems from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Drawer
      size="sm"
      isOpen={isOpen}
      placement="right"
      onClose={closeCart}
      finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Box paddingTop="4" fontWeight="bold" fontSize="2xl">
              Total{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={closeCart}>
            Cancel
          </Button>
          <Button colorScheme="blue">Buy</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
