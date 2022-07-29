/**
 * This code is deployed as the Lambda function in AWS.
 * It just returns the simple string Hello World.
 */

const sleep = async (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, n * 1000);
  });
};

exports.handler = async (event, context) => {
  await sleep(2);
  return event;
};
