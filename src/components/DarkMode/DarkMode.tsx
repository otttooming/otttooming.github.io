import * as React from 'react';
import { useColorMode, Button, Icon } from '@chakra-ui/core';

const DarkMode: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      <Icon name="moon" />
    </Button>
  );
};

export default DarkMode;
