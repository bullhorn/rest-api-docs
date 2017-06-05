# Settings

## GET /settings/setting1[,setting2...]

``` shell
curl https://rest.bullhornstaffing.com/rest-services/e999/settings/allPrivateLabelIds,currencyFormat

# Example Response
{
    "allPrivateLabelIds":  [ 1, 2, 3],
    "currencyFormat": "USD"
}
```

Returns the value(s) of the specified system setting(s). The value type (Integer, String, Boolean, and so forth) depends on the specified setting name.
<aside class="notice">NOTE: In the allDeptIds field of a settings response, the primary department id is always first in the list of department ids.</aside>

## GET /settings

``` shell
curl -X GET "http://rest.bullhornstaffing.com/rest-services/e999/settings"

# Example Response
{
  "data": [
    {
      "name": "accountLockoutDuration",
      "valueUrl": "http://rest.bullhornstaffing.com/rest-services/e999/settings/accountLockoutDuration",
      "valueType": "INTEGER",
      "isArray": false
    }, {
      "name": "allDeptIds",
      "valueUrl": "http://rest.bullhornstaffing.com/rest-services/e999/settings/allDeptIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "allPrivateLabelIds",
      "valueUrl": "http://rest.bullhornstaffing.com/rest-services/e999/settings/allPrivateLabelIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "commentActionList",
      "valueUrl": "http://rest.bullhornstaffing.com/rest-services/e999/settings/commentActionList",
      "valueType": "STRING",
      "isArray": true
    }
    ...
  ]
}
```

Returns a list of predefined setting names and their metadata.