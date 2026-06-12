# login

## Partner login using OAuth

``` shell
# Recommended: issue the login request as a POST. access_token and version remain query parameters.
curl -X POST "https://rest.bullhornstaffing.com/login?access_token=xxx&version=*"

# Example Response
{
  "BhRestToken" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "restUrl" : "https://rest{swimlane#}.bullhornstaffing.com/rest-services/{corpToken}/"
}

# Send the returned BhRestToken as an HTTP header on all subsequent requests (preferred over the URL):
curl -H "BhRestToken: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
  "https://rest{swimlane#}.bullhornstaffing.com/rest-services/{corpToken}/ping"
```

Log in and get a REST session. This is the primary, supported login process in a production environment.

- Issue the login request as a `POST` rather than a `GET`.
- Send the returned `BhRestToken` as an HTTP header on subsequent requests rather than as a URL query parameter (see [Authorization](#authorization)).

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
 