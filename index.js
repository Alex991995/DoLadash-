

Array.prototype.newPush = function(element) {
  const last = this.length
  this[last ] = element
}

Array.prototype.newSlice = function( start, end ) {
  const newArr = []
  for (let i = start; i < end; i++) {
    newArr.newPush(this[i] )
    
  }
  return newArr
}

Array.prototype.newSplice = function( start, end ) {
  const newArr = []
  const lastIndex = end - 1

  for (let i = 0; i < this.length; i++) {

    if(i < start){
      newArr.newPush(this[i] )
    }
    else if(i > start + lastIndex){
      newArr.newPush(this[i] )
    }
    
  }

  return newArr
}


const library = {

  // reduce(array, callback, initialValue) {
  //   let acc = initialValue

  //   for (let i = 0; i < array.length; i++) {
  //    acc += callback(array[i]) 
  //   }
  //   return acc
  // },
  
  map(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
      newArr.newPush( callback(array[i]) )
    }
    return newArr
  },

  foreach(array, callback){
    const newArr = []
    for (let i = 0; i < array.length; i++) {
      newArr.newPush( callback(array[i]) )
    }
    return newArr
  },

  filter(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
      const bool = callback(array[i])
      if(bool) {
        newArr.newPush(array[i])
      }
    }
    return newArr
  },

  take(array, n) {
    return array.newSlice(0, n)
  },

  skip(array, n) {
    const result =  array.newSplice(n-1, 1)
    return result
  }, 

  chain(array) {

    let arr = array

    return {
      take(n){
        arr = arr.newSlice(0, n)
        return this
      },
      map(callback) {
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
          newArr.newPush( callback(arr[i]) )
        }
        arr = newArr
        return this
      },
    
      foreach(callback){
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
          newArr.newPush( callback(arr[i]) )
        }
        arr = newArr
        return this
      },
    
      filter(callback) {
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
          const bool = callback(arr[i])
          if(bool) {
            newArr.newPush(arr[i])
          }
        }
        arr = newArr
        return this
      },
    
      skip(n) {
        arr = arr.newSplice(n-1, 1)
        return this
      }, 

      value() {
        return arr
      }

    }
  }
}



function isEven(n) {
  return n % 2 === 0 ? true : false
}

function multiplay(n) {
  return n * 2
}

// console.log(library.skip([1, 2, 3, 4], 3))

console.log(library.chain([1, 2, 3, 4]).filter(isEven).value() )
