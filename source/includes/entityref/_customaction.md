# CustomAction

Represents a Bullhorn custom action. For more information about custom actions, see:
<http://developer.bullhorn.com/doc/version_2-0/understanding_custom_components.htm>

| **CustomAction field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| actionOrder | Integer | | |
| apiKeyID | Integer | Bullhorn API key id. | | |
| componentURL | String | URL of CustomAction. | | |
| enabled | Boolean | Indicates whether CustomAction is enabled. | | |
| entity | String | Entity to which CustomAction applies. | X | |
| name | String | Name of CustomAction. | | |