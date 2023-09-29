import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/style.css';
import fs from 'fs';
import matter from 'gray-matter';
import Pagination from './Pagination';


const BlogPage = ({ posts }) => {

  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (index) => {
    setPage(index);
  };

  const PaginatedPosts = posts.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <Head>
        <title>Blog | My Next.js Blog</title>
        <meta name="description" content="My Next.js Blog" />
      </Head>

      <main className={styles.main}>
        <div id="container-space-blog">
          <div className="articleList">
            {PaginatedPosts.map(({ slug, frontmatter }) => (
              <div key={slug} className="">
                <Link href={`/post/${slug}`} legacyBehaviour>
                  <a className="item">
                    <div className="thumbnail">
                      <Image
                        src={`./${frontmatter.socialImage}`}
                        alt={frontmatter.title}
                        width={650}
                        height={340}
                        priority
                      />
                      {/* <img
                        width={650}
                        height={340}
                        alt={frontmatter.title}
                        src={`./${frontmatter.socialImage}`}
                      /> */}
                    </div>
                    <h1 className="title">{frontmatter.title}</h1>
                    <p className="description">{frontmatter.description}</p>
                    <p className="date">{frontmatter.date}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <Pagination length={totalPages} callBackResult={handleClick} />
        </div>
      </main>

    </>
  );
};


export async function getStaticProps() {
  try {
    const files = fs.readdirSync('public/posts');

    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter
      };
    });

    return {
      props: { posts }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };
  }
};


export default BlogPage;
