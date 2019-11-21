export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd614e87341be3433cd12fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zmjfssj1',
                  apiId: 'd658aa5d-3d07-461e-a2a7-a34a09494674'
                },
                {
                  buildHookId: '5dd614e8b9f1d1cc5fc8c313',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-x15wsbis',
                  apiId: '65f29b9d-26e6-4fe3-a6c9-15b94a28f0da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/narawichsaphimarn/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-x15wsbis.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
