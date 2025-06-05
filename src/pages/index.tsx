import { GitHub, Linkedin, Twitter } from 'react-feather';
import Coop from '../components/Coop/Coop';
import Gallery from '../components/Gallery/Gallery';
import HexGrid from '../components/HexGrid/HexGrid';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import { useColorMode } from '../components/ui/color-mode';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './index.css';

const Portrait = () => {
  const data = useStaticQuery(graphql`
   query PortraitImageQuery {
      placeholderImage: file(relativePath: { eq: "portrait-ott.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 466, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      className={styles.portrait}
      alt="Ott Tooming"
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
    />
  );
};

const Grid = ({ children }: React.PropsWithChildren) => {
  const { colorMode } = useColorMode();
  const style = {
    backgroundColor: colorMode === 'light' ? '#edf2f7' : '#2c3442',
  };

  return (
    <section className={styles.grid} style={style}>
      {children}
    </section>
  );
};

const AltGrid = ({ children }: React.PropsWithChildren) => (
  <div className={styles.altGrid}>{children}</div>
);

const PlainGrid = ({ children }: React.PropsWithChildren) => (
  <div className={styles.plainGrid}>{children}</div>
);

const SmallType = ({ children }: React.PropsWithChildren) => {
  const { colorMode } = useColorMode();
  return (
    <p className={styles.smallText({ mode: colorMode as 'light' | 'dark' })}>
      {children}
    </p>
  );
};

const Text = ({ children }: React.PropsWithChildren) => (
  <p className={styles.text}>{children}</p>
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="" />
    <section className={styles.mainSegment}>
      <Grid>
        <div>
          <h1 className={styles.heading}>
            👋 Hi, I am <strong>Ott</strong>
          </h1>

          <h2 className={styles.heading}>
            Front-end developer/<strong>student</strong>
          </h2>

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
      </Grid>
    </section>

    <section className={styles.segment}>
      <PlainGrid>
        <SmallType>Passions</SmallType>
        <h2 className={styles.heading}>
          <strong>Animal welfare</strong> and my cats and dogs specifically
        </h2>
      </PlainGrid>

      <Gallery />
    </section>

    <section className={styles.segment}>
      <AltGrid>
        <HexGrid />

        <div>
          <SmallType>Experience</SmallType>
          <h2 className={styles.heading}>
            <strong>Tech stack</strong> that I currently use
          </h2>

          <Text>
            Passionate about TypeScript, React, NodeJS, GraphQL and statically
            typed languages in general.
          </Text>
        </div>
      </AltGrid>
    </section>

    <section className={styles.segment}>
      <PlainGrid>
        <div style={{ textAlign: 'center' }}>
          <SmallType>Industry</SmallType>
          <h2 className={styles.heading}>
            Some <strong>amazing companies </strong> I&apos;ve worked with
          </h2>

          <Coop />
        </div>
      </PlainGrid>
    </section>
  </Layout>
);

export default IndexPage;
