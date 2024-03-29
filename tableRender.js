"use strict";

const editBTN = document.getElementById("tableEditBtn"); // select MAIN edit btn 
const saveBTN = document.getElementById("tableSaveBtn"); // select MAIN Save btn 

var editable = false; // for edit not to break if user hits edit twice

// Get JSON data that is saved for this specific table, and render the data to the page.
//------------------------- 
// this is commented out, if you want to load data when page loads this is how..
//------------------------- 
// $.ajax({
//     url: './api/data.json',
//     type: 'GET',
//     cache: false,
//     dataType: 'json',
//     contentType: 'application/json',
//     success: function (data) {
//         // data.forEach((item, idx) => {
//         //     //tableFilter(item, idx, len);
//         // });
//     },
//     error: function (err) {
//         //console.log(err);
//     }
// });

/* tableFilter - takes json data and fills this table with SPECIFIC structured data
 * this function creates a table UI from JSON data.
 * tableField - should take single item from ajax request data ( table row, or json {} )
 * This function is used in multiple places, careful when changing!
 */
function tableFilter(tableField, idx, len) {
    const tableBody = $('#tableBody')[0]; // html table tbody 
    const keys = Object.keys(tableField); // keys from the json object
    const vals = Object.values(tableField); // values from the json object

    let output = ''; // this is what we will return to the html page
    output += '<tr>'; // tr outside the <td> fields


    // For each key we will add a new td field with its values and set attributes to the td field
    keys.forEach((key) => {
        // check the key for case, then add appropriate html
        switch (key) {
            case "Report ID":
                output += "<td class='fixed-side' scope='col' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Partner Report Key":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Report Group Type":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Report Frequency":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Report Transmission Type":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Report File Name":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Datetime":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email To":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "CC To":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email From":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email Subject":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email Body":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email Server":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Email Port":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP Server":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP User":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP Password":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP Encoded Password":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP Port":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "FTP Directory":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Enabled Flag":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Disabled Date":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Creation Date":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Created By":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Last Update Date":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Last Update By":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Program Update Date":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Request ID":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Change Notes":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "Business Approver":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "BI Folder":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "BI Path":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            case "BI Main Report Name":
                output += "<td class='tableEditableData' key='" + key + "' value='" + tableField[key] + "'>" + tableField[key] + "</td>";
                break;
            default:
                break;
        }
    });
    output += '</tr>';
    // add the output data to the tableBody on the html page
    tableBody.innerHTML += output;
}

/*
 * init() - set up the event listeners, and to keep global namespace clean,
 *  and to ensure page has loaded before calling the event listeners
 **/
