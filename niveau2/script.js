//challange 1
function shuffleArray(t){
    let newt = [];
    for(let i =0;i<t.length;i++){
        let randome = Math.floor(Math.random()*t.length)
        if(!newt.includes(t[randome])){
            newt.push(t[randome]);
        }else{
            i--;
        }
    }
    console.log(newt);
}
shuffleArray([1,2,3,4,5,6])

// challange 2
function validateIPv4(ip) {
    const regex = /^(\d{1,3}\.){3}\d{1,3}$/;

    if (!regex.test(ip)) {
        console.log(false) ;
    }

    const ipp = ip.split(".");
    for (let i = 0; i < ipp.length; i++) {
        const valip = Number(ipp[i]);

        if (valip < 0 || valip > 255) {
            console.log(false) ;
        }
    }
    console.log(true) ;
}
validateIPv4("192.168.1.1");
validateIPv4("11.11.11.111");

//challange 3
function findKthSmallest(t,k){
    for(let i=0;i<t.length;i++){
        min =i;
        for(let j = i+1;j<t.length;j++){
            if(t[j] < t[min]){
                min=j;
            }
        }
        if(min!==i){
            let temp = t[i];
            t[i] = t[min];
            t[min] = temp;
        }
    }
    console.log(t);
    console.log(t[k-1]);
}
findKthSmallest([7,10,4,3,20,15],3);


//challange 4
function findIntersection(t1,t2){
    let len1 = 0; 
    let len2 = 0; 
    let list = [];

    while (len1 < t1.length && len2 < t2.length) {
        if (t1[len1] === t2[len2]) {
            list.push(t1[len1]);
            len1++;
            len2++;
        } else if (t1[len1] < t2[len2]) {
            len1++;
        } else {
            len2++;
        }
    }
    console.log(list);
}
findIntersection([1,2,3,4,5,6,7],[4,5,6,7,8,9]);


//challange5
function isAnagram(m1,m2){
    let mo1 = m1.split('');
    let mo2 = m2.split('');
    let isinclides = false;

    if(mo1.length !== mo2.length){
        isinclides= false;
    }else{
        for(let i=0;i<mo2.length;i++){
            if(mo1.includes(mo2[i])){
                isinclides=true;
            }else{
                isinclides=false;
            }
        }
    }
    if(isinclides){
        console.log(true);
    }else{
        console.log(false);
    }
}
isAnagram('listen','silent');


//challange 6 avec aide 
function rotateLeft(t,p){
    let res = t.slice(p).concat(t.slice(0, p));
    console.log(res)
}
 rotateLeft([1,2,3,4,5,6,7],2)




