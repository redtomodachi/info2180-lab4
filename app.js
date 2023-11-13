function searchList()
{
    var xammy = new XMLHttpRequest();
    xammy.onreadystatechange = function() {
        if(xammy.readyState === XMLHttpRequest.DONE){
            if(xammy.status === 200)
            {
                alert(xammy.responseText)
            } 
            else
            {
                console.log("Error")
            }
        }
    }

    xammy.open('GET',"http://localhost/info2180-lab4/superheroes.php",true)
    xammy.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xammy.send();
}




window.onload = function() {
    console.log("Page loaded");
    var  but = document.getElementById("Btn");
    but.addEventListener("click", searchList);

};
