const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
 'appear',
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
  'frontend',
  'backend',
  'development',
  'fullstack',
  'adore',
  'remember',
  'define',
  'quality',
  'framework',
  'country',
  'family',
  'variable',
  'examinition',
  'beauty',
  'smile',
  'madrid',
  'barcelona',
  
];

//Init word 
let randomWord

// Init score 
let score=0

// Init time 
let time=10

let difficulty=localStorage.getItem('difficulty')!==null?localStorage.getItem('difficulty'):'medium'
// Focus on the text start 
difficultySelect.value=difficulty
text.focus()

//Start counting down 
const timeInterVal=setInterval(updateTime,1000)



// Generate RandomWord 
function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}



function addWordDOM(){
    randomWord=getRandomWord()
    word.innerHTML=randomWord
}
addWordDOM()

//updateScore 
function updateScore(){
    score++
    scoreEl.innerHTML=score/2
}
function updateTime(){
    time--
    timeEl.innerHTML=time+ ' s'
    if(time===0){
        clearInterval(timeInterVal)
        //end game 
        gameOver()
    }
}
//game function 
function gameOver(){
    endgameEl.innerHTML=`
     <h1> Time run out </h1>
     <p> Your final score is ${score}</p>
     <button onclick="window.location.reload()">Reload</button>
    `
    endgameEl.style.display='flex'
}



//EventListener 
text.addEventListener('input',(event)=>{
    const insertedText=event.target.value 
    if(insertedText.trim()===randomWord){
        addWordDOM()
        updateScore()
       //clear 
       event.target.value=''
       if(difficulty==='hard'){
        
           time+=1
          
       }
       else if(difficulty==='medium'){
         
           time+=2
           
       }
       else{
        
           time+=3
           
       }
       updateScore()

       
    }
})
// Settings Btn 
settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('hide')
})


//Settings select 

settingsForm.addEventListener('change',(event)=>{
    window.location.reload()
    difficulty=event.target.value 
    localStorage.setItem('difficulty',difficulty)
})
