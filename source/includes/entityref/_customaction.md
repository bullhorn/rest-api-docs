# CustomAction

Represents a Bullhorn custom action. Custom Actions are read only and must be configured through the Bullhorn application. For more information about custom actions, see:
<http://bullhorn.github.io/Custom-Tabs-and-Menu-Actions/>

| **CustomAction field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| actionOrder | Integer | Order of custom action. | | |
| apiKeyID | Integer | Bullhorn API key id. | | |
| componentURL | String (4000) | URL of CustomAction. | | |
| enabled | Boolean | Indicates whether CustomAction is enabled. | | |
| entity | String (50) | Entity to which CustomAction applies. | X | |
| location | Integer | Location of the action within Bullhorn. | X | |
| name | String (50) | Name of CustomAction. | | |
| privateLabel | To-One association | Private Label the custom action is associated with. | X | |
