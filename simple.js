"use strict";

var numCriteria = 1;
var app = angular.module('myApp', []);
app.controller('userCtrl', function($scope, $http) {
  $http.get("config.php")
  .then(function (response) {$scope.reports = response.data.records; console.log(response.data.records);});


  $scope.addField = function(){
    //Check to see if there are 5 added input fields
    if($('.nextCriteria').length >= 4){
      // max additional input fields reached.. do nothing
    } else {
      var field = '<span id="keySelectDiv" class="form nextCriteria">' +
      '<select name="key">' +
      '    <option value="Partner Report Key">Partner Report Key</option>' +
      '    <option value="Report Group Type">Report Group Type</option>' +
      '    <option value="Report File Name">Report File Name</option>' +
      '    <option value="Email To">Email To</option>' +
      '    <option value="Report ID">Report ID</option>' +
      '    <option value="Report Frequency">Report Frequency</option>' +
      '    <option value="Report Transmission Type">Report Transmission Type</option>' +
      '        <option value="CcTo">CC To</option>' +
      '        <option value="Email From">Email From</option>' +
      '        <option value="Email Subject">Email Subject</option>' +
      '        <option value="Email Body">Email Body</option>' +
      '        <option value="Email Server">Email Server</option>' +
      '        <option value="Email Port">Email Port</option>' +
      '        <option value="Ftp Server">FTP Server</option>' +
      '        <option value="Ftp User">FTP User</option>' +
      '        <option value="Ftp Password">FTP Password</option>' +
      '        <option value="Ftp Encoded Password">FTP Encoded Password</option>' +
      '        <option value="Ftp Port">FTP Port</option>' +
      '        <option value="Ftp Directory">FTP Directory</option>' +
      '        <option value="Enabled Flag">Enabled Flag</option>' +
      '        <option value="Disabled Date">Disabled Date</option>' +
      '        <option value="Creation Date">Creation Date</option>' +
      '        <option value="Created By">Created By</option>' +
      '        <option value="Last Update Date">Last Update Date</option>' +
      '        <option value="Last Update By">Last Update By</option>' +
      '        <option value="Program Update Date">Program Update Date</option>' +
      '        <option value="Request ID">Request ID</option>' +
      '        <option value="Change Notes">Change Notes</option>' +
      '        <option value="Business Approver">Business Approver</option>' +
      '        <option value="BI Folder">BI Folder</option>' +
      '        <option value="BI Path">BI Path</option>' +
      '        <option value="BI Main Report Name">BI Main Report Name</option>' +
      '</select>' +
      '</span>'   +
  
      '<span id="searchValDiv" class="form">' +
        '<input type="text" id="searchVal">' +
      '</span>' +
      '<span id="remove-button" class="remove-item">-</span>';


      var container = document.createElement("div");
      container.innerHTML = field;

      numCriteria += 1;
      
      container.id = "criteria" + numCriteria;
      $('#searchDiv').append('<div id="criteria' + numCriteria + '" class="criteria">' + field + '</div>');
      //document.getElementById("searchDiv").innerHTML += '<div id="criteria' + numCriteria + '">' + field + '</div>';

      // remove button for each - symbol on the input fields
      let deleteButton = $('.remove-item');
      $.each( deleteButton, function(index, item){
        item.addEventListener('click', function(e){
          const inputRow = this.parentElement;

          // Remove element
          // dont error on null
          if(this.parentNode.parentNode !== null){
            this.parentNode.parentNode.removeChild(this.parentElement);
          }
          
        });
      });
    }
  } // End addField();
});

$(document).ready(function() {
    numCriteria = 1;
});
