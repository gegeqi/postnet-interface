/**
 * Created by shiyue on 16-8-8.
 */

$(document).ready(function () {
    $('#info').focus(function () {
        $('#info').text('');
        $('#err').html('');
        $('#result').text('');
    });
    function getHistory($input, $result) {
        $("#table-head").after('<tr><td>' + $input + '</td><td>' + $result + '</td></tr>');

    }

    function request($input, $choice) {
        //var $choice = $('input[type="radio"]:checked').val();
        if ($choice === 'Barcode to Zipcode') {
            $.get('/barcode?code=' + $input, function (data, status) {
                if (data === 'ERR:the input is illegal!V_V') {
                    $('#err').html(data);
                } else {
                    $('#result').html(data);
                    getHistory($input, data);
                }
            });

        } else {
            $.get('/postcode?code=' + $input,
                function (data, status) {
                    if (data === 'ERR:the input is illegal!V_V') {
                        $('#err').html(data);
                    } else {
                        $('#result').html(data);
                        getHistory($input, data);
                    }
                });
        }
    }

    $('#btn').click(function () {
        $('#err').html('');
        $('#result').text('');

        var $input = $('#info').val();
        if ($input === '') {
            $('#err').html('Err,the input cannot be null!');
        } else {
            var $choice = $('input[type="radio"]:checked').val();
            request($input, $choice);
        }
    });

});