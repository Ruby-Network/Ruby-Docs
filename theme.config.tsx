import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Ruby Docs</span>,

  head: (
    <React.Fragment>
      <link rel="icon" type="image/png" href="./favicon.png" />
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
  
  
};

export default config;
