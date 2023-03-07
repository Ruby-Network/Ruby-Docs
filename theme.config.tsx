import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Ruby Docs</span>,
  project: {
    link: "https://github.com/Ruby-Network/ruby-docs",
  },
  chat: {
    link: "https://discord.gg/hzCjSFQeeZ",
  },
  docsRepositoryBase: "https://github.com/Ruby-Network/ruby-docs/tree/main",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
