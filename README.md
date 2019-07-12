<p>
 <a href="https://david-dm.org/douglasbarbosadelima/http-status-helper">
    <img src="https://david-dm.org/douglasbarbosadelima/http-status.helper.svg"
         alt="Dependency Status">
  </a>
 <a href="https://www.npmjs.com/package/http-status-helper">
    <img src="https://img.shields.io/npm/v/http-status-helper.svg?style=flat-square"
      alt="NPM Version">
  </a>
  <a href="https://www.npmjs.org/package/http-status-helper">
    <img src="http://img.shields.io/npm/dm/http-status-helper.svg?style=flat-square"
      alt="Downloads">
  </a>
</p>

# http-status-helper
This package will help a send the necessary and correct status into Request's

- How to use:

```js
const StatusHelper = require('http-status-helper');
const status = new StatusHelper();
```

*__Note__*: Into your Request, use __getStatus()__ method (*Default is return the code of status*):
```js
  router.get('/', (req, res, next) => {
    res.status(status.getStatus('OK')).send('Hello, World');
  });
```

*To use another information retrieve __getStatus()__ method, use*:
```js
  status.getStatus('OK', 'description'); // The request has succeeded
  status.getStatus('Forbidden', 'code'); // 403
  status.getStatus('Not Found', 'metadata'); // 'Not Found'
```

- Method List:
  - getInfoStatusCode(*__required Code__*) (*Return an Object with status information's*):
    ```js
      status.getInfoStatusCode(200); // { metadata: 'OK', description: 'The request has succeeded' }
    ```
   - getInfoStatusByName(*__required Name__*) (*Return an Object with status information's*):
    ```js
      status.getInfoStatusByName('OK'); // { metadata: 'OK', description: 'The request has succeeded', indexOf: 4, code: 200 }
    ```
   - getAllStatusList() (*Return an Array with all status code*):
    ```js
      status.getAllStatusList(); // [ '100', '101', '102', '103', '200', '201', '202', '203', ...]
    ```
   - getAllStatusWithDescription(*__likeArray = false__*) (*Return an Object or Array with All status information's*):
    ```js
      status.getAllStatusWithDescription(true); // ['200', { metadata: 'OK', description: 'The request has succeeded' }, '201', ...]
      status.getAllStatusWithDescription(false); // { '508': { metadata: 'Loop Detected', description: 'The server detected an infinite loop while processing the request.'}, ...
    ```
   - getStatus(*__required statusName__*) (*Return an specific information about status*):
   ```js
    status.getStatus('OK', 'description'); // The request has succeeded
    status.getStatus('Forbidden', 'code'); // 403
    status.getStatus('Not Found', 'metadata'); // 'Not Found'
  ```
