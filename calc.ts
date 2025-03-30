//not needed to explicitly define type as typescript will infer  the type based on value.
let memory = "";
// MS-storing memory
function storememory() {
  // ! to strictly tell that document of HTML is not null
  //HTMLInputElement because value exist only on Input element of HTML not all HTML element
  //has property value
  //document.getElementById will return object of HTMLElement type which does not have value property
  memory = (document.getElementById("screen") as HTMLInputElement).value;

  console.log(memory);
}
// MR recalling memory
function recallmemory() {
  (document.getElementById("screen") as HTMLInputElement).value = memory;
}
// M+ Adding memory
function plusmemory() {
  memory += "+" + (document.getElementById("screen") as HTMLInputElement).value;
  memory = eval(memory);
}
//M- Subtracting memory

function minusmemory() {
  memory += "-" + (document.getElementById("screen") as HTMLInputElement).value;
  memory = eval(memory);
}
//Clearing memory
function clearmemory() {
  memory = "";
}
// Deleting single value
function del() {
  var x = (document.getElementById("screen") as HTMLInputElement).value;
  (document.getElementById("screen") as HTMLInputElement).value = x.substr(
    0,
    x.length - 1
  );
}

//Factorial logic

function fact(d: number) {
  let m = 1;
  for (var a = 1; a <= d; a++) {
    m *= a;
  }
  //m is number and can't be assigned to string so forcing m to be string
  (document.getElementById("screen") as HTMLInputElement).value = m.toString();
}
let f = 0;
function f_to_e() {
  if (f == 0) {
    //typescript thinks  fte might not be present in HTML doc so we are forcefully telling
    // typescript will not get null value
    document.getElementById("fte")!.style.backgroundColor = "#4169e1";
    f = 1;
  } else {
    document.getElementById("fte")!.style.backgroundColor = "#dfe1e3";
    f = 0;
  }
}
// + to - and - to +
function change() {
  //as x is number and on right it was string you have to convert it to number
  var x = parseInt(
    (document.getElementById("screen") as HTMLInputElement).value
  );
  if (x > 0) {
    x = -x;
  } else {
    x = Math.abs(x);
  }
  //converting number to string for matching left side type
  (document.getElementById("screen") as HTMLInputElement).value = x.toString();
}
// logic of second button

let y = 0;

function second_btn() {
  if (y) {
    for (let element of document.getElementsByClassName("open") ) {
      //element is forced to be HTMLElement as it was first only Element type
      (element as HTMLElement).style.display = "none";
    }
    for (let element of document.getElementsByClassName("close") ) {
      (element as HTMLElement).style.display = "inline-block";
    }
    y = 0;
  } else {
    for (let element of document.getElementsByClassName("close") ) {
      (element as HTMLElement).style.display = "none";
    }
    for (let element of document.getElementsByClassName("open") ) {
      (element as HTMLElement).style.display = "inline-block";
    }
    y = 1;
  }
}
//logic of trignometic functions

function tri() {
  for (let element of document.getElementsByClassName("hypo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("hypo1") ) {
    (element as HTMLElement).style.display = "none";
  }

  for (let element of document.getElementsByClassName("trigo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("trigo1") ) {
    (element as HTMLElement).style.display = "inline-block";
  }
}
//logic of hypo functions
let h = 0;

function hypo(event: Event) {
  event.stopPropagation();
  for (let element of document.getElementsByClassName("hypo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("hypo1") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("trigo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("trigo1") ) {
    (element as HTMLElement).style.display = "none";
  }
  if (h == 0) {
    if (y == 1) {
      for (let element of (document.getElementsByClassName("hypo2"))) {
        (element as HTMLElement).style.display = "inline-block";
      }
    } else {
      for (let element of document.getElementsByClassName("hypo1")) {
        (element as HTMLElement).style.display = "inline-block";
      }
    }

    h = 1;
    document.getElementById("hyp_color")!.style.backgroundColor = "#4169e1";
  } else {
    if (y == 1) {
      for (let element of document.getElementsByClassName("trigo2") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    } else {
      for (let element of document.getElementsByClassName("trigo1") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    }
    h = 0;
    document.getElementById("hyp_color")!.style.backgroundColor = "#dfe1e3";
  }
}

function trigo_btn(event: Event) {
  event.stopPropagation();
  for (let element of document.getElementsByClassName("hypo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("hypo1") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("trigo2") ) {
    (element as HTMLElement).style.display = "none";
  }
  for (let element of document.getElementsByClassName("trigo1")  ) {
    (element as HTMLElement).style.display = "none";
  }
  if (y == 0) {
    if (h == 1) {
      for (let element of document.getElementsByClassName("hypo2") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    } else {
      for (let element of document.getElementsByClassName("trigo2") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    }

    y = 1;
    document.getElementById("two")!.style.backgroundColor = "#4169e1";
  } else {
    if (h == 1) {
      for (let element of document.getElementsByClassName("hypo1") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    } else {
      for (let element of document.getElementsByClassName("trigo1") ) {
        (element as HTMLElement).style.display = "inline-block";
      }
    }
    y = 0;
    document.getElementById("two")!.style.backgroundColor = "#dfe1e3";
  }
}
let x = false;
function deg() {
  if (x == false) {
    document.getElementById("dg")!.innerHTML = "RAD";
    x = true;
  } else {
    document.getElementById("dg")!.innerHTML = "DEG";
    x = false;
  }
}
//to dms (degree minute seconds)

function dms(D: string) {
  let DMS = parseFloat(D);
  return [
    0 | DMS,
    ".",
    0 | (((DMS = (DMS < 0 ? -DMS : DMS) + 1e-4) % 1) * 60),
    ".",
    0 | (((DMS * 60) % 1) * 60),
  ].join("");
}
//to degree
function dd(dms: string) {
  var d = dms.split(".");
  var m = d[1];
  var s = d[2];
  var dn = parseFloat(d[0]);
  var mn = parseFloat(m);
  var sn = parseFloat(s);
  return dn + mn / 60 + sn / 3600;
}
