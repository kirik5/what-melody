const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `001.mp3`,
        genre: `rock`
      },
      {
        src: `001.mp3`,
        genre: `pop`
      },
      {
        src: `001.mp3`,
        genre: `jazz`
      },
      {
        src: `001.mp3`,
        genre: `lounge`
      },
    ]
  },
  {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        src: `002.mp3`,
        genre: `rock`
      },
      {
        src: `002.mp3`,
        genre: `pop`
      },
      {
        src: `002.mp3`,
        genre: `jazz`
      },
      {
        src: `002.mp3`,
        genre: `lounge`
      },
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `002.mp3`
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `001.mp3`
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Show`
      }
    ]
  }
];

export default questions;
