import Glossary from 'components/pages/doc-page/glossary';
import { HeadingLandmark } from 'components/shared/heading';
import { Link } from 'gatsby';
import React from 'react';

const links = [
  {
    title: 'Browser',
    url: '/javascript-api/k6-browser/browser/',
  },
  {
    title: 'BrowserContext',
    url: '/javascript-api/k6-browser/browsercontext/',
  },
  {
    title: 'BrowserType',
    url: '/javascript-api/k6-browser/browsertype/',
  },
  {
    title: 'ElementHandle',
    url: '/javascript-api/k6-browser/elementhandle/',
  },
  {
    title: 'Frame',
    url: '/javascript-api/k6-browser/frame/',
  },
  {
    title: 'JSHandle',
    url: '/javascript-api/k6-browser/jshandle',
  },
  {
    title: 'Keyboard',
    url: '/javascript-api/k6-browser/keyboard',
  },
  {
    title: 'Locator',
    url: '/javascript-api/k6-browser/locator',
  },
  {
    title: 'Mouse',
    url: '/javascript-api/k6-browser/mouse/',
  },
  {
    title: 'Page',
    url: '/javascript-api/k6-browser/page/',
  },
  {
    title: 'Request',
    url: '/javascript-api/k6-browser/request/',
  },
  {
    title: 'Response',
    url: '/javascript-api/k6-browser/response/',
  },
  {
    title: 'Touchscreen',
    url: '/javascript-api/k6-browser/touchscreen/',
  },
];

const BrowserClassList = () => {
  const Wrapper = HeadingLandmark('h3');

  return (
    <>
      <Wrapper>Browser-level APIs</Wrapper>
      <Glossary>
        <ul>
          {links.map(({ title, url }) => (
            <li key={title}>
              <Link to={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </Glossary>
    </>
  );
};
export default BrowserClassList;