function init() {
    /*
        Event Listeners For the Table
    */
   const SEARCH_BTN = document.getElementById("searchButton"); // search button
   const SEARCH_FIELD = document.getElementById("searchVal"); // input field search
  
    // add event listener when search button is clicked
  SEARCH_BTN.addEventListener('click', function(e){
    window.editable = true; // editable is the state if edit button has been pressed or not.
    // selectedInputKey == Partner Report Key, Report ID etc..
    let itemList = document.querySelector(".itemList"); // grab the items
    let selectedInputKey = itemList.options[itemList.selectedIndex].value; //  current result filter Partner Report Key, Report ID etc..
    let searchVAL = SEARCH_FIELD.value; // search field value
    let tableBody = $('#tableBody')[0]; // html table tbody 
    
    // Clear old table
    tableBody.innerHTML = '';

    // grab additional user input fields
    let nextCriteria = document.querySelectorAll('.nextCriteria');
  
    // ajax call to get the list of data
    $.ajax({
        url: './api/data.json',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            let len = data.length;
            let tempData = data;

            // copy old table.json = dataType,
            // then create searched and filtered, 
            // and edit it out of orig then add to it.
            data.forEach((item, idx) => {
                let searchedArr = []; // empty arry to store values of already searched items
                // value of each SELECTED column.
                let itemVal = item[selectedInputKey].toLowerCase() || item[selectedInputKey];
                // Users main search value
                let searchValue = searchVAL.toLowerCase() || searchVAL;
                //blank search return all results
                if(searchVAL === ""){
                    searchedArr.push(item["Report ID"]); // add new items unique ID to the array of stored searches.
                    tableFilter(item, idx, len); // main function to display table data
                }
              
            // turn search inputs into array, rather than HTMLCOLLECTION
              let nextCriteriaArray = Array.from(nextCriteria);
              
              // additional input fields
              nextCriteriaArray.forEach( (nextItem) => {
                    // get table w/o clone
                    let mainTable = $('.table-wrap .main-table');
                    // turn table to json
                    let jsonTable = mainTable.tableToJSON();

                    //nextItem.nextSibling.firstChild.style.background = 'white';
                    let selectedOption = nextItem.firstChild.options[nextItem.firstChild.selectedIndex].value;
                    // searched value
                    let selectedValue = nextItem.nextSibling.firstChild.value;
                    let itemVal = item[selectedOption].toLowerCase() || item[selectedOption]; // get item value
                    
                    // if item["Report ID"] exists in searchedArr, then skip running tableFilter() on that item
                    if(!searchedArr.includes(item["Report ID"])){
                        //nextItem.nextSibling.firstChild.style.background = 'white';
                        if(itemVal === selectedValue){
                            searchedArr.push(item["Report ID"]);
                            // need to check Report ID to make sure no duplicate items
                            tableFilter(item, idx, len);
                        }
                      
                    } else {
                        //nextItem.nextSibling.firstChild.style.background = 'red';
                    }

                    
            });

            // Check for items that arent in the searched for array
            if(!searchedArr.includes(item["Report ID"])){
                // Normal 1 field search
                if(itemVal === searchValue){
                    searchedArr.push(item["Report ID"]);
                    // A match was found
                    tableFilter(item, idx, len);
                } // end if (itemVal === searchVal)
            } 
        });
        },
        //error check.
        error: function (err) {
            console.error(err);
        }
    });
  });

  //edit button clicked
    editBTN.addEventListener('click', function (e) {
        // get all data that is able to be edited
        const tableDataField = document.querySelectorAll(".tableEditableData");
        // Table body, rows
        const tableBodyRows = document.querySelector("#tableBody").children;
        // turn htmlcollection tableBodyRows into array
        const tableRowsArray = Array.from(tableBodyRows);

        // table header, table rows
        const headTR = document.querySelector("#thead").children;
        let th = document.createElement('th'); // create th ele
        th.setAttribute('class', 'thRadEdit'); // set class to thRadEdit
        let textNode = document.createTextNode('Radio Edit'); // append ele to html

        th.append(textNode); // append ele to html
        // editable - is for editBtn to not create another inner input field, it will if called twice.
        if (window.editable) {
            // create row for table header.. to keep table aligned properly
            headTR[0].prepend(th);

            // do a for each on the rows, add radio btn to the left.
            tableRowsArray.forEach((row, index) => {
                //create radio btn, and set attribs
                let radioInput = document.createElement("input");
                radioInput.setAttribute('type', 'radio'); // create radio input
                radioInput.setAttribute('name', 'radio_table_edit'); // set name
                radioInput.setAttribute('class', 'radio_table_edit'); // set class
                // prepend tr child radioInput before the current tr
                row.prepend(radioInput); 

                /*
                 * The below code will turn blank inputs into "null" -- this will help avoid * errors with empty space table data.
                 */
                let rowArr = Array.from(row.children);
                // for each rows data fields
                rowArr.forEach((data, idx) => {
                    //if idx  > 1 so it wont toggle report id field.
                    if (idx > 1) {
                        // tempVal = current Data Value
                        let tempVal = data.innerText;
                        let id = "t-input" + idx;

                        // if tempval isnt a viable value
                        if (!tempVal) {
                            tempVal = 'null';
                        }
                        // create input field with value in the td
                        data.innerHTML = tempVal;
                    }

                });

                // Radio event listener inside of thje loop so each radio button will get its own event listener.
                radioInput.addEventListener('click', function (e) {
                    // to clear old fields and add the latest data
                    tableDataField.forEach((data, idx) => {
                        // let val = data.firstChild.value || ""; ??
                        //editable data
                        if (data.firstChild.value) {
                            // add edited data to new html results
                            let tempVal = data.firstChild.value;
                            data.innerHTML = tempVal;
                        }
                    });

                    //if(row.editable){
                    // radio button 
                    let radioBtn = e.target;
                    // if radio is checked
                    if (e.target.checked = 'checked') {
                        let rowArr = Array.from(row.children);
                        // for each rows data fields
                        rowArr.forEach((data, idx) => {
                            //if idx  > 1 so it wont toggle report id field.
                            if (idx > 1) {
                                // tempVal = current Data Value
                                let tempVal = data.innerText;
                                let id = "t-input" + idx; // unique id

                                if (!tempVal) { // chekc to make sure tempVal exists
                                    tempVal = 'null';
                                }
                                // create input field with value in the td
                                data.innerHTML = '<input type="text" id="' + id + '" class="t-input" value="' + tempVal + '" />';
                            }
                        });
                    }
                    //}
                });
            });
            // safety check, so no dupe radio btns
            window.editable = false;
        }
    });

    // Save button clicked
    saveBTN.addEventListener('click', function (e) {
        // Pop up box to ensure you actually do want to save
        const popUpSaveCheck = document.getElementById("popUpSaveCheck"); // pop up div
        const saveBtn = document.getElementById("saveBtn"); // saveBtn for pop up check 

        // Show save pop up, default is 'hidden'
        popUpSaveCheck.style.display = 'block';

        // Save button, inside pop up save.
        saveBtn.addEventListener('click', function (e) {
            popUpSaveCheck.style.display = 'none'; // after hitting save, it will go away
            const tableDataField = document.querySelectorAll(".tableEditableData"); // grab the editable fields

            // loop over the fields
            tableDataField.forEach((data, idx) => {
                // inner HTML with new data
                if (data.firstChild.value !== null &&
                    data.firstChild.value !== undefined &&
                    data.firstChild.value !== "") {
                    // set html value of field
                    let tempVal = data.firstChild.value || 'null';
                    data.innerHTML = tempVal;
                }
            });

            //remove the radio edit row and btn
            let radio_table_edit = document.querySelectorAll('.radio_table_edit'); //  get all edited fields
            let thRadEdit = document.querySelectorAll('.thRadEdit'); // get edited header

            //remove radios
            radio_table_edit.forEach((td) => {
                //complete removal of tr radios
                td.parentNode.removeChild(td);
            });
            // remove head
            thRadEdit.forEach((td) => {
                //complete removal of tr radios header
                td.parentNode.removeChild(td);
            });


            // toggle edit btn, basically so the function wont be called twice and wont overwrite itself.
            window.editable = true;

            // get table w/o clone
            const mainTable = $('.table-wrap .main-table');
            // turn table to json
            let jsonTable = mainTable.tableToJSON();

            // call ajax to get list of old data
            $.ajax({
                url: './api/data.json',
                type: 'GET',
                cache: false,
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    let len = data.length; // grab length
                    let addedData = []; // empty array, later will create data of json object
                    
                    // this step grabs new data from current jsonTable and adds to addedData
                    for( let x = 0;  x < len; x++){
                        if(jsonTable[x]){
                           addedData.push(jsonTable[x]); // add json data to addedData
                        }else{
                           //addedData.push({"Report ID": "null"});
                        }
                    }
                    //set added data idx to match up with the json report id
                    addedData.forEach( (newData) => {
                        // make sure newData isnt falsy
                        if(newData){
                            let idx = newData["Report ID"];
                            //data[idx] = new data, modifiy the old json data with just adding new json data
                            data[idx] = newData;
                        }
                    });

                    
                    // finally call save here, with newData updated into data
                    // will send data to the php file.
                    $.ajax({
                        url: './save_json.php',
                        type: 'POST',
                        data: { data: JSON.stringify(data) },
                        success: function (d) {
                            // edit html here, after php page is done..
                            //console.log(d);
                        },
                        error: function (err) {
                            // there is an error saving, will report it to the console
                            console.error(err);
                        }
                    });
                    
                },

                error: function (err) {
                    console.log(err);
                }
            });
             
            

            // Send data to php file to update json
            
        }); // End save btn event

        // cancel button.. just remove save pop up
        const cancelBtn = document.getElementById("cancelBtn");

        cancelBtn.addEventListener('click', function (e) {
            // remove pop up, if you decide to cancel the save
            popUpSaveCheck.style.display = 'none';
        });

    });
}

// run it all!
$(document).ready(function () {
    init(); // get initial data after page has loaded
});




//module.exports = tableFilter;
