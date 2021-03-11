export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6049d5593b8f7e678e830115',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pdn6z3we',
                  apiId: '5c676076-dc7e-4858-b665-1121ebfe67b9'
                },
                {
                  buildHookId: '6049d559f5cc9754e6292982',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5764k4gq',
                  apiId: '397c2a26-6bd8-48c3-988a-48038aacceed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RoopaPujar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5764k4gq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
