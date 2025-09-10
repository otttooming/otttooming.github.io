import { socialTags } from '../../constants/social';
import TagList from '../TagList/TagList';

const TAGS = Object.keys(socialTags);

export const Socials = () => {
  return <TagList tags={TAGS} mapping={socialTags} />;
};
