let select = document.querySelectorAll('.select')
let input = document.getElementById("input")
let btn = document.getElementById("btn")

btn.addEventListener('click',()=>{
    if(select[0].value === select[1].value){
        alert("Choose different values")
    }else{
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${input.value}&from=${select[0].value}&to=${select[1].value}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById("result").value = Object.values(data.rates)[0]
    
  });
}
})

fetch('https://api.frankfurter.app/currencies')
.then((res)=> res.json())
.then((res)=> display(res))

function display(res){
    let curr = Object.entries(res);
    for(let i=0;i<curr.length;i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt;
        select[1].innerHTML+=opt;
    }
}