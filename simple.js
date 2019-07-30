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
      '    <option value="partnerReportKey">Partner Report Key</option>' +
      '    <option value="reportGroupType">Report Group Type</option>' +
      '    <option value="reportFileName">Report File Name</option>' +
      '    <option value="emailTo">Email To</option>' +
      '    <option value="recordId">Report ID</option>' +
      '    <option value="reportFrequency">Report Frequency</option>' +
      '    <option value="reportTransmissionType">Report Transmission Type</option>' +
      '        <option value="ccTo">CC To</option>' +
      '        <option value="emailFrom">Email From</option>' +
      '        <option value="emailSubject">Email Subject</option>' +
      '        <option value="emailBody">Email Body</option>' +
      '        <option value="emailServer">Email Server</option>' +
      '        <option value="emailPort">Email Port</option>' +
      '        <option value="ftpServer">FTP Server</option>' +
      '        <option value="ftpUser">FTP User</option>' +
      '        <option value="ftpPassword">FTP Password</option>' +
      '        <option value="ftpEncodedPassword">FTP Encoded Password</option>' +
      '        <option value="ftpPort">FTP Port</option>' +
      '        <option value="ftpDirectory">FTP Directory</option>' +
      '        <option value="enabledFlag">Enabled Flag</option>' +
      '        <option value="disabledDate">Disabled Date</option>' +
      '        <option value="creationDate">Creation Date</option>' +
      '        <option value="createdBy">Created By</option>' +
      '        <option value="lastUpdateDate">Last Update Date</option>' +
      '        <option value="lastUpdateBy">Last Update By</option>' +
      '        <option value="programUpdateDate">Program Update Date</option>' +
      '        <option value="requestID">Request ID</option>' +
      '        <option value="changeNotes">Change Notes</option>' +
      '        <option value="businessApprover">Business Approver</option>' +
      '        <option value="BIFolder">BI Folder</option>' +
      '        <option value="BIPath">BI Path</option>' +
      '        <option value="BIMainReportName">BI Main Report Name</option>' +
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
          this.parentNode.parentNode.removeChild(this.parentElement);
        });
      });
    }
  } // End addField();
});

$(document).ready(function() {
    numCriteria = 1;
});
