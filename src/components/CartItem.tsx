import { Box, Button, Flex, Image, Stack } from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Image
        src={item.imgUrl}
        boxSize="100px"
        objectFit="cover"
        borderRadius="md"
      />
      <Box marginLeft="auto" marginRight="auto">
        <Box>
          {item.name}
          {quantity > 1 && (
            <Box color="gray.500" fontSize=".85rem">
              x{quantity}
            </Box>
          )}
        </Box>
        <Box color="gray.700">{formatCurrency(item.price)}</Box>
      </Box>

      <Box paddingLeft="9" fontSize="xl">
        {formatCurrency(item.price * quantity)}
      </Box>
      <Button
        variant="outline"
        colorScheme="red"
        size="sm"
        onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
}
