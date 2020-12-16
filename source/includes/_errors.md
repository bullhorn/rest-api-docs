# Errors

The REST API uses the following error codes:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request is no good
401 | Unauthorized -- Your API key is wrong or expired
403 | Forbidden -- The entity requested is hidden for administrators only
404 | Not Found -- The specified entity could not be found
405 | Method Not Allowed -- You tried to access an entity with an invalid method
406 | Not Acceptable -- You requested a format that isn't json
410 | Gone -- The entity requested has been removed from our servers
429 | Rate Limited -- Wait 1 second then retry request. Repeat until successful.
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
