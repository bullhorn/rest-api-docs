# Settings

## GET /settings/settingName1[,settingName2...]

``` javascript
{
    "settingName1": value,
    "settingName2": value,
    "foo": "some string value",
    "bar": 123,
    "baz": 123.45,
    "fred": true,
    "barney": null,
    "kermit": [ "an", "array", "of", "string" ],
    "fozzie": [ 1, 2, 3, 4, 5 ]
}
```

value type (integer, boolean, etc) depends on settingName.
If no settingName is supplied, a list of predefined setting names and their meta data is returned. Return types (string, integer, decimal, boolean, and array of the base type) are defined in the meta data. If conversion fails, for example cannot convert "abc" to integer, the raw string will be returned.

## GET /settings

``` javascript
{
  "data": [
    {
      "name": "accountLockoutDuration",
      "valueUrl": "http://server:port/rest-services/corpToken/settings/accountLockoutDuration",
      "valueType": "INTEGER",
      "isArray": false
    }, {
      "name": "allDeptIds",
      "valueUrl": "http://server:port/rest-services/corpToken/settings/allDeptIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "allPrivateLabelIds",
      "valueUrl": "http://server:port/rest-services/corpToken/settings/allPrivateLabelIds",
      "valueType": "INTEGER",
      "isArray": true
    }, {
      "name": "commentActionList",
      "valueUrl": "http://server:port/rest-services/corpToken/settings/commentActionList",
      "valueType": "STRING",
      "isArray": true
    }
    ...
  ]
}
```

returns the complete list of settings
