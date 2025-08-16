import { GitHub, Linkedin, Twitter } from 'react-feather';
import Coop from '../components/Coop/Coop';
import Gallery from '../components/Gallery/Gallery';
import HexGrid from '../components/HexGrid/HexGrid';
import * as styles from './page.css';
import Image from 'next/image';
import portrait from '../images/portrait-ott.jpg';
import { Metadata } from 'next';
import Layout from '../components/Layout/Layout';

const Portrait = () => {
  return (
    <Image
      width={466}
      height={466}
      src={portrait}
      className={styles.portrait}
      alt="Ott Tooming"
      priority={true}
    />
  );
};

const Hero = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.hero}>{children}</div>;
};

const AltGrid = ({ children }: React.PropsWithChildren) => (
  <div className={styles.altGrid}>{children}</div>
);

const OutLink = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => (
  <a
    className={styles.outLink}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

const SocialIcon = ({ children }: React.PropsWithChildren) => (
  <span className={styles.socialIcon}>{children}</span>
);

export const metadata: Metadata = {
  title: 'Home | Personal portfolio - Ott',
};

const IndexPage = () => (
  <Layout.Breakout as="main" layout="grid">
    <section className={styles.segment}>
      <Hero>
        <div>
          <h1>
            👋 Hi, I am <strong>Ott</strong>
          </h1>

          <h3>
            Front-end developer/<strong>student</strong>
          </h3>

          <div style={{ marginTop: '24px' }}>
            <OutLink href="https://github.com/otttooming">
              <SocialIcon>
                <GitHub size="20" />
              </SocialIcon>
              <strong>github.com</strong>/otttooming
            </OutLink>
          </div>

          <div style={{ marginTop: '4px' }}>
            <OutLink href="https://www.linkedin.com/in/otttooming/">
              <SocialIcon>
                <Linkedin size="16" />
              </SocialIcon>
              <strong>linkedin.com</strong>/in/otttooming
            </OutLink>
          </div>

          <div style={{ marginTop: '4px' }}>
            <OutLink href="https://twitter.com/otttooming">
              <SocialIcon>
                <Twitter size="16" />
              </SocialIcon>
              <strong>twitter.com</strong>/otttooming
            </OutLink>
          </div>
        </div>

        <Portrait />
      </Hero>
    </section>

    <section className={styles.segment}>
      <header>
        <h2>
          <em>Passions</em>
          <strong>Animal welfare</strong> and my cats and dogs specifically
        </h2>
      </header>

      <Gallery />
    </section>

    <section className={styles.segment} data-layout-breakout>
      <AltGrid>
        <HexGrid />

        <header>
          <h2>
            <em>Experience</em>
            <strong>Tech stack</strong> that I currently use
          </h2>

          <p>
            Passionate about TypeScript, React, NodeJS, GraphQL and statically
            typed languages in general.
          </p>
        </header>
      </AltGrid>
    </section>

    <section className={styles.segment}>
      <header>
        <h2>
          <em>Industry</em>
          Some <strong>amazing companies </strong> I&apos;ve worked with
        </h2>
      </header>

      <Coop />
    </section>
  </Layout.Breakout>
);

export default IndexPage;
