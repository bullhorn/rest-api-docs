# CustomAction

Represents a Bullhorn custom action. For more information about custom actions, see:
<http://developer.bullhorn.com/doc/version_2-0/understanding_custom_components.htm>

<table>
<thead>
<tr class="header">
<th><p><strong>CustomAction</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-only</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>Integer</td>
<td>Unique identifier for this entity.</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>actionOrder</td>
<td>Integer</td>
<td></td>
<td> </td>
<td> </td>
</tr>
<tr class="odd">
<td>apiKeyID</td>
<td>Integer</td>
<td>Bullhorn API key id.</td>
<td></td>
<td> </td>
</tr>
<tr class="even">
<td>componentURL</td>
<td>String</td>
<td>URL of CustomAction.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether CustomAction is enabled.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>entity</td>
<td>String</td>
<td>Entity to which CustomAction applies.</td>
<td>X</td>
<td></td>
</tr>
<tr class="odd">
<td>name</td>
<td>String</td>
<td>Name of CustomAction.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>