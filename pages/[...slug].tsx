import { bundleMDX } from "mdx-bundler"
import fs from "fs"
import path from "path";
import matter from "gray-matter"

import {remarkPlugins} from "../utils/MDXPlugins"
import {rehypePlugins} from "../utils/MDXPlugins"

import Head from "next/head"
import { getMDXComponent } from "mdx-bundler/client";
import {useMemo} from "react";

export default function Page(props) {
  const Content = useMemo(() => getMDXComponent(props.code), [props.code])
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.css"
          integrity="sha384-2vkq42dvFAQl88n6UuPWLKSKnFnHyyoSgy788ohlfWZ4xEmF8g0kCMZe1CkaXHDd"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content={`${props.data.desc || props.data.title}`}
        />
      </Head>
      <h1>{props.data.title}</h1>
      <Content/>
    </>
  )
}

export async function getStaticPaths() {
  //
  const allFiles = getPathsRecurse("pages", []).map((file) => {
    const fileAsArray = file.split("/")
    return fileAsArray;
  })

  const paths = allFiles
    .filter((path) => /\.mdx$/.test(path[path.length - 1]))
    .map((path) => {
      path.splice(0, 1);
      path[path.length - 1] = path[path.length - 1].replace(/\.mdx$/, "");
      if (path[path.length - 1] === "index") {
        path.pop();
      }
      return {
        params: {
          slug: path,
        }
      }
    })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  var slug: string[];

  if (typeof params.slug === "string") {
    slug = [params.slug];
  } else {
    slug = params.slug;
  }

  var pagePath;
  if (slug === undefined) {
    pagePath = "pages/index";
  } else {
    pagePath = `pages${slug.map((str) => `/${str}`).join("")}`;
    if (fs.existsSync(pagePath) && fs.statSync(pagePath).isDirectory()) {
      pagePath += "/index";
    }
  }
  pagePath += ".mdx";

  const source = fs.readFileSync(pagePath)
  const { content, data } = matter(source);

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  // Esbuild has to be manually told
  // where to be pointed
  // because Next JS breaks stuff
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const PAGES_PATH = path.join(process.cwd(), "pages");

  
  const { code } = await bundleMDX({
    source: content,
    cwd: PAGES_PATH,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];
      return options;
    }
  });
  return {
    props: {
      code,
      data
    }
  };
}

// helpers

export const getPathsRecurse = (dir: string, arrayOfFiles: string[]) => {
  const files = fs.readdirSync(dir);
  arrayOfFiles = arrayOfFiles || []; // Set to empty array if defined
  files.forEach(function (file) {
    if (fs.statSync(dir + "/" + file).isDirectory()) {
      arrayOfFiles = getPathsRecurse(dir + "/" + file, arrayOfFiles);

    } else {
      arrayOfFiles.push(path.join(dir, "/", file));

    }
  });
  return arrayOfFiles;
}
