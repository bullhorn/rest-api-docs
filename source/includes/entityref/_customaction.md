# CustomAction

Represents a Bullhorn custom action. For more information about custom actions, see:
<http://developer.bullhorn.com/doc/version_2-0/understanding_custom_components.htm>

| **CustomAction field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| actionOrder | Integer | Order of custom action. | | |
| apiKeyID | Integer | Bullhorn API key id. | | |
| componentURL | String (4000) | URL of CustomAction. | | |
| enabled | Boolean | Indicates whether CustomAction is enabled. | | |
| entity | String (50) | Entity to which CustomAction applies. | X | |
| name | String (50) | Name of CustomAction. | | |