# Settings

## GET /settings

``` shell
curl -X GET "http://rest.bullhorn.com/rest-services/e999/settings"

# Example Response
{
  "data": [
    {
      "name": "accountLockoutDuration",
      "valueUrl": "http://rest.bullhorn.com/rest-services/e999/settings/accountLockoutDuration",
      "valueType": "INTEGER",
      "isArray": false
    }, {
      "name": "allDeptIds",
      "valueUrl": "http://rest.bullhorn.com/rest-services/e999/settings/allDeptIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "allPrivateLabelIds",
      "valueUrl": "http://rest.bullhorn.com/rest-services/e999/settings/allPrivateLabelIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "commentActionList",
      "valueUrl": "http://rest.bullhorn.com/rest-services/e999/settings/commentActionList",
      "valueType": "STRING",
      "isArray": true
    }
    ...
  ]
}
```

returns the complete list of settings.

## GET /settings/setting1[,setting2...]

``` shell
curl https://rest.bullhorn.com/rest-services/e999/settings/allPrivateLabelIds,currencyFormat

# Example Response
{
    "allPrivateLabelIds":  [ 1, 2, 3],
    "currencyFormat": "USD"
}
```

Value type (integer, boolean, etc) depends on settingName.
If no settingName is supplied, a list of predefined setting names and their meta data is returned. Return types (string, integer, decimal, boolean, and array of the base type) are defined in the meta data. If conversion fails, for example cannot convert "abc" to integer, the raw string will be returned.
