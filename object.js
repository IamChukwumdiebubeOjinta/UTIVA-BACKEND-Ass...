// Creating an Object with methods
const AnObject = {
  name: 'anObject',

  // Creating an async method that returns a promise
  firstMethod: async () => {
    return [
      {
        name: 'Ebube',
        course: 'Web Development'
      },
      {
        name: 'Jane',
        course: 'Web Development'
      }, {
        name: 'Ugah',
        course: 'Web Development'
      },
    ]
  }
}

// Using the dot-then method 
AnObject.firstMethod().then((result) => (console.log(result))).catch((error) => (console.error('An error occurred', error)));


// Using the async-await method
const asyncMethod = async () => {
  try {
    const response = await AnObject.firstMethod()
    console.log(response)
  } catch(error) {
    console.error('An error occurred', error);
  }
}

asyncMethod()