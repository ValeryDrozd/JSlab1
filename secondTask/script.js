function echo(){
    document.getElementById("toCopy").textContent = document.getElementById("textSrc").value;
    document.getElementById("textSrc").value = "";
}
