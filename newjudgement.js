function get_achievement(points){   //成績判定_合計点数points
  let sum = 0;        //sumー合計を出す変数を初期化
  for (let i=0; i<number; i++){ //sum=sum+points[0];sum=sum+points[1];sum=sum+points[2];・・・
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
let points = [100,100,80,80,70,80];
let number = points.length;
console.log(get_achievement(points));