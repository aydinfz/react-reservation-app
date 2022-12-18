import React from 'react'
import { Checkbox } from '@chakra-ui/react';

export function Services({food}) {
  return (
    <Checkbox size="sm" colorScheme="teal" >
      {food}
    </Checkbox>
  );
}
