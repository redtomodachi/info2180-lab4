function search()
{
    var result = document.getElementById("result");
    var info = document.getElementById("hero");
    console.log("it works")
    var xammy = new XMLHttpRequest();
    xammy.onreadystatechange = function() {
        if(xammy.readyState === XMLHttpRequest.DONE){
            if(xammy.status === 200)
            {
                result.innerHTML = xammy.responseText
            } 
            else
            {
                console.log("Error")
            }
        }
    }
    xammy.open("GET",`http://localhost/info2180-lab4/superheroes.php?query=${info.value}`,false)

    xammy.send();
}




window.onload = function() {
    console.log("Page loaded");
    var  but = document.getElementById("Btn");
    but.addEventListener("click", search);

};
