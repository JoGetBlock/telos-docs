/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  // What does Telos offer and how does the EVM on top of Zero add an advantage
  devBar: [
    'overview/what-is-telos/introduction',
    'build-on-telos',
    {
      type: 'category',
      label: 'Overview',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'What is Telos',
          collapsed: true,
          items: [
            'overview/what-is-telos/evm',
            'overview/what-is-telos/zero',
            'overview/what-is-telos/token',
            {
              type: 'link',
              label: 'Roadmap',
              href: 'https://www.telos.net/roadmap',
            },
          ],
        },
        {
          type: 'category',
          label: 'Why Telos',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'overview/why-telos',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'overview/advanced',
            },
          ],
        },
        'overview/resources',
      ],
    },
    {
      type: 'category',
      label: 'Telos EVM',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'About',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'evm/about',
            },
          ],
        },
        {
          type: 'link',
          href: '/nodes/non-bp-nodes/tevmc/',
          label: 'Telos EVM Docker',
        },
        {
          type: 'category',
          label: 'Smart Contract Tutorials',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'evm/smart-contracts',
            },
          ],
        },
        {
          type: 'category',
          label: 'Indexers',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'evm/indexers',
            },
          ],
        },
        {
          type: 'category',
          label: 'Oracles',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'evm/oracles',
            },
          ],
        },
        'evm/telos-safe',
        'evm/stlos-integration',
      ],
    },
    {
      type: 'category',
      label: 'Telos Zero',
      collapsed: true,
      items: [
        'zero/telos_zero',
        {
          type: 'category',
          label: 'About',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/about',
            },
          ],
        },
        {
          type: 'category',
          label: 'Developer Environment',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/developer-environment',
            },
          ],
        },
        {
          type: 'category',
          label: 'Smart Contract Tutorials',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/smart-contract-tutorials',
            },
          ],
        },
        {
          type: 'category',
          label: 'Governance',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Telos Works',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'zero/governance/works',
                },
              ],
            },
            {
              type: 'category',
              label: 'Telos Amend',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'zero/governance/amend',
                },
              ],
            },
            {
              type: 'category',
              label: 'Telos Decide',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'zero/governance/decide',
                },
              ],
            },
            {
              type: 'category',
              label: 'Telos Login',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'zero/governance/login',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Resource Management',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/resource-management',
            },
          ],
        },
        {
          type: 'category',
          label: 'Crosschain Guide',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/crosschain',
            },
          ],
        },
        'zero/obe_multisig',
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsed: true,
      items: [
        'nodes/Nodes and Clients',
        'nodes/types-of-nodes',
        'nodes/nodeos',
        {
          type: 'category',
          label: 'Block Producing Nodes',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'nodes/bp-nodes',
            },
          ],
        },
        {
          type: 'category',
          label: 'Non Block Producing Nodes',
          collapsed: false,
          items: [
              'nodes/non-bp-nodes/run_a_telos_node',
              'nodes/non-bp-nodes/telos-evm-pre-synced-node',
              {
                type: 'category',
                label: 'Telos EVM Docker',
                collapsed: true,
                items: [
                  {
                    type: 'autogenerated',
                    dirName: 'nodes/non-bp-nodes/tevmc',
                  },
                ],
              }
          ],
        },
        'nodes/local_developer_network',
      ],
    },
    {
      type: 'category',
      label: 'Digital Assets',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Overview',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Telos Zero or EVM',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/zero-or-evm',
            },
          ],
        },
        {
          type: 'category',
          label: 'Metadata',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/metadata',
            },
          ],
        },
        {
          type: 'category',
          label: 'Artist Tools',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/artist-tools',
            },
          ],
        },
        {
          type: 'category',
          label: 'Collector Tools',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/collector-tools',
            },
          ],
        },
        {
          type: 'category',
          label: 'Digital Asset Marketplaces',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/digital-asset-marketplaces',
            },
          ],
        },
        {
          type: 'category',
          label: 'Artist Spotlight',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'digital-assets/artist-spotlight',
            },
          ],
        },
      ],
    },
  ],
 

  // ---- Community Docs ----

  userBar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'users/getting-started/README',
        'users/getting-started/setup-wallet',
        'users/getting-started/fund-your-wallet',
        'users/getting-started/bridging',
        'users/getting-started/defi-ecosystem'
      ],
    },
    {
      type: 'category',
      label: 'Knowledge Base',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'users/knowledge-base',
        },
      ],
    },
  ],
};

module.exports = sidebars;
