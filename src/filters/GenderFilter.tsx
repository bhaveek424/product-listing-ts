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

type GenderFilterProps = {
  onGenderFilter: (gender: string) => void;
};
export function GenderFilter({ onGenderFilter }: GenderFilterProps) {
  const [genderFilter, setGenderFilter] = useState('All');

  function handleGender(gender: string) {
    setGenderFilter(gender);
    onGenderFilter(gender);
  }

  return (
    <Popover>
      <Menu>
        <MenuButton>
          <Box>
            <Button mr={2}>Gender</Button>
          </Box>
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => handleGender('All')}>All</MenuItem>
          <MenuItem onClick={() => handleGender('Men')}>Men</MenuItem>
          <MenuItem onClick={() => handleGender('Women')}>Women</MenuItem>
        </MenuList>
      </Menu>
    </Popover>
  );
}
