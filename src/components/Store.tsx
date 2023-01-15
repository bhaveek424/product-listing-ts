import {
  Box,
  Button,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverFooter,
  Tag,
} from '@chakra-ui/react';

import { useState } from 'react';

import storeItems from '../data/items.json';
import { BrandFilter } from '../filters/BrandFilter';
import { GenderFilter } from '../filters/GenderFilter';
import { SizeFilter } from '../filters/SizeFilter';
import { SortBy } from '../filters/SortBy';

import { StoreItem } from './StoreItem';

export function Store() {
  const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');
  const [sizeFilter, setSizeFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');

  function filterByGender(data: any[], gender: string) {
    if (gender === 'All') {
      return data;
    } else {
      return data.filter((item) => item.gender === gender);
    }
  }
  function filterByBrand(data: any[], brand: string) {
    if (brand === 'All') {
      return data;
    } else {
      return data.filter((item) => item.brand === brand);
    }
  }
  function filterBySize(data: any[], size: string) {
    if (size === 'All') {
      return data;
    } else {
      return data.filter((item) => item.size === size);
    }
  }

  const filteredProducts = filterBySize(storeItems, sizeFilter);

  const sortedProducts = sortData(filteredProducts, sortCriteria);
  function sortData(data: any[], criteria: any) {
    switch (criteria) {
      case 'priceLowToHigh':
        return data.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return data.sort((a, b) => b.price - a.price);

      default:
        return data;
    }
  }

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
    sortData(filteredProducts, criteria);
  };

  const handleSize = (size: string) => {
    setSizeFilter(size);
  };
  const handleBrand = (brand: string) => {
    setBrandFilter(brand);
  };
  const handleGender = (gender: string) => {
    setGenderFilter(gender);
  };

  return (
    <>
      <Flex>
        {/**Sort By feature */}
        <SortBy onSort={handleSort} />
        {/**Size Filter */}
        <Grid paddingX="4" paddingY="4">
          <SizeFilter onSizeFilter={handleSize} />
          {sizeFilter && sizeFilter !== 'All' ? (
            <Tag
              size="md"
              mr={2}
              mt={2}
              justifyContent="center"
              colorScheme="yellow">
              Size: {sizeFilter}
            </Tag>
          ) : null}
        </Grid>
        {/**Brand Filter */}
        <Grid paddingX="4" paddingY="4">
          <BrandFilter onBrandFilter={handleBrand} />
          {brandFilter && brandFilter !== 'All' ? (
            <Tag
              size="md"
              mr={2}
              mt={2}
              justifyContent="center"
              colorScheme="yellow">
              {brandFilter}
            </Tag>
          ) : null}
        </Grid>
        {/*Gender filter */}
        <Grid paddingX="4" paddingY="4">
          <GenderFilter onGenderFilter={handleGender} />
          {genderFilter && genderFilter !== 'All' ? (
            <Tag
              size="md"
              mr={2}
              mt={2}
              justifyContent="center"
              colorScheme="yellow">
              {genderFilter}
            </Tag>
          ) : null}
        </Grid>
        {/*Clear All filters */}
        {sizeFilter !== 'All' ||
        genderFilter !== 'All' ||
        brandFilter !== 'All' ? (
          <Grid paddingX="4" paddingY="4">
            <Button
              colorScheme="red"
              onClick={() => {
                setSortCriteria('priceLowToHigh');
                setSizeFilter('All');
                setBrandFilter('All');
                setGenderFilter('All');
              }}>
              Clear all filters
            </Button>
          </Grid>
        ) : null}
      </Flex>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={6}>
        {filteredProducts
          .filter((item) => sizeFilter === 'All' || item.size === sizeFilter)
          .filter((item) => brandFilter === 'All' || item.brand === brandFilter)
          .filter(
            (item) => genderFilter === 'All' || item.idealFor === genderFilter,
          )
          .map((item) => (
            <Box key={item.id}>
              <StoreItem {...item} />
            </Box>
          ))}
      </Grid>
    </>
  );
}
