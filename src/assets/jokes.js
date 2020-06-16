const jokes = [
  {
    id: 1,
    story: 'Dad, did you get a haircut?',
    punchLine: 'No, I got them all cut!',
  },
  {
    id: 2,
    story: 'How do you get a squirrel to like you?',
    punchLine: 'Act like a nut',
  },
  {
    id: 3,
    story: 'Did you hear the rumor about butter?',
    punchLine: "Well, I'm not going to spread it!",
  },
  {
    id: 4,
    story: 'What concert costs just 45 cents?',
    punchLine: '50 Cent featuring Nickelback!',
  },
  {
    id: 5,
    story: 'Why did the math book look so sad?',
    punchLine: 'Because of all of its problems!',
  },
];

const fetchJokes = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return jokes;
};

const fetchJoke = id => {
  return jokes.find(joke => joke.id == id);
};

const fetchFirstJoke = jokes[0];

export { fetchJokes, fetchFirstJoke, fetchJoke };
