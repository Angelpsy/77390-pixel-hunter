import ConfigGameScreens from './configGameScreens';

const images = {
  paintings: [
    {
      url: `https://k42.kn3.net/CF42609C8.jpg`,
      width: 600,
      height: 831,
    },
    {
      url: `https://k42.kn3.net/D2F0370D6.jpg`,
      width: 468,
      height: 354,
    },
    {
      url: `https://k32.kn3.net/5C7060EC5.jpg`,
      width: 1200,
      height: 900,
    },
  ],
  photos: [
    {
      url: `http://i.imgur.com/1KegWPz.jpg`,
      width: 1080,
      height: 720,
    },
    {
      url: `https://i.imgur.com/DiHM5Zb.jpg`,
      width: 636,
      height: 938,
    },
    {
      url: `http://i.imgur.com/DKR1HtB.jpg`,
      width: 354,
      height: 937,
    },
  ],
};

const levels = [
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        imgs: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        imgs: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
      {
        imgs: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        imgs: [images.paintings[1], images.photos[1], images.photos[0]],
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
          allIds: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        imgs: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        imgs: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
      {
        imgs: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        imgs: [images.paintings[1], images.photos[1], images.photos[0]],
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
          allIds: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.oneImage.id,
    questions: [
      {
        imgs: [images.paintings[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.twoImages.id,
    questions: [
      {
        imgs: [images.paintings[1]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
      {
        imgs: [images.photos[0]],
        answers: {
          byId: {
            photo: {
              value: `photo`,
              isCorrect: false,
              text: `Фото`,
            },
            paint:
              {
                value: `paint`,
                isCorrect: true,
                text: `Рисунок`,
              },
          },
          allIds: [`photo`, `paint`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        imgs: [images.paintings[1], images.photos[1], images.photos[0]],
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
          allIds: [`0`, `1`, `2`],
        },
      },
    ],
  },
  {
    type: ConfigGameScreens.threeImages.id,
    questions: [
      {
        imgs: [images.paintings[1], images.photos[1], images.photos[0]],
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
          allIds: [`0`, `1`, `2`],
        },
      },
    ],
  },
];

export default levels;
