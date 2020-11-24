# Pay and Bill - BillMaster

Read-only entity that represents a BillMaster record.


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
            <th>BillMaster fields</th>
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
            <td>billMasterTransactions</td>
            <td>To-many Association</td>
            <td><p>Associated BillMasterTransactions.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billableCharge</td>
            <td>To-one Association</td>
            <td><p>Associated BillableCharge.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>billingSyncBatch</td>
            <td>To-one Association</td>
            <td><p>Associated BillingSyncBatch.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>billingSyncBatchFileAttachments</td>
            <td>To-many Association</td>
            <td>BillingSyncBatchFileAttachment</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>canInvoice</td>
            <td>Boolean</td>
            <td>Indicates whether can invoice.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>chargeTypeLookup</td>
            <td>To-one Association</td>
            <td>ChargeTypeLookup</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>earnCode</td>
            <td>To-one Association</td>
            <td><p>Associated EarnCode.</p>
<p>Default fields:</p>
<ul>
<li>id</li>
<li>externalID</li>
<li>title</li>
</ul></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>location</td>
            <td>To-one Association</td>
            <td>Location</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one Association</td>
            <td>CorporateUser</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>transactionDate</td>
            <td>Date</td>
            <td><p>Transaction date</p></td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>


