//--問１--
document.write("■■■問1■■■");

document.write("<br>");
document.write("<br>");

//半径（ａ）×半径（ａ）×３．１４＝円の面積
function menseki(a){

    return "半径"+ a +"㎝の面積は"+ a*a*3.14 +"㎠です。";
}

//半径５㎝の面積
document.write(menseki(5) +"<br>");
document.write("<br>");

//半径７㎝の面積
document.write(menseki(7) +"<br>");
document.write("<br>");

//半径１０ｃｍの面積
document.write(menseki(10) +"<br>");
document.write("<br>");
document.write("<br>");




//--問２--
document.write("■■■問2■■■");

document.write("<br>");
document.write("<br>");

//（大人×５００円）＋（子供×２００円）＝合計
function human(group,otona,kodomo){

    return group +"グループの合計金額＝"+ (otona*500+kodomo*200) +"円です。<br>";
}


//Ａグループ：大人２人、子供４人
document.write(human("A",2,4));
document.write("<br>");

//Ｂグループ：大人１人、子供５人
document.write(human("B",1,5));
document.write("<br>");

//Ｃグループ：大人３人、子供７人
document.write(human("C",3,7));
document.write("<br>");

//Ｄグループ：大人１００人、子供１００人
document.write(human("D", 100, 100));
document.write("<br>");
