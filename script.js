




let v = document.querySelector('.sss');
            let p3 = document.querySelector('.p3');
            let xo = document.getElementById('s1');
            let xoS = document.getElementById('S1');

            let snake = document.getElementById('s2');
            let snakeS = document.getElementById('S2');


            let x = 0
            p3.onclick = function () {
                x++
                if (x % 2 == 1) {
                    v.classList.add('sss1');
                    v.classList.remove('sss');
                   p3.innerHTML = '<img src="img/xst.png" width="40" height="40">'
                }
                if (x % 2 == 0) {
                    v.classList.remove('sss1');
                    v.classList.add('sss');
                    
                     p3.innerHTML = '<img src="img/menu-512.png" width="40" height="40">'

                }
            }
            let m = 0
            let xo1 = document.getElementById('XO')

            let snake1 = document.getElementById('snake')

            xo.onclick = function () {
                m++
                if (m % 2 == 1) {
                    xo1.classList.add('XOactivate');
                    xo1.classList.remove('XO');

                }
                if (m % 2 == 0) {
                    xo1.classList.remove('XOactivate');
                    xo1.classList.add('XO');

                }
            }
            xoS.onclick = function () {
                m++
                if (m % 2 == 1) {
                    xo1.classList.add('XOactivate');
                    xo1.classList.remove('XO');

                }
                if (m % 2 == 0) {
                    xo1.classList.remove('XOactivate');
                    xo1.classList.add('XO');

                }
            }

            snake.onclick = function () {
                m++
                if (m % 2 == 1) {
                    snake1.classList.add('snakeactivate');
                    snake1.classList.remove('snake');

                }
                if (m % 2 == 0) {
                    snake1.classList.remove('snakeactivate');
                    snake1.classList.add('snake');

                }
            }
            snakeS.onclick = function () {
                m++
                if (m % 2 == 1) {
                    snake1.classList.add('snakeactivate');
                    snake1.classList.remove('snake');

                }
                if (m % 2 == 0) {
                    snake1.classList.remove('snakeactivate');
                    snake1.classList.add('snake');

                }
            }