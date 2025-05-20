import { Box, type BoxProps } from '@chakra-ui/react';
import { Social, socialTags } from '../../constants/social';
import TagList from '../TagList/TagList';
import { getMappedTags } from '../TagList/tagMap';

const Container = ({ ...restProps }: BoxProps) => (
  <Box display="flex" justifyContent="center" {...restProps} />
);

const Footer = () => {
  return (
    <Box
      as="footer"
      maxWidth="960px"
      marginTop="80px"
      marginBottom="40px"
      marginX="auto"
    >
      <Container>
        <TagList
          tags={getMappedTags(
            [Social.GITHUB, Social.LINKEDIN, Social.TWITTER],
            socialTags,
          )}
        />
      </Container>

      <Container>
        <Box as="span" transform="rotate(180deg)" mr="8px">
          ©
        </Box>
        Ott Tooming
      </Container>
    </Box>
  );
};

export default Footer;
