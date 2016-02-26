# Login

There are two ways to login to obtain a bullhorn REST API token (one of them being strictly reserved for internal use):

## Top-level login (without corporation token)

``` javascript
// https://rest.bullhorn.com/login?username=xxx&password=xxx&version=*
{
  "BhRestToken" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "restUrl" : "https://rest.bullhorn.com/rest-services/[corporation-token]/"
}
```

<aside class="warning">only for testing environment</aside>

Params | Required | Description
------ | -------- | -----
username     | yes | Name of user logging in. |
password     | yes | Password of user logging in. |
version      | yes | Version of the API to use (\* is a wildcard for latest version). |
ttl          | no  | Session time-to-live in minutes. |
clientId     | no  | Pass in an OAuth key here to spoof the features associated. |


## Partner login using OAuth

``` javascript
// https://rest.bullhorn.com/login?access_token=xxx&version=*
{
  "BhRestToken" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "restUrl" : "https://rest.bullhorn.com/rest-services/[corporation-token]/"
}
```

This is the only supported login process in a production environment

Params | Required | Description
------ | -------- | -----
access_token | yes | Access token obtained from OAuth authorization |
version      | yes | Version of the API to use (\* is a wildcard for latest version). |
ttl          | no  | Session time-to-live in minutes. |
clientId     | no  |  Pass in an OAuth key here to spoof the features associated. |

<aside class="warning"><strong>Possible Error: "Invalid or expired OAuth access token."</strong></aside>

## Logout

``` javascript
// https://rest.bullhorn.com/e999/logout
{
    logout: "OK"
}
```

To logout and invalidate your BhRestToken
