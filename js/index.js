
function getInputValueById(id) {
   return parseFloat(document.getElementById(id).value);

}
function getTextValueById(id) {
   return parseFloat(document.getElementById(id).innerText);
}

function classList(id) {
   return document.getElementById(id).classList;
}

const donationButton1 = document.getElementById("donation1");
const donationButton2 = document.getElementById("donation2");
const donationButton3 = document.getElementById("donation3");


// card-1
donationButton1.addEventListener('click', function () {
   const amount1 = getInputValueById("donation1s");
   if (typeof amount1 === "number" && amount1 >= 0) {



      const bdt1 = getTextValueById("bdt1");
      const balance1 = bdt1 + amount1;
      document.getElementById('bdt1').innerText = balance1;
      const mainBdt = getTextValueById("main-bdt");
      const newBalance = mainBdt - amount1;
      document.getElementById('main-bdt').innerText = newBalance;

      const div = document.createElement('div');
      div.className = 'bg-purple-100 border-[2px] rounded-[6px] p-4 space-y-4';
      div.innerHTML = `<h2 class = "font-bold text-[20px] text-black">${amount1}Taka is Donated for Flood at Noakhali, Bangladesh </h2>
 <p class = "text-[16px] text-gray-400">Date : ${new Date().toLocaleDateString} Time : ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>`

      const newCard = document.getElementById('history-section')
      newCard.appendChild(div);
      document.getElementById('my_modal_1').showModal();
   }

   else {
      alert('plz try with number')
   }


})
// card-2
donationButton2.addEventListener('click', function () {
   const amount2 = getInputValueById("donation2nd");
   if (typeof amount2 === "number" && amount2 >= 0) {
      const bdt2 = getTextValueById("bdt2");
      const balance2 = bdt2 + amount2;
      document.getElementById('bdt2').innerText = balance2;
      const mainBdt = getTextValueById("main-bdt");
      const newBalance = mainBdt - amount2;
      document.getElementById('main-bdt').innerText = newBalance;


      const div = document.createElement('div');
      div.className = 'bg-purple-100 border-[2px] rounded-[6px] p-4 space-y-4';
      div.innerHTML = `<h2 class = "font-bold text-[20px] text-black">${amount2}Taka is Donated Flood Relief in Feni,Bangladesh  </h2>
 <p class = "text-[16px] text-gray-400">Date : ${new Date().toLocaleDateString} Time : ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>`

      const newCard = document.getElementById('history-section')
      newCard.appendChild(div);
      document.getElementById('my_modal_2').showModal();
   }

   else {
      alert('plz try with number')
   }
})
// card-3
donationButton3.addEventListener('click', function () {
   const amount3 = getInputValueById("donation3rd");
   if (typeof amount3 === "number" && amount3 >= 0) {
      const bdt3 = getTextValueById("bdt2");
      const balance3 = bdt3 + amount3;
      document.getElementById('bdt3').innerText = balance3;
      const mainBdt = getTextValueById("main-bdt");
      const newBalance = mainBdt - amount3;
      document.getElementById('main-bdt').innerText = newBalance;


      const div = document.createElement('div');
      div.className = 'bg-purple-100 border-[2px] rounded-[6px] p-4 space-y-4';
      div.innerHTML = `<h2 class = "font-bold text-[20px] text-black">${amount3}Aid for Injured in the Quota Movement </h2>
 <p class = "text-[16px] text-gray-400">Date : ${new Date().toLocaleDateString} Time : ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>`

      const newCard = document.getElementById('history-section')
      newCard.appendChild(div);
      document.getElementById('my_modal_3').showModal();
   }
   else {
      alert('plz try with number')
   }
})


// history 

document.getElementById('history')
   .addEventListener('click', function () {
      classList("history").add("bg-purple-400");
      classList("donation").remove("bg-purple-400");
      classList("donation-section").add("hidden");
      classList("history-section").remove("hidden");
   })

// donation

document.getElementById('donation')
   .addEventListener('click', function () {
      classList("donation").add("bg-purple-400");
      classList("history").remove("bg-purple-400");
      classList("donation-section").remove("hidden")
      classList("history-section").add("hidden");
   })


