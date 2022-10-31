# Certification



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
            <th>Certification fields</th>
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
            <td>category</td>
            <td>To One Association</td>
            <td>Category</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>certificationGroups</td>
            <td>To Many Association</td>
            <td>CertificationGroup</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>countryID</td>
            <td>To One Association</td>
            <td>Country</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customFloat1-3</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customInt1-3</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-5</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date on which this record was created in the Bullhorn system.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (2147483647)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>expirationDateOptional</td>
            <td>Boolean</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>privateLabels</td>
            <td>To Many Association</td>
            <td>PrivateLabel</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>specialty</td>
            <td>To One Association</td>
            <td>Specialty</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>state</td>
            <td>String (100)</td>
            <td>NorthAmericaState</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
