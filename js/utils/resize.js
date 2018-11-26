/**
 * @param {{width: Number, height: Number}} frameSizes
 * @param {{width: Number, height: Number}} givenSizes
 * @return {{width: Number, height: Number}}
 */
export const resize = (frameSizes, givenSizes) => {
  const frameRatio = frameSizes.width / frameSizes.height;
  const givenRatio = givenSizes.width / givenSizes.height;
  if (givenRatio === frameRatio) {
    return {
      width: frameSizes.width,
      height: frameSizes.height,
    };
  }

  if (givenRatio === 1) {
    return {
      width: Math.min(frameSizes.width, frameSizes.height),
      height: Math.min(frameSizes.width, frameSizes.height),
    };
  }

  if (frameRatio >= 1) {
    if (givenRatio > 1) {
      return {
        width: frameSizes.width,
        height: frameSizes.width / givenRatio,
      };
    } else {
      return {
        height: frameSizes.height,
        width: frameSizes.height * givenRatio,
      };
    }
  }

  if (frameRatio < 1) {
    if (givenRatio > 1) {
      return {
        width: frameSizes.width,
        height: frameSizes.width / givenRatio,
      };
    } else {
      return {
        height: frameSizes.height,
        width: frameSizes.height * givenRatio,
      };
    }
  }

  return {
    width: frameSizes.width,
    height: frameSizes.height,
  };
};
