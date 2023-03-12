const data = [{
    id: 1,
    show: 'The Last of us',
    place: 'HBO Max',
    status: 'Caught up',
  }, {
    id: 2,
    show: 'Friends',
    place: 'HBO Max',
    status: 'Watching',
  }, {
    id: 3,
    show: 'Outer Banks',
    place: 'Netflix',
    status: 'Watching',
  }, {
    id: 4,
    show: 'Tulsa King',
    place: 'Prime Video',
    status: 'Caught up',
  }];
  
  // Reference <tbody>
  const tB = document.querySelector("table").tBodies[0];
  
  /**
   * @desc - Generates table rows from data. A <table> must be in DOM.
   * @param {object<DOM>}   tbody   - Reference to a <table> or <tbody>
   * @param {array<object>} array   - An array of objects
   * @param {number<rest>}  headers - One or more numbers representing the
   *        index numbers of the first object of the array's keys. If 
   *        undefined it @default to all of the keys.
   */
  function createRows(tbody, array, ...headers) {

    const keys = Object.keys(array[0]); 
    let hdrs;

    if ([...headers].length < 1) {
      hdrs = keys;
    } else {
      hdrs = keys.filter((_, i) => [...headers].includes(i));
    }

    array.forEach(obj => {
      let tr = tbody.insertRow();
      hdrs.forEach(key => tr.insertCell().textContent = obj[key]);
    });
  }
  
  createRows(tB, data, 1, 2, 3);