
var request=new XMLHttpRequest()
request.open('GET',"https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
var countriesData =JSON.parse(request.response)

for (let i=0; i<countriesData.length; i++){
    console.log(i+1+". "+countriesData[i].flags.png)
}

 for(var i=0;i<countriesData.length;i++){
    console.log(i+1 + ". "+ countriesData[i].name.common +"'s region is " + countriesData[i].region + " - subregion is " +countriesData[i].subregion + " - population is " +countriesData[i].population);
 }

}

