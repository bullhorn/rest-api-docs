# Login

## Partner login using OAuth

``` shell
curl https://rest.bullhornstaffing.com/login?access_token=xxx&version=*

# Example Response
{
  "BhRestToken" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "restUrl" : "https://rest.bullhornstaffing.com/rest-services/[corporation-token]/"
}
```

Log in and get a REST session. This is the only supported login process in a production environment.

Parameter | Required | Description
------ | -------- | -----
access_token | yes | Access token obtained from OAuth authorization |
version      | yes | Version of the API to use (\* is a wildcard for latest version). |
ttl          | no  | Session time-to-live in minutes. |

<aside class="warning"><strong>Possible Error: "Invalid or expired OAuth access token."</strong></aside>

## Logout

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/logout

# Example Response
{
    logout: "OK"
}
```

Log out and invalidate your REST session.
 