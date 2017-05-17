# Ping

## <span class="tag">GET</span> /ping

``` shell
curl https://rest.bullhornstaffing.com/e999/ping

# Example Response
{
  "sessionExpires" : 1323449994922
}
```

Returns the date of the calling client's session expiration. You can use this call to test whether the client's session is valid. If the session is not valid, the response is the standard response for unauthenticated clients.

Parameter | Required | Description
------ | -------- | -----
BhRestToken | true | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.
