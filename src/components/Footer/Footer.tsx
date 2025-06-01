import { Social, socialTags } from '../../constants/social';
import TagList from '../TagList/TagList';
import { getMappedTags } from '../TagList/tagMap';
import { footer, container, copyright } from './Footer.css';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={container}>
        <TagList
          tags={getMappedTags(
            [Social.GITHUB, Social.LINKEDIN, Social.TWITTER],
            socialTags,
          )}
        />
      </div>

      <div className={container}>
        <span className={copyright}>©</span>
        Ott Tooming
      </div>
    </footer>
  );
};

export default Footer;
