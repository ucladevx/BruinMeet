export const parseMeetups = (meetups) => meetups.reduce((acc, meetup) => ({
  ...acc,
  [meetup[0]]: {
    id: meetup[0],
    title: meetup[1],
    description: meetup[2],
    date: meetup[3],
    location: meetup[4],
    maxLimit: meetup[5],
    curGoing: meetup[6],
    authorId: meetup[7]
  }
}), {})
