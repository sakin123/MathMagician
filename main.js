alert("The solar system of this universe is in the verge of extinction because of the indiscipline of gravitational force.you are a Math Magician.Use your power of math skill to save the world");
function mathMagician() {
  let difficulity = prompt('choose difficuliy easy medium or hard').toLowerCase();
  let maxQue;
  let totalQue = 0;
  let correct = 0;
  let incorrect = 0;
  let posPoints;
  let negPoints;
  let points = 0;
  let animation;
  let que;
  let n1;
  let n2;
  let n3;
  let n4;
  let n5;
  let n6;
  let n7;
  let low;
  let high;
  let p1;
  let p2;
  let p3;
  let p4;
  let p5;
  let p6;
  let p7;
  let p8;
  let p9;
  let p10;
  let p11;
  let q1;
  let q2;
  let q3;
  let q4;
  let q5;
  let q6;
  let q7;
  let q8;
  let q9;
  let q10;
  let q11;
  let qDbase;
  let pDbase;
  let range;
  let ran;
  
  switch (difficulity) {
    case 'easy':
      maxQue = 10;
      posPoints = 2;
      negPoints = 1;
      target = 5;
      document.getElementById('target').innerHTML =`target : ${target}`;
      range = 10;
      low = 0;
      high = 4;
      break;
      case 'medium':
      maxQue = 20;
      posPoints = 4;
      negPoints = 2;
      target = 65 + Math.ceil(Math.random() * 15);
      document.getElementById('target').innerHTML = `target : ${target}`;
      range = 15;
      low = 4;
      high = 7;
      break;
      case 'hard':
      maxQue = 30;
      posPoints = 5;
      negPoints = 3;
      target = 120 + Math.ceil(Math.random() * 30);
      document.getElementById('target').innerHTML = `target : ${target}`;
      range = 20;
      low = 0;
      high = 11;
      break;
    default:
      alert('input a valid value');
     };
   document.getElementById('start').onclick = function (){
   document.getElementById('start').style.display ='none';
     totalQue++;
     if (totalQue <= maxQue) {
       let rotate = 90 * Math.ceil(Math.random() * 5)
       n1 = Math.ceil(Math.random() * range);
       n2 = Math.ceil(Math.random() * range);
  n3 = Math.ceil(Math.random() * range);
  n4 = Math.ceil(Math.random() * range);
  n5 = Math.ceil(Math.random() * range);
  n6 = Math.ceil(Math.random() * 3);
  n7 = Math.ceil(Math.random() * 3);
  p1 = Math.round(n1 + n2);
  p2 = Math.round(n1 * n2);
  p3 = Math.round(n1 / n2);
  p4 = Math.round(n1 - n2);
  p5 = Math.round(n1 * n2 + n3 / n4);
  p6 = Math.round(n1 * n2 + n3 / n4 -n5 + n6);
  p7 = Math.round(n1 + n2 - n3);
  p8 = Math.round(n1 * n2 / n3);
  p9 = Math.round(n1 + n2 * n3 / n4);
  p10 = Math.round(n1 - n2 / n3);
  p11 = Math.round(n1 ** n6 + n2 ** n7);
  q1 = `${n1} + ${n2} = ?`;
  q2 = `${n1} * ${n2} = ?`;
  q3 = `${n1} / ${n2} = ?`;
  q4 = `${n1} - ${n2} = ?`;
  q5 = `${n1} * ${n2} + ${n3} ÷ ${n4} = ?`;
  q6 = `${n1} * ${n2} + ${n3} ÷ ${n4} - ${n5} + ${n6} = ?`;
  q7= `${n1} + ${n2} - ${n3} = ?`;
  q8 = `${n1} * ${n2} ÷ ${n3}  = ?`;
  q9 = `${n1} + ${n2} * ${n3} ÷ ${n4} = ?`;
  q10 = `${n1} - ${n2} ÷ ${n3} = ?`;
  q11 = `${n1} ** ${n6} + ${n2} ** ${n7} = ?`;
  pDbase = [null, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
  qDbase = [null, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
  ran = low + Math.ceil(Math.random() * high);
  document.getElementById('que').innerHTML = `(${totalQue}) ${qDbase[ran]}`;
       
     }
       document.getElementById('submit').onclick = function (){
         totalQue++;
       let input = document.getElementById('ans').value;
       if (input == pDbase[ran]) {
       correct++;
       points+=posPoints;
       document.getElementById('correct').innerHTML =`correct : ${correct}`;
       document.getElementById('points').innerHTML =`points : ${points}`;
       document.getElementById('cr1').style.transform =`rotate(180deg)`;
      if (points >= target) {
        alert('congrass you save the world');
        document.getElementById('cr1').style.animation ='solar 4s linear infinite';
        };
    }
    else if (totalQue == maxQue) {
      if (points < target) {
        document.getElementById('cr1').style.display ='none';
        document.getElementById('cr1').innerHTML ='<h1>game over<br>you can not save the world</h1>';
        alert('game over');
      }
    }
    else {
      incorrect++;
      points-=negPoints;
      document.getElementById('incorrect').innerHTML =`incorrect : ${incorrect} ans:${pDbase[ran]}`;
      document.getElementById('points').innerHTML =`points : ${points}`;
document.getElementById('cr1').style.transform =`rotate(-180deg)`;
     }
     if (totalQue <= maxQue) {
       
       n1 = Math.ceil(Math.random() * range);
       n2 = Math.ceil(Math.random() * range);
       n3 = Math.ceil(Math.random() * range);
       n4 = Math.ceil(Math.random() * range);
       n5 = Math.ceil(Math.random() * range);
       n6 = Math.ceil(Math.random() * 3);
       n7 = Math.ceil(Math.random() * 3);
       p1 = Math.round(n1 + n2);
       p2 = Math.round(n1 * n2);
       p3 = Math.round(n1 / n2);
       p4 = Math.round(n1 - n2);
       p5 = Math.round(n1 * n2 + n3 / n4);
       p6 = Math.round(n1 * n2 + n3 / n4 -n5 + n6);
  p7 = Math.round(n1 + n2 - n3);
  p8 = Math.round(n1 * n2 / n3);
  p9 = Math.round(n1 + n2 * n3 / n4);
  p10 = Math.round(n1 - n2 / n3);
  p11 = Math.round(n1 ** n6 + n2 ** n7);
  q1 = `${n1} + ${n2} = ?`;
  q2 = `${n1} * ${n2} = ?`;
  q3 = `${n1} / ${n2} = ?`;
  q4 = `${n1} - ${n2} = ?`;
  q5 = `${n1} * ${n2} + ${n3} ÷ ${n4} = ?`;
  q6 = `${n1} * ${n2} + ${n3} ÷ ${n4} - ${n5} + ${n6} = ?`;
  q7= `${n1} + ${n2} - ${n3} = ?`;
  q8 = `${n1} * ${n2} ÷ ${n3}  = ?`;
  q9 = `${n1} + ${n2} * ${n3} ÷ ${n4} = ?`;
  q10 = `${n1} - ${n2} ÷ ${n3} = ?`;
  q11 = `${n1} ** ${n6} + ${n2} ** ${n7} = ?`;
  pDbase = [null, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
  qDbase = [null ,q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
  ran = low + Math.ceil(Math.random() * high);
  document.getElementById('que').innerHTML = `(${totalQue}) ${qDbase[ran]}`;
       
     }
   };
 };
};
  
function rule() {
  alert('fill the target to win.there is also negative points for wrong answer')
}
