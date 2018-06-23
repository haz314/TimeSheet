
//<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA80D5vpl2RVHgMMHE71ElHN1cPgXtSzXI",
    authDomain: "employee-database-e9904.firebaseapp.com",
    databaseURL: "https://employee-database-e9904.firebaseio.com",
    projectId: "employee-database-e9904",
    storageBucket: "",
    messagingSenderId: "765794147328"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //on-click event to generate new rows and tables
  $("#submit-btn").on("click", function() {
      var name = $("#name-input").val().trim();
      var role = $("#role-input").val().trim();
      var date = $("#date-input").val().trim();
      var rate = $("#rate-input").val().trim();

      var newRow = $("<tr>");
      for (i = 0; i < 6; i++) {
         var newColumn = $("<td>");
         newColumn.text(name);
         newColumn.text(role);
         newColumn.append(date);
         newColumn.append(rate);
         $("#")
      };

      database.ref().push({
          name: name,
          role: role,
          date: date,
          rate: rate,
      })


  });

  dataRef.ref().on("child_added", function(childSnap) {
      console.log(childSnap.val().name)
      console.log(childSnap.val().role)
      console.log(childSnap.val().date)
      console.log(childSnap.val().rate)
      console.log(childSnap.val().name)
      console.log(childSnap.val().name)

      var employeeTable = $("#employeeTable");
      var newRow = $("<tr>");
      var nameCell = $("<td>")
      var roleCell = $("<td>")
      var startDateCell = $("<td>")
      var rateCell = $("<td>")
      var monthlyRateCell = $("<td>")
      var totalBilledCell = $("<td>")

      $("#full-member-list").append("<div class='employee-table'><span class='employee-name'> " + childSnap.val().name + 
      " </span><span class='employee-role'> " + childSnap.val().role +
      " </span><span class='employee-start-date'> " + childSnap.val().date +
      " </span><span class='employee-rate'> " + childSnap.val().rate + "</span></div>");

      //error-handlling
   }, function(errorObject) {
     $("");
      


  });