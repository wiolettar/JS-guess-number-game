$(document).ready(function () {
    $('#output').hide();
    $('#start').click(startGame);
    $('#checkLock').click(openLock);
    var ourSecretNum = '';

    function startGame() {
        //Random secret number generator
        ourSecretNum = Math.floor(Math.random() * 999).toString();
        console.log(ourSecretNum);
        $('#start').hide();
        $('#output').show();
        //Set start digit value on 5
        for (x = 0; x < $('input').length; x++) {
            $('input').eq(x).val('5');
        }
        $('small').html('<div class="row">Guess the password to open this lock. When you change the number, background colours will change.</div> <div class="row"> LEGEND: <br/> <div class="red">RED</div> - number is too high <div class="blue">BLUE </div>- number is too low<div class="green">GREEN</div> - number is correct</div>');
    }

    function openLock() {
        var win = 0;
        for (x = 0; x < $('input').length; x++) {
            var guessNumber = $('input').eq(x);
            var result = checkNumber(guessNumber.val(), ourSecretNum[x]);
            guessNumber.css({
                backgroundColor: result.backgrd
            });
            if (result.checker) {
                win++
            }
        }

        if (win == 3) {
            $('#start').show();
            $('small').html('Congratulations! You have opened the lock! The code was:' + ourSecretNum);
        }
    }

    //a=our guess, b=secret num
    function checkNumber(a, b) {
        var response = {};
        if (a > b) {
            response.checker = false;
            response.backgrd = '#FF652F';
        } else if (a < b) {
            response.checker = false;
            response.backgrd = '#182EB2';
        } else {
            response.checker = true;
            response.backgrd = '#14A76C';
        }
        return response;
    }

    $('#output').css({
        backgroundColor: '#272727',
        width: '600px',
        margin: '0px',
        padding: '0px'
    });

    $('input').css({
        backgroundColor: '#272727',
        border: '1px solid #747474',
        color: '#FFE400',
        fontSize: '3em',
        width: '60px',
        margin: '20px'

    });
    $('.btn').css({
        backgroundColor: '#272727',
        border: '1px solid #747474',
        color: '#14A76C',
        width: '200px',
        fontSize: '1.5em',
        padding: '20px'
    });
    $('small').css({
        color: '#747474',
        width: '200px',
        fontSize: '1.5em',
        margin: '25px auto 0px',
        padding: '20px'
    })
});