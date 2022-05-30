const valorTicket=200

function calculartotal(){
    let cant=document.getElementById("cant").value
    let cate=document.getElementById("cate").value

    if(cate==1){
        desc=80
    } else if(cate==2){
        desc=50
    } else{
        desc=15
    }

    let total=cant*valorTicket

    total-=total*desc/100

    document.getElementById("total").innerHTML=total
}