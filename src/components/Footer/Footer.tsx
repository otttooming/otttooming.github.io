import { Social, socialTags } from '../../constants/social';
import TagList from '../TagList/TagList';
import { footer, copyright } from './Footer.css';

const SOCIAL_PROFILES = [Social.GITHUB, Social.LINKEDIN, Social.TWITTER];

const Footer = () => {
  return (
    <footer className={footer}>
      <TagList tags={SOCIAL_PROFILES} mapping={socialTags} />

      <small>
        <span className={copyright}>©</span>
        Ott Tooming
      </small>
    </footer>
  );
};

export default Footer;
