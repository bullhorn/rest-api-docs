# Authorization

User authorization and session management use the following flow:

1.  A URL with prescribed parameters exists to provide authorization services.
2.  To authenticate, a client sends a request to that URL with credentials in the appropriate parameters.
3.  If authorization is successful, the API will send back a session key. This is a token that represents a session established by the login process, and must be sent along with all subsequent requests to the API. The session key can be provided in a URL query string, a cookie or a special HTTP header. See for details on how to provide it.
4.  For individual user logins, the login call also sends back a URL with which all subsequent API requests must be prefixed.

## Unauthorized Requests

If a client makes a request and does not include a session key, the server will send a response with HTTP status `412` (precondition failed). If a client request contains an invalid session key, the response status will be HTTP `401` (unauthorized). For more information on HTTP status codes see [Errors.](/#errors).

## Session Key

The REST API has the concept of a client "session". This is essentially a method for allowing clients to authenticate themselves once and then be free of the need to authenticate for subsequent calls to the API.

Since REST is a stateless protocol, there must be a mechanism for clients to identify themselves upon each request, so the requests can be tied to an established session. This is what the session key provides.

Login calls return, as part of their responses, a session key that represents a successful authorization and can be used to make further calls without having to authenticate.

This key must be provided in HTTP requests in at least one of the following places:

1.  A query parameter named `BHRestToken` on the request URL.
2.  An HTTP header named `BHRestToken`.
3.  A cookie named `BHRestToken`. This cookie is set by the API at login time as a convenience for browser-based clients.
