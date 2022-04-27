score=0

function M4days(){
    score=score + 1
    document.getElementById("style").innerHTML="score:" + score
}
function W4days(){
    localStorage.setItem("score", score)
}
function L4days(){
    window.location="activity_2.html"
}