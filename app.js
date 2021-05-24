var questions = [
    [ "At a conference 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",
     '100','132', '145', '144', '121','B'],
    ['The day after the day after tomorrow is four days before Monday. What day is it today?',
    'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','A'],
    [ 'Forest is to tree as tree is to?', 'plant', 'leaf', 'branch', 'mangrove', 'Fire','B'],
    ['Which one of the five is least like the other four?', 'Dog', 'Mouse', 'Lion', 'Snake', 'Elephant','D'],
    ['Which number should come next in the series? 1 - 1 - 2 - 3 - 5 - 8 - 13', '8', '13', '21', '26', '12','C'],
    ['Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?',
     '10', '32', '11', '14', '24','E'],
    ['Choose the number that is 1/4 of 1/2 of 1/5 of 200:', '5', '12', '15', '14', '100','A'],
    ['If you rearrange the letters "LNGEDNA" you have the name of a(n):',
     'Animal','State', 'City', 'Country', 'Ocean','D']
];

var pos=0, score=0;

function _(x){
    return document.getElementById(x);
}
function buildquestion(){
    if (pos>=questions.length){
        _('test').innerHTML='<h3>You got '+ score+ ' of '+questions.length +' correct answers</h3>';
        _('test-status').innerHTML='Test is completed.'
        return false;
    }
    _('test-status').innerHTML= 'This is the question number: '+ (pos+1) +' of ' + questions.length;
    var question = questions[pos][0];
    var cha=questions[pos][1];
    var chb=questions[pos][2];
    var chc=questions[pos][3];
    var chd=questions[pos][4];
    var che=questions[pos][5];
    
_('test').innerHTML= (pos+1)+'- ' +question+'<br>'+'<input type="radio" name="choices" value="A">'+ cha +'<br>'+'<input type="radio" name="choices" value="B">'+ chb +'<br>'+  '<input type="radio" name="choices" value="C">'+ chc +'<br>'+'<input type="radio" name="choices" value="D">'+ chd +'<br>'+'<input type="radio" name="choices" value="E">'+ che +'<br><br><br>'+'<button type="submit" onclick="checkanswer()">Next question</button>';
}

function checkanswer(){
    var choices=document.getElementsByName('choices');
    for (var i=0 ; i<choices.length;i++){
        if(choices[i].checked){
var choice= choices[i].value;
        }
    }
if( choice==questions[pos][6]){
    score++;
}
pos++;
buildquestion();
}

window.addEventListener('load', buildquestion,false);