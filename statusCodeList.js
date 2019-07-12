module.exports = {
    '100': {
        metadata: 'Continue',
        description: 'This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.'
    },
    '101': {
        metadata: 'Switching Protocol',
        description: 'This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching to.'
    },
    '102': {
        metadata: 'Processing',
        description: 'This code indicates that the server has received and is processing the request, but no response is available yet.'
    },
    '103': {
        metadata: 'Early Hints',
        description: 'This status code is primarily intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response.'
    },
    '200': {
        metadata: 'OK',
        description: 'The request has succeeded'
    },
    '201': {
        metadata: 'Created',
        description: 'The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a POST request, or after some PUT requests.'
    },
    '202': {
        metadata: 'Accepted',
        description: 'The request has been received but not yet acted upon'
    },
    '203': {
        metadata: 'Non-Authoritative Information',
        description: 'This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy'
    },
    '204': {
        metadata: 'No Content',
        description: 'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.'
    },
    '205': {
        metadata: 'Reset Content',
        description: 'This response code is sent after accomplishing request to tell user agent reset document view which sent this request.'
    },
    '206': {
        metadata: 'Partial Content',
        description: 'This response code is used because of range header sent by the client to separate download into multiple streams.'
    },
    '300': {
        metadata: 'Multiple Choice',
        description: 'The request has more than one possible response. The user-agent or user should choose one of them. There is no standardized way of choosing one of the responses.'
    },
    '301': {
        metadata: 'Moved Permanently',
        description: 'This response code means that the URI of the requested resource has been changed permanently. Probably, the new URI would be given in the response.'
    },
    '302': {
        metadata: 'Found',
        description: 'This response code means that the URI of requested resource has been changed temporarily'
    },
    '303': {
        metadata: 'See Other',
        description: 'The server sent this response to direct the client to get the requested resource at another URI with a GET request.'
    },
    '304': {
        metadata: 'Not Modified',
        description: 'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.'
    },
    '305': {
        metadata: 'Use Proxy',
        description: 'Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.'
    },
    '306': {
        metadata: 'unused',
        description: 'This response code is no longer used, it is just reserved currently. It was used in a previous version of the HTTP 1.1 specification.'
    },
    '307': {
        metadata: 'Temporary Redirect',
        description: 'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.'
    },
    '308': {
        metadata: 'Permanent Redirect',
        description: 'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.'
    },
    '400': {
        metadata: 'Bad Request',
        description: 'This response means that server could not understand the request due to invalid syntax.'
    },
    '401': {
        metadata: 'Unauthorized',
        description: 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'
    },
    '402': {
        metadata: 'Payment Required',
        description: 'This response code is reserved for future use.'
    },
    '403': {
        metadata: 'Forbidden',
        description: 'The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response.'
    },
    '404': {
        metadata: 'Not Found',
        description: 'The server can not find requested resource.'
    },
    '405': {
        metadata: 'Method Not Allowed',
        description: 'The request method is known by the server but has been disabled and cannot be used.'
    },
    '406': {
        metadata: 'Not Acceptable',
        description: 'This response is sent when the web server, after performing server-driven content negotiation, doesn\'t find any content following the criteria given by the user agent.'
    },
    '407': {
        metadata: 'Proxy Authentication Required',
        description: 'This is similar to 401 but authentication is needed to be done by a proxy.'
    },
    '408': {
        metadata: 'Request Timeout',
        description: 'This response is sent on an idle connection by some servers, even without any previous request by the client.'
    },
    '409': {
        metadata: 'Conflict',
        description: 'This response is sent when a request conflicts with the current state of the server.'
    },
    '410': {
        metadata: 'Gone',
        description: 'This response would be sent when the requested content has been permanently deleted from server, with no forwarding address.'
    },
    '411': {
        metadata: 'Length Required',
        description: 'Server rejected the request because the Content-Length header field is not defined and the server requires it.'
    },
    '412': {
        metadata: 'Precondition Failed',
        description: 'The client has indicated preconditions in its headers which the server does not meet.'
    },
    '413': {
        metadata: 'Payload Too Large',
        description: 'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.'
    },
    '414': {
        metadata: 'URI Too Long',
        description: 'The URI requested by the client is longer than the server is willing to interpret.'
    },
    '415': {
        metadata: 'Unsupported Media Type',
        description: 'The media format of the requested data is not supported by the server, so the server is rejecting the request.'
    },
    '416': {
        metadata: 'Request Range Not Satisfiable',
        description: 'The range specified by the Range header field in the request can\'t be fulfilled; it\'s possible that the range is outside the size of the target URI\'s data.'
    },
    '417': {
        metadata: 'Expectation Failed',
        description: 'This response code means the expectation indicated by the Expect request header field can\'t be met by the server.'
    },
    '418': {
        metadata: 'I\'m a teapot',
        description: 'The server refuses the attempt to brew coffee with a teapot.'
    },
    '421': {
        metadata: 'Misdirected Request',
        description: 'The request was directed at a server that is not able to produce a response.'
    },
    '425': {
        metadata: 'Too Early',
        description: 'Indicates that the server is unwilling to risk processing a request that might be replayed.'
    },
    '426': {
        metadata: 'Upgrade Required',
        description: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.'
    },
    '428': {
        metadata: 'Precondition Required',
        description: 'The origin server requires the request to be conditional.'
    },
    '429': {
        metadata: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time ("rate limiting")'
    },
    '431': {
        metadata: 'Request Header Fields Too Large',
        description: 'The server is unwilling to process the request because its header fields are too large.'
    },
    '451': {
        metadata: 'Unavailable For Legal Reasons',
        description: 'The user requests an illegal resource, such as a web page censored by a government.'
    },
    '500': {
        metadata: 'Internal Server Error',
        description: 'The server has encountered a situation it doesn\'t know how to handle.'
    },
    '501': {
        metadata: 'Not Implemented',
        description: 'The request method is not supported by the server and cannot be handled.'
    },
    '502': {
        metadata: 'Bad Gateway',
        description: 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
    },
    '503': {
        metadata: 'Service Unavailable',
        description: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.'
    },
    '504': {
        metadata: 'Gateway Timeout',
        description: 'This error response is given when the server is acting as a gateway and cannot get a response in time.'
    },
    '505': {
        metadata: 'HTTP Version Not Supported',
        description: 'The HTTP version used in the request is not supported by the server.'
    },
    '506': {
        metadata: 'Variant Also Negotiates',
        description: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
    },
    '507': {
        metadata: 'Insifficient Storage',
        description: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
    },
    '508': {
        metadata: 'Loop Detected',
        description: 'The server detected an infinite loop while processing the request.'
    },
    '510': {
        metadata: 'Not Extended',
        description: 'Further extensions to the request are required for the server to fulfill it.'
    },
    '511': {
        metadata: 'Network Authentication Required',
        description: 'The 511 status code indicates that the client needs to authenticate to gain network access. (INTRANET)'
    }
}