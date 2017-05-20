export const parseMeetups = (meetups) => meetups.map(meetup => ({
  id: meetup[0],
  title: meetup[1],
  description: meetup[2],
  date: meetup[3],
  location: meetup[4],
  maxLimit: meetup[5],
  curGoing: meetup[6],
  authorId: meetup[7]
}));
