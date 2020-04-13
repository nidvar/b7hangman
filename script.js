console.log('hangman')

const words=['pikachu', 'bulbasaur', 'charmander', 'squirtle']

const the_word = words[Math.floor(Math.random()*4)]
console.log(the_word)

const correct_letter = []
const wrong_letter = []

const display_word=()=>{
    const y = the_word.split('').map(a=>{
        if(correct_letter.includes(a)){
            return a
        }else{
            return '_'
        }
    })

    console.log(y)
    const z = y.join('')
    document.getElementById('the_word').innerHTML=z
}

const test_letter=(letter_input_by_user)=>{
    if(the_word.includes(letter_input_by_user)){
        correct_letter.push(letter_input_by_user)
    }else{
        wrong_letter.push(letter_input_by_user)
    }
}


document.getElementById('user_input').addEventListener('keyup',(e)=>{
    test_letter(e.target.value)
    display_word()
    e.target.value = ''
})