# Pay & Bill - BillingSyncBatchFileAttachment

File attachments which can be associated with a Billing Sync Batch.

CRUD Access - READ.

Entitlements - Add Billable Charge, Update Billable Charge, View Billable Charge.

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
            <th>BillingSyncBatchFileAttachment fields</th>
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
            <td>billMaster</td>
            <td>To-one association</td>
            <td>Bill Master the file is associated with.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billableCharge</td>
            <td>To-one association</td>
            <td>Billable Charge the file is associated with.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billingSyncBatch</td>
            <td>BillingSyncBatch</td>
            <td>Billing Sync Batch the file is associated with.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billingSyncBatchFileTypeLookup</td>
            <td>To-one association</td>
            <td>Billing Sync Batch File Type Lookup the file is associated with.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>contentSubType</td>
            <td>String (64)</td>
            <td>Content subtype of file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>contentType</td>
            <td>String (64)</td>
            <td>Content type of file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td>Date added.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td>Date last modified.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (255)</td>
            <td>Description for this file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>directory</td>
            <td>String (50)</td>
            <td>File Server directory of this file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>expenseSheet</td>
            <td>To-one association</td>
            <td>Expense Sheet the file is associated with.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>expenseSheetEntry</td>
            <td>To-one association</td>
            <td>Expense Sheet Entry the file is associated with.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td>The 3rd party id of the file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fileExtension</td>
            <td>String (10)</td>
            <td>File extension of this file (will always be PDF at this time).</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>fileOwner</td>
            <td>To-one association</td>
            <td><p>CorporateUser who is the owner of the entity to which this file is attached. The default value is user who created the entity.</p>
                <p>Default fields:</p>
                <ul>
                <li>id</li>
                <li>firstName</li>
                <li>lastName</li>
                </ul></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>fileSize</td>
            <td>Integer</td>
            <td>Size of this file.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td>Whether entity is deleted.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isEncrypted</td>
            <td>Boolean</td>
            <td>Whether file is encrypted.</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>isExternal</td>
            <td>Boolean</td>
            <td>Determines if directory is a path to a local file or a URL to an external file.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>isPrivate</td>
            <td>Boolean</td>
            <td>Determines if file is private or not.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>keyVersionEncryptedWith</td>
            <td>String (100)</td>
            <td>If encrypted this say what version of the key was used.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>name</td>
            <td>String (255)</td>
            <td>Name of File. Set at time of generation according to business rules.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>timesheet</td>
            <td>To-one association</td>
            <td>Timesheet the file is associated with.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>transactionOrigin</td>
            <td>To-one association</td>
            <td>TransactionOrigin the file is associated with.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>type</td>
            <td>String (50)</td>
            <td>Type of this file.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>uuid</td>
            <td>String (36)</td>
            <td>Globally unique random ID.</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>