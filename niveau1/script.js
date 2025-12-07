// chalange 1 
console.log("Hello, World!");


//chalange 2
nbr1 = 3 ;
nbr2 =5;
console.log("the sum of",nbr1,"and",nbr2,"is",nbr1+nbr2 );


//challange 3 
nbr= 11;
if(nbr%2==0){
    console.log("is pair");
}else{
    console.log("is inpair");
}

//chalange 4
mot ='hello';
rev =(mot.split('')).reverse().join('');
console.log(rev);

//chalange 5
t=[1,243,22313,12321323,31122,212,1212,121233,32]
max =0;
min =t[0];
for(let i =0;i<t.length;i++){
    if(t[i]>max){
        max=t[i];
    }
    if(t[i]<min){
        min=t[i];
    }
}
console.log("le max est ",max);
console.log("le min est ",min);


//chalange 6
function findMinMaxElements(t){
    max =0;
    min =t[0];
    for(let i =0;i<t.length;i++){
        if(t[i]>max){
            max=t[i];
        }
        if(t[i]<min){
            min=t[i];
        }
    }
    console.log("For the array",t);
    console.log("Maximum element:",max);
    console.log("Minimum element:",min);
}
findMinMaxElements([1,2,3,4,5,6,7,8,9,7465,32]);



// chalange 7
function isLeapYear(anne){
    if((anne%4==0 && anne%100!=0) || anne%400 ==0){
        console.log("année bissextile ")
    }else{
        console.log("année non bissextile ")
    }
}
isLeapYear(2020);


//chalange 8
function reverseWords(phrase){
    motreverce= '';
    motSplit = phrase.split(' ');
    for(let i =0;i<motSplit.length;i++){
        motajouter = (motSplit[i].split('')).reverse().join('');
        console.log(motajouter)
        motreverce += motajouter+' ';
    }
    console.log(motreverce);
}
reverseWords('ayoub errak');


//challange 9 avec aide
function calculateFactorial(nbr){
    if(nbr===0){
        return 1
    }
    return nbr*=calculateFactorial(nbr-1);    
}
console.log(calculateFactorial(0));


//chalange 10
function capitalizeFirstLetter(phrasee){
    let phraseS = phrasee.split(' ');
    for(let i = 0;i<phraseS.length;i++){
        let motS = phraseS[i];
        phraseS[i] = motS[0].toUpperCase()+motS.slice(1);
    }
    console.log(phraseS.join(' '))
}
capitalizeFirstLetter('ayoub errak');


//challange 11
function sumOfArray(t){
    let somme =0;
    for(let i=0;i<t.length;i++){
        somme +=t[i];
    }
    console.log(somme);
}
sumOfArray([2000,2000]);


//challange 12
function isPalindrome(nbr){
    let nbrS = nbr.toString();
    let nbrR = nbrS.split('').reverse().join('');
    if(nbr == nbrR){
        console.log("is palindrome");
    }else{
        console.log(" non palindrome")
    }
}
isPalindrome(2222222221);


//challange 13
function countVowels(phraseee){
    let countt = 0;
    phraseSplit = phraseee.split('');
    for(let i=0;i<phraseSplit.length;i++){
        if(phraseSplit[i]==='a' || phraseSplit[i]==='i' || phraseSplit[i]==='e' || phraseSplit[i]==='o' || phraseSplit[i]==='u'){
            countt++;
        }
    }
    console.log(countt);
}
countVowels('ayoub errak');


//challange 14
function removeDuplicates(t){
    let newt = [];
    for(let i=0;i<t.length;i++){
        if(!newt.includes(t[i])){
            newt.push(t[i]);
        }
    }
    console.log(newt);
}
removeDuplicates([1,1,2,3,4,4,5,5,5,5])

//challange 15
function isAlphanumeric(mot){
    let rejexMot = /^[a-zA-Z0-9]+$/;
    console.log(rejexMot.test(mot));
}
isAlphanumeric('ayoub12@');

//challange 16
function isvalid(email){
    let rejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(rejex.test(email));
}
isvalid('ayoub@gmail.com');

//challange 17
function isvalidcolor(color){
    let rejex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;
    console.log(rejex.test(color));
}
isvalidcolor('#FFA530');

//challange 18

function convertTemperature(temp,u){
    let tempConverti =0;
    if(u==='F' || u==='f'){
        tempConverti = (temp - 32) * 5/9
    }else if(u==='C' || u==='c'){
        tempConverti = (temp * 9/5) + 32
    }
    console.log(tempConverti);
}
convertTemperature(30,'c');
convertTemperature(86,'f');

//challange 19 
function generatePassword(len) {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let pass = "";
  for (let i=0;i<len;i++){
    pass =pass+alpha[Math.floor(Math.random() * alpha.length)];
  }
  console.log(pass);
}

generatePassword(10);


//challange 20
function findMissingNumber(t){
    
    for(let i = 0;i<t.length-1;i++){
        let ver = t[i]+1;
        if(t[i+1]!==ver){
            console.log(ver);
        }
    }
}

findMissingNumber([1,2,3,5,6,7,8,10]);