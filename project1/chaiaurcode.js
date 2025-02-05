const form = document.querySelector('form');
// this usecase will give you empty
// const heigth = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `please give rigth value insted of ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `please give rigth value insted of ${weight}`;
    }else{
      const BMI = (weight/((height*height)/1000)).toFixed(2);
      // show the result
      results.innerHTML = `<span>${BMI}</span>`;
    }
});