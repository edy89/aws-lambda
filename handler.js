'use strict';

module.exports.hello = (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World"
      },
      null,
      2
    ),
  };
}
