import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6e8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/new-release-schedule',
    component: ComponentCreator('/blog/new-release-schedule', 'ccb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/release',
    component: ComponentCreator('/blog/tags/release', 'b38'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aec'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c53'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '99d'),
            routes: [
              {
                path: '/docs/guides/docgen',
                component: ComponentCreator('/docs/guides/docgen', 'e9f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/Playground/Contracts/Action',
                component: ComponentCreator('/docs/guides/Playground/Contracts/Action', '2a7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/Playground/Contracts/Contract-methods',
                component: ComponentCreator('/docs/guides/Playground/Contracts/Contract-methods', 'a6f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/Playground/Create',
                component: ComponentCreator('/docs/guides/Playground/Create', '163'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/Playground/Edit',
                component: ComponentCreator('/docs/guides/Playground/Edit', 'd11'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/Playground/Variables',
                component: ComponentCreator('/docs/guides/Playground/Variables', '3b9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/registry',
                component: ComponentCreator('/docs/guides/registry', '02a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/widget',
                component: ComponentCreator('/docs/guides/widget', '6ba'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/npm-packages',
                component: ComponentCreator('/docs/npm-packages', '820'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/overview/introduction',
                component: ComponentCreator('/docs/overview/introduction', '467'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/q-and-a/common-questions',
                component: ComponentCreator('/docs/q-and-a/common-questions', 'cb4'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
