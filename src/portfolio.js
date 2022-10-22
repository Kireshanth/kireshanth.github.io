const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kireshanth.github.io/cleanfolio',
  title: '</Kireshanth>',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kireshanth',
  role: 'Full Stack Engineer based in the Greater Toronto Area',
  description:
    "I'm a software developer who pivoted from a professional background as a mechanical engineer. Before my switch, I was a mechanical designer in the HVAC consulting industry working on residential and commercial buildings. Prior to that, I interned as a R&D developer for a product based company. Now I'm working as a software developer at 100devs, creating fullstack web applications for clients. Outside of tech, I'm learning the piano, walking my dog or trying new places to eat!",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/kireshanth/',
    github: 'https://github.com/Kireshanth',
    twitter: 'https://twitter.com/kireshantht'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wordlé',
    description:
      'A gamified memorization tool used to assist beginners in learning French vocab.',
    stack: ['JavaScript', 'React', 'NodeJS/Express', 'MongoDB', 'Pexels Image API'],
    sourceCode: 'https://github.com/Kireshanth/wordle-french',
    livePreview: 'https://www.youtube.com/watch?v=pTHttqYmZoU&ab_channel=KireshanthThana',
  },
  {
    name: '$tock Trader',
    description:
      'An application where users can sign up to “buy” and “sell” stocks using real stock quotes.',
    stack: ['Python', 'Flask', 'Jinja', 'SQL', 'IDEX API'],
    sourceCode: 'https://github.com/Kireshanth/CS50-Finance',
  },
  {
    name: 'HaudioFeel?',
    description:
      'A free web based music player that fetches the top songs from curated spotify playlists based on your mood!',
    stack: ['JavaScript', 'React', 'Spotify API', 'Youtube Search API'],
    sourceCode: 'https://github.com/Kireshanth/haudioFeel',
    livePreview: 'https://www.youtube.com/watch?v=8w4fAGOmDbE&t=1s&ab_channel=KireshanthThana',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'CI/CD',
  'Mocha',
  'Python',
  'Postman',
  'Flask',
  'Jinja',
  'EJS',
  'MongoDB/Mongoose',
  'NodeJS/Express',
  'SQL'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kireshantht@gmail.com',
}

export { header, about, projects, skills, contact }
