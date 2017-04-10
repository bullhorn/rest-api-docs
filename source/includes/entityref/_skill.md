# Skill

Represents a skill that a Candidate may have. The Skill entity can be used in a Candidate entity to indicate that the Candidate has that skill, or in a JobOrder entity to indicate that applicants for that job should have that skill.

<table>
<thead>
<tr class="header">
<th><p><strong>Skill</strong></p>
<p><strong>field</strong></p></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Not null</strong></th>
<th><strong>Read-Only</strong></th>
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
<td>enabled</td>
<td>Boolean</td>
<td>Indicates whether Skill is enabled.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>categories</td>
<td>To-many association</td>
<td>Categories with which this Skill is associated.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>description</td>
<td>String</td>
<td><p><strong>Not supported in this release.</strong></p>
<p>Text description of this Skill.</p></td>
<td> </td>
<td>X</td>
</tr>
<tr class="odd">
<td>name</td>
<td>String (100)</td>
<td>Name of this Skill.</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>