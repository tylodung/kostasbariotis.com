import React from 'react';
import GatsbyLink from 'gatsby-link';

import Link from '../components/Link';
import Pagination from '../components/Pagination';
import Posts from '../components/Posts';
import Separator from '../components/Separator';
import Menu from '../components/Menu';
import MetaTags from '../components/MetaTags';

export default function Pages({ pathContext }) {
  const { posts, page, pagesSum, prevPath, nextPath } = pathContext;
  return (
    <section className="main-content">
      <MetaTags
        title="Kostas Bariotis"
        path={`/page/${page}`}
        tags="webdev, programming, javascript"
        description="I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."
      />
      <Menu />
      <section className="blog container">
        <div className="medium-8 medium-offset-2">
          <div className="posts">
            <Pagination page={page} pagesSum={pagesSum} prevPath={prevPath} nextPath={nextPath}/>
            <Separator />
            <Posts posts={posts} />
            <Separator />
            <Pagination page={page} pagesSum={pagesSum} prevPath={prevPath} nextPath={nextPath} />
          </div>
        </div>
      </section>
    </section>
  );
}
