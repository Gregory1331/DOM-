        //№1
        // let num = document.querySelector('#num');
        // let result = document.querySelector('.result');
        
        // num.addEventListener('blur',function(){
        //     console.log(result);
        //     result.textContent = result.textContent + ' '+ num.value;
        // });
        

    //№2 
    // let elem1 = document.querySelector("#elem1")
    // let elem2 = document.querySelector("#elem2")
    // let elem3 = document.querySelector("#elem3")
    // let p = document.querySelector("p")
    // let button = document.querySelector("#button")
    // button.addEventListener("click",func)
    // function func(){
    //     p.textContent = +elem1.value + +elem2.value + +elem3.value
    // }        

    //№3
    // let elem = document.getElementById('num');
    // elem.addEventListener('blur', func);

    // function func() {
    // 	let sum = 0;
    // 	let str = elem.value;
    // 	let arr = str.split('');
    //   	for (let i = 0; i < arr.length; i++) {
    // 		sum += +arr[i];
    // 	}
    // 	let newElem = document.getElementById('result');
    // 	newElem.innerHTML = sum;
    // }   

    //№4

    // let elem = document.getElementById('num');
    // elem.addEventListener('blur', func);

    // function func() {
    // 	let sum = 0;
    // 	let str = elem.value;
    // 	let arr = str.split(',');
    //   	for (let i = 0; i < arr.length; i++) {
    // 		sum += +arr[i];
    // 	}
    // 	let newElem = document.getElementById('result');
    // 	newElem.innerHTML = sum/arr.length;
    // }  

    //№5
    // let elem = document.getElementById('input');
    // elem.addEventListener('focus', func);
    // elem.addEventListener('blur', func2);
    
    // function func() {
    // 	elem.placeholder = '';
    // }

    // function func2() {
    // 	let elem = document.getElementById('input');
    // 	let elems = document.getElementsByClassName('name');
    // 	if (elem.value !== 0) {
    // 		let str = elem.value;
    // 		let arr = str.split(' ');
    // 		for (let i = 0; i < arr.length; i++) {
    // 			elems[i].value = arr[i];
    // 		}
    // 	}
    // 	if (elem.value == 0) {
    // 		elem.placeholder = 'Введите Ваши ФИО';
    // 		for (let i = 0; i < elems.length; i++) {
    // 			elems[i].value = '';
    // 		}
    // 	}
    // } 

    //№6
    // let elem = document.getElementById('input');
    //  elem.addEventListener('blur', bigLetter);

    // function uswords(str) {
    // 	let arr = str.split(' ');
    // 	for (let i = 0; i < arr.length; i++) {
    // 		arr[i] = arr[i].split('');
    // 		arr[i][0] = arr[i][0].toUpperCase();
    // 		arr[i] = arr[i].join('');
    // 	}
    // 	str = arr.join(' ');
    // 	return str;
    // }

    // function bigLetter() {
    // 	elem.value = uswords(elem.value);
    // }  

    // №7
    // let elem = document.getElementById('nm');
    // elem.addEventListener('blur', func);

    // function func() {
    // 	let nm = 0;
    // 	let str = elem.value;
    // 	let arr = str.split(' ');
    // 	for (let i = 0; i < arr.length; i++) {
    // 		nm += 1;
    //  	}
    // 	let p = document.getElementById('result');
    // 	p.innerHTML = nm;
    // } 

    // №8
    // let elem = document.getElementById('num');
    // elem.addEventListener('blur', func);

    // function func() {
    // 	let arr2 = [];
    // 	let str = elem.value;
    // 	let arr = str.split('.');
    // 	arr2 = arr.reverse();
    // 	let str1 = arr2.join('-');
    // 	elem.value = str1;
    // }
    // №9
    // let elem = document.getElementById('num');
    // let btn = document.getElementById('but');
    // btn.addEventListener('click', func);

    // function func() {
    // 	let str = elem.value;
    //  	let arr = str.split('');
    // 	let arr2 = str.split('').reverse();
    // 	for(let i = 0; i < arr.length; i++) {
    // 		if(arr[i]!== arr2[i]) { 
    // 			alert('это слово не палиндром');
    // 			return;
    // 		}
    //   	}
    // 	alert('это слово палиндром');
    // 	return;
    // }
    // №10
    // let elem = document.getElementById('num');
    // elem.addEventListener('click', func);

    // function func() {
    // 	let str = elem.value;
    // 	let arr = str.split('');
    // 	for (let i = 0; i < arr.length; i++) {
    // 		if (arr[i] == 3) {
    // 			alert('это число содержит 3');
    // 			return;
    //   		}
    // 	}
    // 	alert('это число не содержит 3');
    // 	return;
    // }

    // №11

    // let elem = document.getElementsByTagName('p');
    // let btn= document.getElementById('btn');
    // btn.addEventListener('click', func);

    // function func() {
    // 	for (let i = 0; i< elem.length; i++) {
    // 		elem[i].innerHTML = elem[i].innerHTML+' '+(i + 1);
    // 	}
    //  } 

    // №12
    // let elem = document.getElementsByTagName('a');

    // function start() {
    // 	for (let i = 0; i < elem.length; i++) {
    // 		elem[i].innerHTML = elem[i].innerHTML + '(' +elem[i].href+')';
    // 	}
    //  }
    //  start();

    // №13
    // let elem = document.getElementsByTagName('a');

    
    // 	for (let i = 0; i < elem.length; i++) {
    // 		if (elem[i].href.indexOf('http://') === 0) {
    //  			let arrow='→';
    //             elem[i].append(arrow)
    // 		}
    // 	}
       

    // №14
    // document.querySelector('p')..forEach(p => {
    //     p.onclick=()=>(p.innerText=Math.pow(+p.innerText,2));
        
    // });

    // №15
    // let elem = document.getElementById('num');
    // elem.addEventListener('click', func);

    // function func() {
    // 	let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    //  	let str = elem.value;
    // 	let arr = str.split('.');
    // 	let arr2 = arr.reverse();
    // 	let str1 = arr2.join(',')
    // 	let date = new Date(str1);
    // 	let day = date.getDay();
    // 	let p = document.getElementById('text');
    // 	p.innerHTML = dayWeak[day];
    // }
    // №16
    // let elem = document.getElementById('num');
    // let btnElem = document.getElementsByClassName('cls');
    // for (let i = 0;i < elem.length; i++) {
    // 	btnElem[i].addEventListener('click', func);
    //  }

    // function func() {
    // 	let number = +elem.value+ +this.value;
    // 	if (number >= 0){
    // 		elem.value = number;
    //  	} else {
    // 		elem.value = 0;
    // 	}
    // }  

    // №17

    // let inp = document.getElementById('result');
    // let p = document.getElementsByTagName('p');
    // for (let i = 0; i < p.length; i++) {
    // 	p[i].addEventListener('click', func);
    //  }

    // let count = 0;
    // function func() {
    // 	count++;
    // 	inp.value = count;
    // } 

    // №18

    // let btn = document.querySelector('button');
    // btn.addEventListener('click', func);
    // let elems = document.getElementsByTagName('div');
    // let str = '';

    // function func () {
    // 	for(let i = 0; i < elems.length; i++) {
    // 		str = elems[i].innerHTML.slice(0, 10)+'...';
    // 		elems[i].innerHTML = str;
    // 	}
    // }

    // №19
    // let inp = document.querySelector('input');
    // inp.addEventListener('blur', func);

    // function func() {
    // 	let content = inp.value;
    // 	if (content > 0 && content < 101){
    // 		inp.style.background = 'green';
    // 	} else {
    // 		inp.style.background = 'red';
    // 	}
    // } 

    // №20
    // let inp = document.querySelector('input');
    // let btn = document.querySelector('button');
    // btn.addEventListener('click', func);

    // function func() {
    // 	let str = '';
    // 	let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
    // 	for(let i = 0; i < 8; i++){
    // 		str += symbols.charAt(Math.floor(Math.random() * symbols.length));
    // 		inp.value = str;
    // 	}
    // }
    
    // //    №21 
    // let elem = document.querySelector("#elem")
    // let button = document.querySelector("#button")
    // button.addEventListener("click",func)
    // function func(){
    //   let a = ""
    //   let b = elem.value
    //   for(let i = 0; i<b.length; i++){
    //     a += b.charAt(Math.floor(Math.random() * b.length))
    //   }
    //   elem.value = a
    // }
    //     //  №22 
    //     let elem = document.querySelector("#elem")
    // let p = document.querySelector("#p")
    // let button = document.querySelector("#button")
    // button.addEventListener("click",func)
    // function func(){
    //   p.textContent = 5/9 * (elem.value - 32)
    // }
    //     //  №23
    //     let elem = document.querySelector("#elem")
    // let p = document.querySelector("#p")
    // let button = document.querySelector("#button")
    // button.addEventListener("click",func)
    // function func() {
    //     let a = elem.value
    //     for (let i = a - 1; i >= 1; i--) {
    //       a= a * i; 
    //     }
    //     p.textContent = a
    //   }
    //     // №24
    //     @@ -0,0 +1,27 @@
    // let elem1 = document.querySelector("#elem1")
    // let elem2 = document.querySelector("#elem2")
    // let elem3 = document.querySelector("#elem3")
    // let p = document.querySelector("#p")
    // let button = document.querySelector("#button")
    // button.addEventListener("click",func)
    // function func(){
    //     let a = elem1.value
    //     let b = elem2.value
    //     let c = elem3.value

    //     let x = b*b-4*a*c
    //     if (x<0){
    //         x1 = "нет корней"
    //         x2 = "нет корней"
    //     }
    //     else if (x===0){
    //         x1=-b/(2*a)
    //         x2=x1
    //     }
    //     else {
    //         x1=(-b+Math.sqrt(x))/(2*a)
    //         x2=(-b+Math.sqrt(x))/(2*a)

    //     }
    //     p.textContent = x1+" "+x2
    // }


    




