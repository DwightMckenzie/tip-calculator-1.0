const bill = document.getElementById('bill');
const tip = document.getElementById('tip-slct');
const tipPrc = document.getElementById('tip-perc');
const calcBtn = document.getElementById('calc');
const rcpt = document.getElementById('rcpt-wrppr');
const total = document.getElementById('reciept');

calcBtn.addEventListener('click', function(){
  const dte = new Date();
  let mnth = dte.getMonth() + 1;
  let dy = dte.getDate();
  let yr = dte.getFullYear();
  let hr = dte.getHours();
  let min = dte.getMinutes();

  var a = bill.value;
  if (a === "") {
    alert('Please Fill Bill Amount Field');
  } else {
    
    if (hr > 12) {
      hr = hr -= 12;
    }
    if (min < 10) {
      min = "0" + min;
    }

    let rcptDte = `${mnth}/${dy}/${yr} - ${hr}:${min}`;

    let billAmt = parseFloat(bill.value);
    let tipAmt = (billAmt * (tip.value / 100)).toFixed(2);
    let totalAmt = (billAmt + parseFloat(tipAmt)).toFixed(2);
    let reciept = `<table class="rcpt-tbl">
                      <tbody>
                        <tr>
                          <td class="itm">Date:</td>
                          <td class="info">${rcptDte}</td>
                        </tr>
                        <tr>
                          <td class="itm">Bill:</td>
                          <td class="info">${billAmt}</td>
                        </tr>
                        <tr>
                          <td class="itm">Tip Percent:</td>
                          <td class="info">${tip.value} %</td>
                        </tr>
                        <tr>
                          <td class="itm">Tip Amount:</td>
                          <td class="info">${tipAmt}</td>
                        </tr>
                        <tr>
                          <td class="itm">Total:</td>
                          <td class="info">${totalAmt}</td>
                        </tr>
                      </tbody>
                    </table>`;

    total.innerHTML = reciept;

    rcpt.hidden = false;

  }

});
