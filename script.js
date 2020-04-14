const body_parts = document.querySelectorAll('.the_man')
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const words = ['pikachu', 'bulbasaur', 'charmander', 'squirtle']

let the_word = words[Math.floor(Math.random()*4)]
const correct_letter = []
const wrong_letter = []

const display_word=()=>{
    const y = the_word.split('').map((a,b)=>{
        if(correct_letter.includes(a)){
            return a
        }else{
            document.getElementById('wrong_letters').innerHTML = `wrong letters: ${wrong_letter.join('-')}`
            return '_'
        }
    })
    const z = y.join('')
    document.getElementById('the_word').innerHTML = z
    console.log(document.getElementById('the_word').innerHTML)
    if(document.getElementById('the_word').innerHTML == the_word){
        alert('win');
        document.getElementById('user_input').style.display='none';
    }
}

const test_letter=(letter_input_by_user)=>{
    if(the_word.includes(letter_input_by_user)){
        correct_letter.push(letter_input_by_user)
    }else{
        wrong_letter.push(letter_input_by_user)
        for(let i = 0; i<= body_parts.length; i++){
            if(body_parts[i].classList.value === 'the_man'){
                body_parts[i].classList.remove('the_man');
                break;
            }
        }
        if(wrong_letter.length > 5){
            alert('you lose')
            document.getElementById('user_input').style.display='none'
        }
        
    }
}

const play_again=()=>{
    the_word = words[Math.floor(Math.random()*4)]
    correct_letter.splice(0)
    wrong_letter.splice(0)
    body_parts.forEach(a=>{
        a.classList.add('the_man')
    })
    display_word()
}

document.getElementById('play_again').addEventListener('click',()=>{
    play_again()
})

document.getElementById('user_input').addEventListener('keyup',(e)=>{
    const x = alphabet.split('')
    if(!x.includes(e.target.value)){
        alert('not a valid letter')
        e.target.value = ''
        return
    }
    if(correct_letter.includes(e.target.value) || wrong_letter.includes(e.target.value)){
        alert('already chosen')
        e.target.value = ''
        return
    }
    test_letter(e.key)
    display_word()
    e.target.value = ''
})