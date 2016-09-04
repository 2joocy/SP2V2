var studentArray = new Array();
function readClick(){ 
    document.getElementById("deleteButton").addEventListener("click", function() {
    alert("bingbang");
});
}
function addStudent() {
    var fullNameTemp = document.getElementById("fullName").value;
    var studentColorTemp = document.getElementById("category").value;
    var emailTemp = document.getElementById("email").value;
    var phoneTemp = document.getElementById("phone").value;
    var groupID = "";
    var studentTemp = new Student(fullNameTemp, emailTemp, phoneTemp, studentColorTemp, groupID);
    studentArray.push(studentTemp);
    getStudentInfo();
    getStudentInfo2();
    makeTable();
    alert("Student was added! \n\n Full Name: " + studentTemp.fullName + "\n Email: " + studentTemp.email + "\n Phone: " + studentTemp.phone + "\n Category: " + studentTemp.category);


}

function deleteStudent() {
    var e = document.getElementById("getStudents2");
    var strStudent = e.options[e.selectedIndex].value;
    
    for (var i = 0; i < studentArray.length; i++) {
        if (studentArray[i].fullName = strStudent) {
            delete studentArray[i];
            makeTable();
            getStudentInfo2();
            getStudentInfo();
        }

    }
}

var Student = function (fullName, email, phone, category, groupID) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.category = category;
    this.groupID = groupID;
};

function searchStudent(){
    var e = document.getElementById("searchStudent");
    var searchValue = e.value;
    for(var i = 0; i<studentArray.length; i++){
        if(searchValue === this.studentArray[i].fullName){
            alert("This student exists! \n Please look at the overview table for more info!");
        }else{
            alert("This student does not exist. Please add him / her if needed");
        }
    }
    
}

  function getVal(value){
     var butt =  document.getElementById("deleteButton");
     var buttValue = butt.value;
     butt.onclick(alert(buttValue));
  }


function makeTable() {
    var studentTable = document.getElementById("studentTable");
    var table = "";
    
    table = "<table class='table table-bordered'>";
    table += "<thead><tr><th>Full Name</th><th>Email</th><th>Phone</th><th>Category</th><th>Group</th><th></th></tr></thead>";
    table += "<tbody>";
    for (var i = 0; i < studentArray.length; i++) {
        table += "<tr><td>" + studentArray[i].fullName + "</td><td>" + studentArray[i].email + "</td><td>" + studentArray[i].phone + "</td><td>" + studentArray[i].category + "</td><td>" + studentArray[i].groupID + "</td><td><button id ='deleteButton'>X</button></td></tr>";
    }
    table += "</tbody>";
    table += "</table>";
    studentTable.innerHTML = table;
}

function getStudentInfo() {
    var studentOption = document.getElementById("studentOption");
    var option = "";
    option += "<select id='getStudents'><option>Select A Student</option>";
    for (var i = 0; i < studentArray.length; i++) {
        option += "<option value=" + studentArray[i].fullName + ">" + studentArray[i].fullName + "</option>";
    }
    option += "</select>";
    studentOption.innerHTML = option;


}

function getStudentInfo2() {
    var studentOption = document.getElementById("studentDelete");
    var option = "";
    option += "<select id='getStudents2'><option>Select A Student</option>";
    for (var i = 0; i < studentArray.length; i++) {
        option += "<option value=" + studentArray[i].fullName + ">" + studentArray[i].fullName + "</option>";
    }
    option += "</select>";
    studentOption.innerHTML = option;


}

function deleteAll(){
      for(i = studentArray.length; i++;) {
          delete studentArray[i];
      }
      makeTable();
      getStudentInfo();
      getStudentInfo2();
}

function editStudent(){
    var tempStudent;
    
    
}

function addGroup() {
    var e = document.getElementById("getStudents");
    var strStudent = e.options[e.selectedIndex].value;

    for (var i = 0; i < studentArray.length; i++) {
        if (studentArray[i].fullName === strStudent) {
            this.studentArray[i].groupID = document.getElementById("groupID").value;
        }

    }
    alert("Group has been assigned to student!");
    for (var i = 0; i < studentArray.length; i++) {
        console.log(studentArray[i].groupID);
    }
    makeTable();
    getStudentInfo();

}

