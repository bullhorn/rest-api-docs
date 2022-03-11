# ShiftPosition

Used to create more specific Shifts tied to a single JobOrder. Also can be used for storing rate information that is tied to the JobShift.

<table>
    <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th>ShiftPosition fields</th>
            <th>Type</th>
            <th>Description</th>
            <th>Not null</th>
            <th>Read-only</th>
        </tr>
    </thead>
    <tbody>
        <tr class="even">
            <td>id</td>
            <td>Integer</td>
            <td>Unique identifier for this entity.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billRate</td>
            <td>BigDecimal</td>
            <td>Bill rate associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>category</td>
            <td>To-one association</td>
            <td>Category associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certificationGroups</td>
            <td>To-many association</td>
            <td>CertificationGroup associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationList</td>
            <td>To-many association</td>
            <td>Certification associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>certifications</td>
            <td>String (2147483647)</td>
            <td>Certification associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>clientCorporation</td>
            <td>To-one association</td>
            <td>ClientCorporation the shiftPosition is associated to.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>comments</td>
            <td>String (2147483647)</td>
            <td>Comments associated to shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate1</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customBillRate10</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customBillRate2</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customBillRate3</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customBillRate4</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customBillRate5</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customBillRate6</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customBillRate7</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customBillRate8</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customBillRate9</td>
            <td>BigDecimal</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date when this record was last modified in the Bullhorn system.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Indicates whether this record has been marked as deleted in the Bullhorn system.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>isPriorShiftRequired</td>
            <td>Boolean</td>
            <td>Indicates whether the prior Shift is required or not.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td>unused.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (150)</td>
            <td>Name of the shiftPosition.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>overtimeBillRate</td>
            <td>BigDecimal</td>
            <td>The overtime bill rate associated to the shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td>The pay rate associated to the shiftPosition.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>salaryUnit</td>
            <td>String (12)</td>
            <td>The salary unit associated to the shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>skills</td>
            <td>To-many association</td>
            <td>The skill associated to the shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>specialties</td>
            <td>To-many association</td>
            <td>The specialties associated to the shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>yearsExperience</td>
            <td>Integer</td>
            <td>The years experience associated to the shiftPosition.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
