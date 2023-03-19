import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Ruby Docs</span>,

  head: (
    <React.Fragment>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </React.Fragment>
  ),
  project: {
    link: "https://github.com/Ruby-Network/ruby-docs",
  },
  chat: {
    link: "https://discord.gg/hzCjSFQeeZ",
  },
  docsRepositoryBase: "https://github.com/Ruby-Network/ruby-docs/tree/main",
  footer: {
    text: "&copy; 2021 Ruby Network",
  },

  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      description:
        frontMatter.description ||
        "Ruby Docs is a documentation for Ruby Network and its projects.",
      titleTemplate: "%s – Ruby Docs",
    };
  },
};

export default config;
