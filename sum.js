const dots = document.querySelectorAll('.main_feedfriends_choise_input_range_form_sum_list_item');
const number = document.querySelector('.main_feedfriends_choise_input_number_form_digit');
const valueDot =document.querySelectorAll('.main_feedfriends_choise_input_range_form_sum_list_item_label');
const dotsBox = document.querySelector('.main_feedfriends_choise_input_range_form_sum');

number.value = 100;
dots[5].checked = true;
dotsBox.addEventListener('input' , ()=>{
    for(let i =0; i< dots.length; i++){
        if(dots[i].checked=== true){
            number.value = dots[i].value;
        }
    }
})
number.addEventListener('input', ()=>{
    for(let i =0; i< dots.length; i++){
        if(number.value == dots[i].value){
            dots[i].checked= true;
        } else dots[i].checked = false;
    }
})