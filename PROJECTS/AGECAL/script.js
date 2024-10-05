const calculatebtn = document.querySelector(".calculate");
const output = document.querySelector(".outputtxt");

const userinput = document.querySelector(".dateinput");
userinput.max = new Date().toISOString(),split("T")[0];

function calculateAge(){
    let birthdate = new Date(userinput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() +1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3, m3,y3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m3;

    }
    else{
        y3--;
        m3 = 12+ m2 -m1;
    }

    if(d2>= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDaysinMonth(y1,m1)+ d2-d1;

    }

    if(m3<0){
        m3 = 11;
        y--
    }

    console.log(y3,m3,d3);
    
}

function getDaysinMonth(year , month){

    return new Date(year,month , 0).getDate();


}

calculatebtn.addEventListener("click", calculateAge);