import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
} from '@chakra-ui/react';
import { useState } from 'react';

type SizeFilterProps = {
  onSizeFilter: (size: string) => void;
};
export function SizeFilter({ onSizeFilter }: SizeFilterProps) {
  const [sizeFilter, setSizeFilter] = useState('All');

  const handleSize = (size: string) => {
    setSizeFilter(size);
    onSizeFilter(size);
  };

  return (
    <Popover>
      <Menu>
        <MenuButton>
          <Box>
            <Button mr={2}>Size</Button>
          </Box>
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => handleSize('All')}>All</MenuItem>
          <MenuItem onClick={() => handleSize('S')}>S</MenuItem>
          <MenuItem onClick={() => handleSize('M')}>M</MenuItem>
          <MenuItem onClick={() => handleSize('L')}>L</MenuItem>
          <MenuItem onClick={() => handleSize('XL')}>XL</MenuItem>
        </MenuList>
      </Menu>
    </Popover>
  );
}
