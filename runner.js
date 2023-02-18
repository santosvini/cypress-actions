const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkzYWE2OWM5LWJhOTItNDk5Yy04NmI1LTc5MzRmMmUzYzViMy0xNjc2NzM3MjMwMjYxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiM2ZiYmI2YWMtMmJmOC00YzM4LWFjNDQtNTQzZTBhYzI3YmE0IiwidHlwZSI6InQifQ.JZu1u8u7W---KthorcUb3tYpjehHuBQmGxxyF4WJd8s'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
