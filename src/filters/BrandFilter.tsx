import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
} from '@chakra-ui/react';
import { useState } from 'react';

type SizeFilterProps = {
  onBrandFilter: (criteria: string) => void;
};
export function BrandFilter({ onBrandFilter }: SizeFilterProps) {
  const [brandFilter, setBrandFilter] = useState('All');

  const handleBrand = (brand: string) => {
    setBrandFilter(brand);
    onBrandFilter(brand);
  };

  return (
    <Popover>
      <Menu>
        <MenuButton>
          <Button mr={2}>Brand</Button>
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => handleBrand('All')}>All</MenuItem>
          <MenuItem onClick={() => handleBrand('Nike')}>Nike</MenuItem>
          <MenuItem onClick={() => handleBrand('Tommy Hilfiger')}>
            Tommy Hilfiger
          </MenuItem>
          <MenuItem onClick={() => handleBrand('Adidas')}>Adidas</MenuItem>
        </MenuList>
      </Menu>
    </Popover>
  );
}
