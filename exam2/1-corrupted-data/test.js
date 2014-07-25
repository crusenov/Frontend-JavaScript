"use strict";

var corruptedData = require("./app.js").corruptedData;
var data = require("./data");

exports.testCorruptedData = function(test) {
  var expectedResult = [{ pk: 276,
                          model: 'students.checkin',
                          fields: { date: '2014-06-05', mac: '00:24:d7:39:3a:8c', student: 22 } },
                        { pk: 344,
                          model: 'students.checkin',
                          fields: { date: '2014-06-07', mac: 'e0:2a:82:aa:02:a1', student: 1 } },
                        { pk: 417,
                          model: 'students.checkin',
                          fields: { date: '2014-06-10', mac: '00:24:d7:39:3a:8c', student: 22 } },
                        { pk: 445,
                          model: 'students.checkin',
                          fields: { date: '2014-06-12', mac: '78:92:9c:2e:44:0a', student: 36 } },
                        { pk: 560,
                          model: 'students.checkin',
                          fields: { date: '2014-06-26', mac: 'e0:2a:82:aa:02:a1', student: 1 } },
                          { pk: 552,
                          model: 'students.checkin',
                          fields: { date: '2014-06-26', mac: 'e0:2a:82:52:52:a4', student: 5 } }];

  test.deepEqual(expectedResult, corruptedData(data));
  test.done();
};
