// TODO: Create one source of truth for mock API
const comments = [
  {
    id: 0,
    author: {
      name: 'Nicholas Kennedy',
      avatar: '/static/images/avatar_001.jpg'
    },
    description: 'Simply dummy text of the printing and typesetting industry.',
    datePublished: '4 hours ago',
    children: [
      {
        id: 1,
        author: {
          name: 'Mildred Silva',
          avatar: '/static/images/avatar_002.jpg'
        },
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.',
        datePublished: 'An hour ago'
      },
      {
        id: 2,
        author: {
          name: 'Anthony Bryant',
          avatar: '/static/images/avatar_003.jpg'
        },
        description: 'Sometimes by accident, sometimes on purpose (injected humour and the like).',
        datePublished: '3 minutes ago'
      }
    ]
  },
  {
    id: 3,
    author: {
      name: 'Victoria Banks',
      avatar: '/static/images/avatar_004.jpg'
    },
    description: 'All the Lorem Ipsum generators.',
    datePublished: '3 days ago'
  }
]

export default comments
