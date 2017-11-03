# Skill

Represents a skill that a candidate may have. You can use the Skill entity in a Candidate entity to indicate that the candidate has that skill, or in a JobOrder entity to indicate that applicants for that job should have that skill.

| **Skill field** | **Type** | **Description** | **Not null** | **Read-Only** |
| --- | --- | --- | --- | --- |
| id | Integer | Unique identifier for this entity. | X | X |
| enabled | Boolean | Indicates whether Skill is enabled. | | |
| categories | To-many association | Categories with which this Skill is associated. | | |
| name | String (100) | Name of this Skill. | X | X |