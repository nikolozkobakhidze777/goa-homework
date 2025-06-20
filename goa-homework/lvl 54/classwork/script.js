document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

            const input1 = document.getElementById('input1').value;
            const input2 = document.getElementById('input2').value;
            const input3 = document.getElementById('input3').value;

            console.log(input1, input2, input3);
        });
