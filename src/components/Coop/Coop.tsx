import {
  Box,
  type BoxProps,
  Link as ChakraLink,
  type LinkProps,
} from '@chakra-ui/react';
import { Gtap, Iglu, Pipedrive, Voog } from '../Logo/CompanyLogos';

const Company: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box as="li" {...restProps} />;
};

const Link: React.FC<LinkProps> = ({ ...restProps }) => {
  return (
    <ChakraLink
      height="128px"
      mx="16px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    />
  );
};

const Card: React.FC<BoxProps> = ({ ...restProps }) => {
  return <Box width="200px" maxHeight="100%" {...restProps} />;
};

const Coop: React.FC = () => {
  return (
    <Box
      as="ol"
      display="flex"
      justifyContent="center"
      flexDirection="row-reverse"
      flexWrap="wrap"
      listStyleType="none"
      mt="64px"
    >
      <Company>
        <Link href="https://play.ee/">
          <Card as={Gtap} maxWidth="250px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.voog.com/">
          <Card as={Voog} maxWidth="150px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.iglu.ee/">
          <Card as={Iglu} maxWidth="150px" />
        </Link>
      </Company>

      <Company>
        <Link href="https://www.pipedrive.com/">
          <Card as={Pipedrive} maxWidth="250px" />
        </Link>
      </Company>
    </Box>
  );
};

export default Coop;
