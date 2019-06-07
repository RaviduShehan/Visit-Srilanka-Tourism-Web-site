        var x;
        var i=60*3;             //Total seconds
        var m=parseInt(i/60);   //Time left in minutes.
        var s=i%60;             //Time left in seconds.

        function timer(){
            //Printing a leading zero when Second is less than 10.
            if(s<10){
                document.getElementById("timer").innerHTML='Time Left: 0'+ m + ' M : 0' + s + ' S';
            }
            else{
                document.getElementById("timer").innerHTML='Time Left: 0'+ m + ' M : ' + s + ' S';
            }

            //If the time limit is over calling myFunction to submit the quiz.
            //Else calculating the min. and sec.
            if(i<=0){
                myFunction();
            }
            else{
                i=i-1;
                m=parseInt(i/60);
                s=i%60;
            }
            return i;
        }

        //Setting the timer to start after 1 second when the page is loaded.
         x=setInterval(timer,1000);

        function takenTime(){
            var tt = 179 - i;
            var min = parseInt(tt/60);
            var sec = tt%60;
            document.getElementById("t").innerHTML='Time Taken: '+ min + "M : " + sec + "S";
        }

