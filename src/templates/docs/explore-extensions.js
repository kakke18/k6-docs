import { ExtensionsList } from 'components/pages/doc-extensions/extensions-list';
import { ExtensionsTitleGroup } from 'components/pages/doc-extensions/extensions-title-group';
import { SEO } from 'components/shared/seo';
import docPageContent from 'components/templates/doc-page/doc-page-content/doc-page-content.module.scss';
import LocaleProvider from 'contexts/locale-provider';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useScrollToAnchor } from 'hooks';
import { DocLayout } from 'layouts/doc-layout';
import queryString from 'query-string';
import React from 'react';
import SeoMetaData from 'utils/seo-metadata';

import Blockquote from '../../components/shared/blockquote';

const breadcrumbs = [
  {
    name: 'Extensions',
    path: '/extensions/',
  },
  {
    name: 'Getting started',
    path: '/extensions/get-started/',
  },
  {
    name: 'Explore',
    path: '/extensions/get-started/explore/',
  },
];

const ExploreExtensionsPage = ({
  location,
  pageContext: { sidebarTree, navLinks },
}) => {
  useScrollToAnchor();

  const queryParams = queryString.parse(location.search);
  const category = queryParams?.category || 'All';

  const {
    docExtensionsJson: { extensionsList },
  } = useStaticQuery(graphql`
    query exploreExtensionsData {
      docExtensionsJson {
        extensionsList: extensions {
          name
          description
          url
          logo
          official
          categories
          type
          author {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <LocaleProvider>
      <DocLayout
        sidebarTree={sidebarTree}
        navLinks={navLinks}
        sectionName="Extensions"
      >
        <ExtensionsTitleGroup
          title={'Explore'}
          description={
            'Discover the extensions available to meet your specific needs.'
          }
          className="container"
          breadcrumbs={breadcrumbs}
        />
        <div className={docPageContent.inner}>
          <Blockquote mod="attention" title="Looking for Feedback">
            Help us improve extensions by completing this{' '}
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSeL1RdxAyaoznGKLAdlMa5sLmVWoytpxRCZZVzBeFGSyqGI6A/viewform"
              className="link"
            >
              short survey
            </Link>
            .
          </Blockquote>
          <p>
            With over 50 available extensions, the k6 extension ecosystem has
            many options to meet your requirements and help you incorporate new
            protocol access, embed a particular client, or improve your test
            performance. Extensions are developed both by the k6 developers and
            by the open-source developer community.
          </p>

          <p>
            Use the table to explore the many extensions. Questions? Feel free
            to join the discussion about extensions in the{' '}
            <Link
              className={docPageContent.link}
              to={'https://community.k6.io/c/extensions/'}
            >
              k6 Community Forum
            </Link>
            .
          </p>

          <p>
            <ExtensionsList category={category} data={extensionsList} />
          </p>

          <p>
            Ready to create your bespoke k6 binary? Head over to the{' '}
            <Link
              className={docPageContent.link}
              to={'/extensions/get-started/bundle/'}
            >
              bundle builder
            </Link>{' '}
            to generate a command!
          </p>
        </div>
      </DocLayout>
    </LocaleProvider>
  );
};

export default ExploreExtensionsPage;

export const Head = ({ pageContext: { version } }) => (
  <SEO version={version} {...SeoMetaData['explore-extensions']} />
);
