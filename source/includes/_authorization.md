# Authorization

User authorization and session management use the following flow:

1. An OAuth 2.0 access token is returned though the OAuth 2.0 authorization flow. For more information about the OAuth flow, see [Getting Started with REST](/Getting-Started-with-REST)
2. A REST API login call that contains the access token as a query parameter is made. If this call is sucessful, a token named BHRestToken is returned. This token represents a session established by the login process; it must be sent along with all subsequent requests to the REST API. The BhRestToken can be provided in a URL query string, a cookie, or an HTTP header.
3. The login call also returns a base URL with which all subsequent API requests must be prefixed.

## Unauthorized requests

If a client makes a request and does not include a BhRestToken, the server sends a response with HTTP status `412` (precondition failed). If a client request contains an invalid session key, the server returns response status `401` (unauthorized). For more information on HTTP status codes see [Errors](#errors).

## Session key

The REST API has the concept of a client "session". This is essentially a method for allowing clients to authenticate themselves once and then be free of the need to authenticate for subsequent calls to the API. Since REST is a stateless protocol, there must be a mechanism for clients to identify themselves upon each request, so the requests can be tied to an established session. This is what the session key provides. Login calls return, as part of their responses, a session key that represents a successful authorization and can be used to make further calls without having to authenticate.

This key must be provided in HTTP requests in at least one of the following places:

1. A query parameter named `BhRestToken` on the request URL.
2. An HTTP header named `BhRestToken` or `BHRestToken`.
3. A cookie named `BhRestToken`. This cookie is set by the API at login time as a convenience for browser-based clients.
