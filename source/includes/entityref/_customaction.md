# CustomAction

Represents a Bullhorn custom menu action. Custom Actions are configured by Bullhorn administrators through the Bullhorn application (Admin > View Layout > Custom Menu Actions) and are read-only through the API. For a complete guide to configuring and integrating custom menu actions and custom tabs, see:
<https://bullhorn.github.io/Custom-Tabs-and-Menu-Actions/>

CRUD Access - READ.

| **CustomAction field** | **Type** | **Description** | **Not null** | **Read-only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| actionOrder | Integer | Display order of the custom action within its entity menu. | X | |
| apiKeyID | Integer | ID of the Bullhorn API key (partner key) used to sign OAuth-authenticated requests to the custom action URL. Null when no partner key is configured. | | |
| componentURL | String (4000) | Base URL of the endpoint that Bullhorn loads in an iframe when the action is invoked. Parameters are appended to this URL at runtime; see parameter-passing behavior below. | | |
| enabled | Boolean | Indicates whether this custom action is active and visible to users. | | |
| entity | String (50) | Name of the Bullhorn entity to which this custom action applies (for example, Candidate, JobOrder, Placement). | X | |
| location | Integer | Where in the Bullhorn UI the action appears. Enumerated values: value: 1 (In a record, on the menu), value: 2 (On a record list, in the Update section), value: 3 (On a record list, in the Action section). The location also controls how parameters are passed to `componentURL`; see below. | X | |
| name | String (50) | Display name of the custom action as it appears in the Bullhorn menu. | | |
| privateLabel | To-one association | PrivateLabel with which this custom action is associated. | X | |

## Parameter-passing behavior

When Bullhorn invokes a custom action it passes a standard set of context parameters to the `componentURL`. **The mechanism differs by `location` value.**

### location = 1 — In a record, on the menu

Parameters are appended to `componentURL` as **URL query parameters** (HTTP GET). The iframe `src` is set to the constructed URL directly.

Example URL received by the custom action endpoint:

```
https://your-endpoint.example.com/action?EntityType=Candidate&EntityID=12345&UserID=67890&CorporationID=1&PrivateLabelID=5&currentBullhornUrl=https%3A%2F%2Fapp.bullhornstaffing.com%2F...
```

### location = 2 or 3 — On a record list

Parameters are submitted as **HTTP POST form data** (not URL query parameters). Bullhorn renders a hidden HTML form and submits it to `componentURL`, targeting the iframe. The form fields are:

| Field | Description |
| --- | --- |
| EntityType | Entity type name (for example, `Candidate`) |
| EntityID | Comma-separated list of record IDs selected in the list |
| UserID | ID of the currently logged-in user |
| CorporationID | Corporation ID of the logged-in user's corporation |
| PrivateLabelID | Private label ID |
| currentBullhornUrl | Full URL of the current Bullhorn page, URL-encoded |
| authCode | OAuth authorization code (only present when a partner key with OAuth is configured) |

<aside class="warning">
Integrators who expect URL query parameters when using a record-list location (2 or 3) will not receive them. The endpoint must read the values from the POST body instead.
</aside>

<aside class="notice">
For location = 1 (in a record), the same fields are passed as URL query parameters rather than form data. The <code>authCode</code> field is omitted unless a partner key is configured.
</aside>
