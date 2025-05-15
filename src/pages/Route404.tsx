import * as React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/layout';

const Route404 = () => (
  <Layout>
    <SEO title="Route 404: Destination not found" description="" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default Route404;
