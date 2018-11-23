const images = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const TypesLevels = {
  oneImage: {
    id: `oneImage`,
  },
  twoImages: {
    id: `twoImages`,
  },
  threeImages: {
    id: `threeImages`
  },
};

const levels = [
  {
    type: TypesLevels.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          },
        ],
      },
      {
        urls: [images.photos[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: true,
          },
          {
            value: `paint`,
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    type: TypesLevels.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: [
          {
            value: `0`,
            isCorrect: true,
          },
          {
            value: `1`,
            isCorrect: false,
          },
          {
            value: `2`,
            isCorrect: false,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          },
        ],
      },
      {
        urls: [images.photos[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: true,
          },
          {
            value: `paint`,
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    type: TypesLevels.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: [
          {
            value: `0`,
            isCorrect: true,
          },
          {
            value: `1`,
            isCorrect: false,
          },
          {
            value: `2`,
            isCorrect: false,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.oneImage.id,
    questions: [
      {
        urls: [images.paintings[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.twoImages.id,
    questions: [
      {
        urls: [images.paintings[1]],
        answers: [
          {
            value: `photo`,
            isCorrect: false,
          },
          {
            value: `paint`,
            isCorrect: true,
          },
        ],
      },
      {
        urls: [images.photos[0]],
        answers: [
          {
            value: `photo`,
            isCorrect: true,
          },
          {
            value: `paint`,
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    type: TypesLevels.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: [
          {
            value: `0`,
            isCorrect: true,
          },
          {
            value: `1`,
            isCorrect: false,
          },
          {
            value: `2`,
            isCorrect: false,
          }
        ],
      },
    ],
  },
  {
    type: TypesLevels.threeImages.id,
    questions: [
      {
        urls: [images.paintings[1], images.photos[1], images.photos[0]],
        answers: [
          {
            value: `0`,
            isCorrect: true,
          },
          {
            value: `1`,
            isCorrect: false,
          },
          {
            value: `2`,
            isCorrect: false,
          }
        ],
      },
    ],
  },
];

export default levels;
