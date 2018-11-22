import {expect} from 'chai';
import {getResult} from './result';
import ConfigGame from '../../configGame';

describe(`reducer getResult`, () => {
  it(`should return number`, () => {
    const state = {
      answers: [
        {
          index: 1,
          isCorrect: false,
          time: 10,
        },
        {
          index: 2,
          isCorrect: true,
          time: 15,
        },
        {
          index: 3,
          isCorrect: true,
          time: 10,
        },
        {
          index: 4,
          isCorrect: false,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
      ],
      lives: 1,
    };
    const result = getResult(state);
    expect(typeof result).to.equal(`number`);
  });
  it(`should return -1 when answers.length < amount questions`, () => {
    const state = {
      answers: [
        {
          index: 1,
          isCorrect: false,
          time: 10,
        },
        {
          index: 2,
          isCorrect: true,
          time: 15,
        },
        {
          index: 3,
          isCorrect: true,
          time: 10,
        },
        {
          index: 4,
          isCorrect: false,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
        {
          index: 5,
          isCorrect: true,
          time: 25,
        },
      ],
      lives: 1,
    };
    if (state.answers.length >= ConfigGame.AMOUNT_QUESTIONS) {
      state.answers = state.answers.slice(0, ConfigGame.AMOUNT_QUESTIONS - 1);
    }
    const result = getResult(state);
    expect(result).to.equal(-1);
  });

  it(`should return -1 when answers.length < 10. missing answer`, () => {
    const state = {
      answers: [
        {
          index: 1,
          isCorrect: false,
          time: 10,
        },
        {
          index: 2,
          isCorrect: true,
          time: 15,
        },
        undefined,
        {
          index: 4,
          isCorrect: true,
        },
        {
          index: 5,
          time: 25,
        },
        {
          index: 6,
          isCorrect: false,
          time: 25,
        },
        {
          index: 7,
        },
        {

        },
      ],
      lives: 1,
    };
    if (state.answers.length >= ConfigGame.AMOUNT_QUESTIONS) {
      state.answers = state.answers.slice(0, ConfigGame.AMOUNT_QUESTIONS - 1);
    }
    const result = getResult(state);
    expect(result).to.equal(-1);
  });


  it(`should return 1150 if time medium of answers, all answers are correct and all lives`, () => {
    const answers = [...new Array(10)].map((_) => {
      return Object.assign({}, {
        isCorrect: true,
        time: 15,
      });
    });
    const state = {
      answers,
      lives: 3,
    };
    const result = getResult(state);
    expect(result).to.equal(1150);
  });

  it(`should return correct points for few sets answers`, () => {
    const set1 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: true,
          time: 15,
        });
      }),
      points: 1050,
      lives: 3,
    };
    set1.answers[0].isCorrect = false; // -100

    const set2 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: true,
          time: 15,
        });
      }),
      points: 1150 - 100 - 100 + 50,
      lives: 3,
    };
    set2.answers[0].isCorrect = false; // -100
    set2.answers[1].isCorrect = false; // -100
    set2.answers[2].time = 5; // +50

    const set3 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: true,
          time: 15,
        });
      }),
      points: 1150 - 100 - 100 - 50,
      lives: 3,
    };
    set3.answers[0].isCorrect = false; // -100
    set3.answers[0].time = 5; // 0
    set3.answers[5].isCorrect = false; // -100
    set3.answers[9].time = 25; // -50

    const set4 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: true,
          time: 15,
        });
      }),
      points: 1150 - (2 * 50),
      lives: 1, // - 2 * 50
    };

    const set5 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: false, // - 1000
          time: 15,
        });
      }),
      points: 1150 - 1000,
      lives: 3,
    };

    const set6 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: false, // - 1000
          time: 15,
        });
      }),
      points: 1150 - 1000 - (2 * 50),
      lives: 1, // - (2 * 50)
    };

    const set7 = {
      answers: [...new Array(10)].map((_) => {
        return Object.assign({}, {
          isCorrect: false, // - 1000
          time: 15,
        });
      }),
      points: 1150 - 1000 - (3 * 50),
      lives: 0, // - (3 * 50)
    };

    const sets = [set1, set2, set3, set4, set5, set6, set7];
    sets.forEach((set) => {
      const state = {
        answers: set.answers,
        lives: set.lives,
      };
      const result = getResult(state);
      expect(result).to.equal(set.points);
    });
  });
});
