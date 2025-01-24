let diverFon = document.querySelector('.oclock')
let pHour = document.querySelector('.p-hour')
let pDay = document.querySelector('.p-day')
 
function myTime(){
    let main = new Date;
    console.log(main)

    let hour = main.getHours()
    let hv=  main.getMinutes()
   let sknd = main.getSeconds()

   sknd = sknd < 10 ? '0' +sknd : sknd;
   hv = hv < 10 ? '0' +hv : hv;
   hour = hour < 10 ? '0' +hour : hour;
   pHour.innerHTML = hour +':'+ hv +':' + sknd



   let day = main.getDay()
   let nameDay = ['неділя','понеділок','вівторок', 'середа', 'четверг',"п'ятниця",'субота']
   let num = main.getDate();
   num = num < 10 ? '0' + num : num

   let mnth = main.getMonth()
   let mnthName = ['січень','лютитй','березень', 'квітень', 'травень','червень','липень','серпень','вереснь','жовтень','листопад','грудень']
   pDay.innerHTML = nameDay[day] + ', '+num + ' ' + mnthName[mnth] + ' ' + main.getFullYear();
}


myTime()

setInterval(()  => {
    myTime()
},1000)