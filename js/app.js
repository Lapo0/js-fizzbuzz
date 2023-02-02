// Da 1 a 100

for (let i = 1; i <= 100; i++) {
    console.log(i)

    const resto = i % 15
   // console.log('resto')

    if (resto === 0) {
        console.log('FizzBuzz')
    } else if (resto === 5 || resto === 10) {
        console.log('Buzz')
    } else if (resto === 3 || resto === 6 || resto === 9 || resto === 12) {
        console.log('Fizz')
    }

}