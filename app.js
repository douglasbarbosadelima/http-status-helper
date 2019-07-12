const statusCodeList = require('./statusCodeList');

class StatusHelper {

  getInfoStatusCode(status){
    return statusCodeList[status];
  }

  getInfoStatusByName(statusName){
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
    return this.getInfoStatusByName(statusName)[specify];
  }
}