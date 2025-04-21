// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'LLMOps 実践',
      items: [
        'llmops/langsmith-evaluation',
        'llmops/rft-custom-pipeline',
        'llmops/multi-agent-orchestration',
      ],
    },
    {
      type: 'category',
      label: 'MCP 設計',
      items: [
        'mcp/mcp-core-setup',
        'mcp/tool-definition-bestpractices',
        'mcp/intent-classifier-design',
      ],
    },
    {
      type: 'category',
      label: 'Discovery API 仕様',
      items: [
        'discovery/dynamic-discovery-protocol',
        'discovery/registry-handshake-spec',
      ],
    },
    {
      type: 'category',
      label: 'Dev Infrastructure',
      items: ['devinfra/github-actions-advanced'],
    },
  ],
};
