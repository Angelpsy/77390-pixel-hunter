import ConfigGameScreens from './configGameScreens';

const images = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
  ],
};

const levels = [
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
      {
        urls: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: {
          byId: {
            0: {
              value: `0`,
              isCorrect: true,
            },
            1: {
              value: `1`,
              isCorrect: false,
            },
            2: {
              value: `2`,
              isCorrect: false,
            },
          },
          allIdd: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
      {
        urls: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: {
          byId: {
            0: {
              value: `0`,
              isCorrect: true,
            },
            1: {
              value: `1`,
              isCorrect: false,
            },
            2: {
              value: `2`,
              isCorrect: false,
            },
          },
          allIdd: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
      {
        urls: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
              },
          },
          allIdd: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: {
          byId: {
            0: {
              value: `0`,
              isCorrect: true,
            },
            1: {
              value: `1`,
              isCorrect: false,
            },
            2: {
              value: `2`,
              isCorrect: false,
            },
          },
          allIdd: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: {
          byId: {
            0: {
              value: `0`,
              isCorrect: true,
            },
            1: {
              value: `1`,
              isCorrect: false,
            },
            2: {
              value: `2`,
              isCorrect: false,
            },
          },
          allIdd: [`0`, `1`, `2`],
        },
      },
    ],
  },
];

export default levels;
