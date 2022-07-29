/**
 * This function returns a promise that can resolve after n seconds.
 *
 * @param {*} n
 * @returns
 */
const sleep = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, n * 1000);
  });
};

/**
 * The Lambda function echoes the input as is, after two seconds.
 *
 * @param {*} event
 * @param {*} context
 * @returns
 */
exports.handler = async (event, context) => {
  await sleep(2);
  return event;
};
