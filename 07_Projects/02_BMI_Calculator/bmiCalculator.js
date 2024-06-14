const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if (height == '' || height<0 || isNaN(height)) {
    results.innerHTML = `please give a valid Height ${height}`
   }else if(weight == '' || weight <0 || isNaN(weight)){
    results.innerHTML = `please Enter a Valid Weight${weight}`
   }else{
    const bmi = (weight/((height*height)/1000)).toFixed(2)
    // show the results
    results.innerHTML = `<span>${bmi}</span>`
    }

    switch (bmi) {
        case bmi <18.6 :
            console.log(`Under Weight : ${bmi}`)
            break;
    
        case bmi <= 18.6 || bmi >= 24.9:
            console.log(`Perfect Weight ${bmi}`)
            break;
        case bmi > 24.9:
            console.log(`OverWeight ${bmi}`)
        break;
   }
});