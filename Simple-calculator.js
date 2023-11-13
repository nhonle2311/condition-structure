let View = document.getElementById('View');
function Inputvalue(value){
    View.value = value;
}
function Delete() {
    View.value =""
}
function Result() {
    let Result =eval(View.value);
    Result.value = value;
}