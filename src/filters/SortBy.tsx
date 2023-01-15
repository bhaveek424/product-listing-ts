import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
} from '@chakra-ui/react';
import { useState } from 'react';

type SortByProps = {
  onSort: (criteria: string) => void;
};

export function SortBy({ onSort }: SortByProps) {
  const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
    onSort(criteria);
  };

  return (
    <Popover>
      <Menu>
        <MenuButton>
          <Button mr={2}>Sort By</Button>
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => handleSort('priceLowToHigh')}>
            Price: Low to High
          </MenuItem>

          <MenuItem onClick={() => handleSort('priceHighToLow')}>
            Price: High to Low
          </MenuItem>
        </MenuList>
      </Menu>
    </Popover>
  );
}
