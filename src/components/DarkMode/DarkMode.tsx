import * as React from 'react';
import { useColorMode, Button, Icon } from '@chakra-ui/core';

export interface DarkModeProps {}

const DarkMode: React.FC<DarkModeProps> = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      <Icon name="moon" />
    </Button>
  );
};

export default DarkMode;
