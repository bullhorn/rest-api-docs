# login

## Partner login using OAuth

``` shell
# The login endpoint accepts GET or POST. Issue it as a POST; access_token and version
# may be sent as application/x-www-form-urlencoded body fields (or as query-string params).
curl -X POST "https://rest.bullhornstaffing.com/login" \
  --data-urlencode "access_token=xxx" \
  --data-urlencode "version=*"

# Example Response
{
  "BhRestToken" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "restUrl" : "https://rest{swimlane#}.bullhornstaffing.com/rest-services/{corpToken}/"
}

# Send the returned BhRestToken as an HTTP header on subsequent requests (preferred over the URL):
curl -H "BhRestToken: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
  "https://rest{swimlane#}.bullhornstaffing.com/rest-services/{corpToken}/ping"
```

Log in and get a REST session. This is the primary, supported login process in a production environment.

- The login endpoint accepts both `GET` and `POST`; `POST` is recommended.
- `access_token` and `version` may be passed as query-string parameters **or** as `application/x-www-form-urlencoded` form fields. A JSON request body is **not** parsed for this endpoint.
- Send the returned `BhRestToken` as an HTTP header on subsequent requests rather than as a URL query parameter.

- Never assume that a REST session will not expire.
- Perform a [ping](#ping) request to return the timestamp of the REST session expiration.
- Perform a refresh token request when a REST API request returns a 401 status code that indicates the session is expired. See *Use a refresh token to get a new access token* in [Getting Started with REST](/Getting-Started-with-REST).

Parameter | Required | Description
------ | -------- | -----
access_token | yes | Access token obtained from OAuth authorization |
version      | yes | Version of the API to use (\* is a wildcard for latest version). |
ttl          | no  | Session time-to-live in minutes. |

<aside class="warning"><strong>Possible Error: "Invalid or expired OAuth access token."</strong></aside>

## Logout

``` shell
curl https://rest{{swimlane#}.bullhornstaffing.com/rest-services/e999/logout

# Example Response
{
    logout: "OK"
}
```

Log out and invalidate your REST session.
 