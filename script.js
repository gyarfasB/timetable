function update() {
    if(weekday == 1){ //HÉTFŐ
        hétfő.style.backgroundColor = "darkcyan"
        hétfő.style.color = "white"
    }
    if(weekday == 2){ //KEDD
        kedd.style.backgroundColor = "cadetblue"
        kedd.style.color = "white"

        if(hours >= 11 && minutes >= 30 && hours >= 12 && minutes <= 30){
        artHistoryTime.style.backgroundColor = "cadetblue"
        artHistoryLesson.style.color = "white"
        artHistoryLesson.style.backgroundColor = "cadetblue"
        artHistoryTime.style.color = "white"
        }
  /*       if(hours >= 12 && minutes <= 30){
        artHistoryTime.style.backgroundColor = "cadetblue"
        artHistoryLesson.style.color = "white"
        artHistoryLesson.style.backgroundColor = "cadetblue"
        artHistoryTime.style.color = "white"
        } amúgy is hülyeség volt*/
        if(hours >= 12 && hours <= 14){
        choirTime.style.backgroundColor = "cadetblue"
        choirLesson.style.color = "white"
        choirLesson.style.backgroundColor = "cadetblue"
        choirTime.style.color = "white"
        }
        if(hours >= 14 && hours <= 15){
            chamber1time.style.backgroundColor = "cadetblue"
            chamber1time.style.color = "white"
            chamber1lesson.style.backgroundColor = "cadetblue"
            chamber1lesson.style.color = "white"
        }
        if(hours >= 19 && hours <= 20){
            guitarTime.style.backgroundColor = "cadetblue"
            guitarTime.style.color ="white"
            guitarLesson.style.backgroundColor = "cadetblue"
            guitarLesson.style.color ="white"

        }    
    }
    if(weekday == 3){ //SZERDA
        szerda.style.backgroundColor = "darkorange"
        szerda.style.color = "white"
        if(hours >= 8 && hours <= 10){
            zirTime.style.backgroundColor = "cadetblue"
            zirTime.style.color = "white"
            zirLesson.style.backgroundColor = "cadetblue"
            zirLesson.style.color = "white"
        }
        if(hours >= 12 && hours <= 14) {
            acoTime.style.backgroundColor = "cadetblue"
            acoTime.style.color = "white"
            acoLesson.style.backgroundColor = "cadetblue"
            acoLesson.style.color = "white"
        }
        if(hours >= 15 && hours <= 17) {
            chamber2time.style.backgroundColor = "cadetblue"
            chamber2time.style.color = "white"
            chamber2lesson.style.backgroundColor = "cadetblue"
            chamber2lesson.style.color = "white"
        }
    }
    if(weekday == 4){ //CSÜTÖRTÖK
        csütörtök.style.backgroundColor = "darkolivegreen"
        csütörtök.style.color = "white"
        if(hours >= 13 && hours <= 15) {
            szolfTime.style.backgroundColor = "cadetblue"
            szolfTime.style.color = "white"
            szolfLesson.style.backgroundColor = "cadetblue"
            szolfLesson.style.color = "white"
        }
        if(hours >= 16 && hours <= 18) {
            guitarOrchTime.style.backgroundColor = "cadetblue"
            guitarOrchTime.style.color = "white"
            guitarOrchLesson.style.backgroundColor = "cadetblue"
            guitarOrchLesson.style.color = "white"
        }
    }
    if(weekday == 5){ //PÉNTEK
        péntek.style.backgroundColor = "darkred"
        péntek.style.color = "white"
    }
    if(weekday == 6){ //SZOMBAT
        szombat.style.backgroundColor = "darkturquoise"
        szombat.style.color = "white"
    }
    if(weekday == 0){ //VASÁRNAP
        vasárnap.style.backgroundColor = "darkgoldenrod"
        vasárnap.style.color = "white"
    }
}
update()