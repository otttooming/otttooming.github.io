import TagList from '../../../components/TagList/TagList';
import { socialTags } from '../../../constants/social';
import { About } from './page.components';
import * as styles from './page.css';
import desk from '/public/content/about/me/desk.svg';
import Document, { frontmatter } from '/public/content/about/me/index.mdx';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className={styles.coverWrapper}>
        <Image
          className={styles.coverImage}
          src={desk}
          alt={'alt'}
          loading="lazy"
        />
      </div>

      <About.Wrapper>
        <h1>{frontmatter.title}</h1>

        <TagList tags={frontmatter.tagList} mapping={socialTags} />
      </About.Wrapper>

      <About.Wrapper>
        <Document />
      </About.Wrapper>
    </>
  );
}
