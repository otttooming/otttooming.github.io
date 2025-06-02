import { Social, socialTags } from '../../constants/social';
import TagList from '../TagList/TagList';
import { footer, container, copyright } from './Footer.css';

const SOCIAL_PROFILES = [Social.GITHUB, Social.LINKEDIN, Social.TWITTER];

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={container}>
        <TagList tags={SOCIAL_PROFILES} mapping={socialTags} />
      </div>

      <div className={container}>
        <span className={copyright}>©</span>
        Ott Tooming
      </div>
    </footer>
  );
};

export default Footer;
