function get_achievement(points){   //成績判定_合計点数points
  let sum = 0;        //sumー合計を出す変数を初期化
  for (let i=0; i<number; i++){ 
      sum += points[i];//  の略 number:教科の数
  }
  if (sum >= number*100*0.8) {
      return "A";
  } else if (sum >= number*100*0.6) {
      return "B";
  } else if (sum >= number*100*0.4) {
      return "C";
  } else {
      return "D";
  }
}
function get_pass_or_failure(points){
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge= "不合格";
      break;
    }
  }
  return judge;
}
function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure =  get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です`;
}
let points= [100,80, 50, 70, 80];
let number = points.length;
console.log(judgement(points));