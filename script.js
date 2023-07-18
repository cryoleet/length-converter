var conversion = {
  m: 1,
  ft: 3.2808,
  in: 39.37,
  cm: 100,
  yd: 1.0936,
  km: 0.001,
  mi: 0.00062137,
};

inp = document.getElementById("input");
out = document.getElementById("output");

to = document.getElementById("to");
from = document.getElementById("from");

// to.addEventListener("change", update);
// from.addEventListener("change", update);

var eventList = ["change", "keyup", "paste", "input", "propertychange"];
for (event of eventList) {
  inp.addEventListener(event, update);
  to.addEventListener(event, update);
  from.addEventListener(event, update);
}

function update() {
  console.log("call detected");
  out.value = inp.value * (1 / conversion[from.value]) * conversion[to.value];
}
