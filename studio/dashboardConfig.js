export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6062d399a95bd3c4faf8788a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vf9p3rxn',
                  apiId: 'a43fd6fe-590a-4600-a42c-b3968ac5f861'
                },
                {
                  buildHookId: '6062d3990f34e3b430df36b5',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-y1cmwaov',
                  apiId: 'cd7dbd58-6431-417a-81df-8729e3faae78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/e-kotsiuk/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-y1cmwaov.netlify.app', category: 'apps'}
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
