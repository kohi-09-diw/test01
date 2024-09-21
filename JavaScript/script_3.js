//--問１--
document.write("■■■問1■■■");

document.write("<br>");
document.write("<br>");

for(var no1=0; no1<5; no1++){
    document.write("★");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");



//--問２--
document.write("■■■問2■■■");

document.write("<br>");
document.write("<br>");

for(var no2=0; no2<2; no2++){

    for(var no3=0; no3<3; no3++){
        document.write("★");
    }

    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



//--問３--
document.write("■■■問3■■■");

document.write("<br>");
document.write("<br>");

for(var no4=0; no4<2; no4++){

    for(var no5=0; no5<5; no5++){
        document.write("☆");
    }

    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



//--問４--
document.write("■■■問4■■■");

document.write("<br>");
document.write("<br>");

for(var no6=0; no6<4; no6++){

    for(var no7=0; no7<5; no7++){
        document.write("★");
    }

    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



//--問５--
document.write("■■■問5■■■");

document.write("<br>");
document.write("<br>");

for(var no8=0; no8<4; no8++){

    for(var no9=0; no9<3; no9++){
        document.write("★");
    }

    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



//--問６--
document.write("■■■問6■■■");

document.write("<br>");
document.write("<br>");

for(var no10=0; no10<3; no10++){

    for(var no11=0; no11<3; no11++){
        //余りが２の時★が表示
        if(no11%3==2){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    
    document.writeln("<br>");
}

document.write("<br>");
document.write("<br>");



//--問７--
document.write("■■■問7■■■");

document.write("<br>");
document.write("<br>");

for(var no12=0; no12<4; no12++){

    for(var no13=0; no13<5; no13++){
        if(no13%3==1){
            document.write("★");
        }else{
            document.write("☆");
         }
    }

    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



//--問８--
document.write("■■■問8■■■");

document.write("<br>");
document.write("<br>");

for(var no14=0; no14<5; no14++){

    for(var no15=0; no15<no14+1; no15++){
        document.write("★");
    }
    
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");
