import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  size: string;
  brand: string;
  idealFor: string;
  imgUrl: string;
};
export function StoreItem({
  id,
  name,
  price,
  size,
  brand,
  idealFor,
  imgUrl,
}: StoreItemProps) {
  const { increaseCartQty, decreaseCartQty, getItemQty, removeFromCart } =
    useShoppingCart();
  const qty = getItemQty(id);

  return (
    <Card size="sm" maxW="sm">
      <CardBody>
        <Image
          src={imgUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{brand}</Heading>
          <Text>{name}</Text>
          <Text color="blue.600" fontSize="2xl">
            {formatCurrency(price)}
          </Text>
          <Flex gap={1}>
            <Text color="gray.600" fontStyle={'normal'}>
              Size
            </Text>
            <Text>{size}</Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Box>
            {qty === 0 ? (
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => increaseCartQty(id)}>
                Add to cart
              </Button>
            ) : (
              <Box
                gap="0.5rem"
                display="flex"
                alignItems="center"
                flexDirection="column">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.5rem">
                  <Button onClick={() => decreaseCartQty(id)}>-</Button>
                  <Box>{qty}</Box>

                  <Button onClick={() => increaseCartQty(id)}>+</Button>
                </Box>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </Box>
            )}
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
