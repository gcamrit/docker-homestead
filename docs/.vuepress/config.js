module.exports = {
  title: 'Docker Homestead',
  description: 'Just playing around',
  base: 'docker-homestead'
  themeConfig: {
    repo: 'gcamrit/docker-homestead',
    editLinks: true,
    docsDir: 'docs',
    sidebar: [
      ['/quick-start', 'Getting Started'],
      {
        title: 'Services',
        collapsable: false,
        children: [
          ['/services/webserver', 'Webserver'],
          ['/services/playground', 'Playground'],
          ['/services/mysql', 'MySql'],
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          ['/examples/laravel', 'Laravel'],
          ['/examples/symfony', 'Symfony'],
        ]
      },
    ]
  }
}
//amrit.gc+test1234@introcept.co