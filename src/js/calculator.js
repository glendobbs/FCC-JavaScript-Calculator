$(document).ready(function() {
  /*checks if last character in string is a number*/
  function checkIfNum(sumStr) {
    var lastChar = sumStr.substr(sumStr.length - 1);
    if (!isNaN(lastChar)) {
      return true;
    } else {
      return false;
    }
  }
  /*checks if last character in string is an operator*/
  function checkIfOp(sumStr) {
    var lastChar = sumStr.substr(sumStr.length - 1);
    if (/([*/+-])/g.test(lastChar)) {
      return true;
    } else {
      return false;
    }
  }
  /*checks if equals button has been executed. Empties DIV if it has*/
  function checkTot(tot) {
    var value = $("div#display").text();
    if (tot === true || value === "0") {
      $("div#display").empty();
      sumStr = "";
      totTrue = false;
    }
  }
  /*chops of unnecessary digits if output has decimal point*/
  function float(val) {
    val = val.toString().split('');
    if (val.indexOf(".") !== -1) {
      var valtest = val.slice(val.indexOf(".") + 1, val.length);
      val = val.slice(0, val.indexOf(".") + 1);
      var i = 0;
      while (valtest[i] < 1) {
        i++;
      }
      valtest = valtest.join('').slice(0, i + 2);
      if (valtest[valtest.length - 1] === "0") {
        valtest = valtest.slice(0, -1);
      }
      return val.join('') + valtest;
    } else {
      return val.join('');
    }
  }
  /*places a zero in display when page loads*/
  function startZero() {
    $("div#display").html("0");
  }

  var sumStr = "";
  var totTrue = false;
  var numCount = 0;
  startZero();

  /*CLEAR BUTTONS*/
  $("button#CE").on("click", function() {
    if (totTrue === false) {
      $("div#display").text(function(i, txt) {
        if (!checkIfOp(sumStr)) {
          numCount--;
        }
        sumStr = sumStr.slice(0, -1);
        return txt.slice(0, -1);
      });
    } else {
      $("div#display").empty();
      sumStr = "";
      numCount = 0;
    }
  });
  $("button#AC").on("click", function() {
    startZero();
    sumStr = "";
    numCount = 0;
  });

  /*NUMERICAL BUTTONS*/
  $("button#seven").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("7");
        sumStr += "7";
        numCount++;
      } else {
        $("div#display").append("7");
        sumStr += "7";
        numCount++;
      }
    }
  });
  $("button#eight").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("8");
        sumStr += "8";
        numCount++;
      } else {
        $("div#display").append("8");
        sumStr += "8";
        numCount++;
      }
    }
  });
  $("button#nine").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("9");
        sumStr += "9";
        numCount++;
      } else {
        $("div#display").append("9");
        sumStr += "9";
        numCount++;
      }
    }
  });
  $("button#four").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("4");
        sumStr += "4";
        numCount++;
      } else {
        $("div#display").append("4");
        sumStr += "4";
        numCount++;
      }
    }
  });
  $("button#five").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("5");
        sumStr += "5";
        numCount++;
      } else {
        $("div#display").append("5");
        sumStr += "5";
        numCount++;
      }
    }
  });
  $("button#six").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("6");
        sumStr += "6";
        numCount++;
      } else {
        $("div#display").append("6");
        sumStr += "6";
        numCount++;
      }
    }
  });
  $("button#one").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("1");
        sumStr += "1";
        numCount++;
      } else {
        $("div#display").append("1");
        sumStr += "1";
        numCount++;
      }
    }
  });
  $("button#two").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("2");
        sumStr += "2";
        numCount++;
      } else {
        $("div#display").append("2");
        sumStr += "2";
        numCount++;
      }
    }
  });
  $("button#three").on("click", function() {
    checkTot(totTrue);
    if (numCount < 10) {
      if (checkIfOp(sumStr)) {
        $("div#display").empty().append("3");
        sumStr += "3";
        numCount++;
      } else {
        $("div#display").append("3");
        sumStr += "3";
        numCount++;
      }
    }
  });
  $("button#zero").on("click", function() {
    var value = $("div#display").text();
    if (value === "0" || checkIfOp(sumStr)) {
      return;
    }
    checkTot(totTrue);
    if (numCount < 10) {
      if (sumStr.length > 0) {
        $("div#display").append("0");
        sumStr += "0";
        numCount++;
      }
    }
  });

  /*OPERATOR BUTTONS*/
  $("button#divide").on("click", function() {
    if (checkIfNum(sumStr) && sumStr.length > 0) {
      $("div#display").empty().append("/");
      sumStr += "/";
      numCount = 0;
      totTrue = false;
    }
  });
  $("button#multiply").on("click", function() {
    if (checkIfNum(sumStr) && sumStr.length > 0) {
      $("div#display").empty().append("*");
      sumStr += "*";
      numCount = 0;
      totTrue = false;
    }
  });
  $("button#minus").on("click", function() {
    if (checkIfNum(sumStr) && sumStr.length > 0) {
      $("div#display").empty().append("-");
      sumStr += "-";
      numCount = 0;
      totTrue = false;
    }
  });
  $("button#plus").on("click", function() {
    if (checkIfNum(sumStr) && sumStr.length > 0) {
      $("div#display").empty().append("+");
      sumStr += "+";
      numCount = 0;
      totTrue = false;
    }
  });
  $("button#point").on("click", function() {
    var pointcheck = $("div#display").text().toString();
    if (pointcheck.indexOf(".") !== -1) {
      return;
    } else if (!checkIfNum(sumStr)) {
      $("div#display").empty().append("0.");
      sumStr += ".";
      numCount++;
    } else if (numCount < 10) {
      if (checkIfNum(sumStr) && sumStr.length >= 0) {
        $("div#display").append(".");
        sumStr += ".";
        numCount++;
      }
    }
  });
  $("button#equal").on("click", function() {
    var total = eval(sumStr);
    total = float(total);
    if (total.toString().length > 8) {
      $("div#display").html("<span class='error'>Exceeded digit limit</span>");
      totTrue = true;
      numCount = 0;
    } else {
      $("div#display").html(total);
      totTrue = true;
      numCount = 0;
      sumStr = total.toString();
    }
  });
});