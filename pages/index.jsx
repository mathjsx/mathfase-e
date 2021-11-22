import PageRender from "@/components/PageRender";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import { getPathsRecurse } from "@/utils/PageUtils";
import { GetStaticProps, GetStaticPaths } from "next";
import { remarkPlugins, rehypePlugins } from "@/utils/MDXPlugins";

export default function Home() {
  return (
    <div>
    </div>
  );
}

