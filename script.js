 const quizData =[
    {
        question :"Que signifie HTML ?",
        a:"HyperText Markup Language",
        b:"Hyperlinks and Text Markup Language",
        c:"Home Tool Markup Language",
        d:"Hyper Text Preprocessor",
        correct :"a",
    },
    {
        question : "Que signifie CSS ?",
        a:"Central Style Sheets" ,
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct :"b",
    },
    {
        question : "Choisissez le bon élément HTML pour le titre le plus grand :",
        a:"<h1>",
        b:"<heading>",
        c:"<h6>",
        d:"<head>",
        correct :"a",
    },
    {
        question : "Quel est l'élément HTML correct pour insérer un saut de ligne ? ",
        a:"<lb>",
        b:"<break>",
        c:"<br>",
        d:"<h1>",
        correct :"c",
    },
    {
        question:"Quelle balise HTML est utilisée pour créer une liste non ordonnée ? ",
        a:"<ul>",
        b:"<ol>",
        c:"<li>",
        d:"<dl>",
        correct : "a",
    },
    {
        question :"Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
        a:"text-color",
        b:" font-color",
        c:" color",
        d:"text-style",
        correct:"c",
    },
    {
        question :"Lequel des éléments suivants est utilisé pour lier un fichier CSS externe à une page HTML ? ",
        a:" <style>",
        b:"<link>",
        c:"<script>",
        d:" <meta>",
        correct:"b",
    },
    {
        question:"Quelle propriété CSS est utilisée pour définir la taille de la police d'un texte ?",
        a:"font-size",
        b:"text-size",
        c:"size",
        d:"font_height",
        correct :"a"
    },
    {
        question :"Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément HTML ?",
        a:"onmouseover",
        b:"onclick",
        c:"onchange",
        d:"onsubmit",
        correct:"b",
    },
    {
        question :"Quelle fonction JavaScript est utilisée pour imprimer quelque chose dans la console du navigateur ?",
        a:"log()",
        b:"print()",
        c:"console.log()",
        d:"display()",
        correct:"c",
    },
    {
        question :"Comment déclarer une variable en JavaScript ?  ",
        a:"new variable myVar",
        b:"let myVar",
        c:"variable myVar",
        d:"var myVar",
        correct:"b",
    },
    {
        question :"Quelle balise HTML est utilisée pour insérer du code JavaScript dans une page ? ",
        a:"<scripting>",
        b:"<javascript>",
        c:"<code>",
        d:"<script>",
        correct:"d",
    },
 ];
 const quiz=document.getElementById('quiz') /*id="quiz"*/
 const answerEls=document.querySelectorAll('.answer')/*class="answer"*/
 const questionEl=document.getElementById('question')/*<h2 id="question"> */
 const a_text=document.getElementById('a_text')
 const b_text=document.getElementById('b_text')
 const c_text=document.getElementById('c_text')
 const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score =0

loadQuiz()
function loadQuiz(){
    deselectAnswers()

    const currentQuizData= quizData[currentQuiz]
    
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}
function deselectAnswers(){ /* fonction pour déselectionner les réponses*/
    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click' , ()=> {
    const answer =getSelected()
    if(answer){
        if (answer ==quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()

        }else 
            quiz.innerHTML=`
            <h2>Votre réponse : ${score}/${quizData.length} question(s) correcte(s) </h2>
           
            <button onclick="location.reload()">Répéter</button>
            `;
    }
})



