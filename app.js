const statusCodeList = require('./statusCodeList');

class StatusHelper {

  getInfoStatusCode(statusCode){
    if(!statusCode) return new Error('The paramter \'statusCode\' must be specified.');
    return statusCodeList[statusCode];
  }

  getInfoStatusByName(statusName){
    if(!statusName) return new Error('The paramter \'statusName\' must be specified.');
    return Object
      .values(statusCodeList)
      .map((data, i) => {
        if(data.metadata.toLowerCase() === statusName.toLowerCase()){
          data.indexOf = i;
          data.code = this.getAllStatusList()[i];
          return data;
        }
      })
      .filter(Boolean)[0];
  }

  getAllStatusList(){
    return Object.keys(statusCodeList);
  }

  getAllStatusWithDescription(likeArray = false){
    return likeArray ? 
      Object.entries(statusCodeList) :
      statusCodeList
  }

  getStatus(statusName, specify = 'code') {
    if(!statusName) return new Error('The paramter \'statusName\' must be specified.');
    return this.getInfoStatusByName(statusName)[specify];
  }
}

module.exports = () => StatusHelper;