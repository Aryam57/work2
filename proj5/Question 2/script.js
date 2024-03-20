function calculateFactorial() {
                        
                        const number = parseInt(document.getElementById('number').value);
            
                        
                        if (isNaN(number) || number < 0 || number > 10) {
                            document.getElementById('result').textContent = 'The number is invalid';
                        } else {
                            // حساب مضروب العدد
                            let factorial = 1;
                            for (let i = 2; i <= number; i++) {
                                factorial *= i;
                            }
                           
                            document.getElementById('result').textContent = number + '! = ' + factorial;
                        }
                    }