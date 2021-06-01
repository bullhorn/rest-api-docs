# Pay and Bill - EarnCode

Represents an earn code.


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
            <th>EarnCode fields</th>
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
            <td>code</td>
            <td>String (100)</td>
            <td>Customer facing identifier.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customDate1-3</td>
            <td>Timestamp</td>
            <td>Configurable date fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
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
            <td>customText1-20</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customTextBlock1-3</td>
            <td>String (2147483647)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
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
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>description</td>
            <td>String (255)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCodeGroup</td>
            <td>To-one association</td>
            <td>EarnCodeGroup</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>earnCodeTypeLookup</td>
            <td>To-one association</td>
            <td>EarnCodeTypeLookup - the type of the earn code. Options are
                <ul>
                    <li>1 = Reg</li>
                    <li>2 = OT</li>
                    <li>3 = DT</li>
                </ul>
            </td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerBillAccount</td>
            <td>To-one association</td>
            <td>GeneralLedgerBillAccount - GeneralLedgerAccount for the earn code where isBill = true (Bill Account).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerPayAccount</td>
            <td>To-one association</td>
            <td>GeneralLedgerPayAccount - GeneralLedgerAccount for the earn code where isPay = true (Pay Account).  </td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment1</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment1</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment2</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment2</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment3</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment3</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerSegment4</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment4</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>generalLedgerSegment5</td>
            <td>To-one association</td>
            <td>GeneralLedgerSegment5</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>generalLedgerServiceCode</td>
            <td>To-one association</td>
            <td>GeneralLedgerServiceCode for the earn code (Product/Service Code).</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isDeleted</td>
            <td>Boolean</td>
            <td><p><span>Whether entity is deleted.</span></p>
<p><span> <span>The default value is false.</span> </span></p></td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>owner</td>
            <td>To-one association</td>
            <td>CorporateUser who is the owner of this entity. The default value is user who created the entity.
                <p>Default fields:</p>
                    <ul><li>id</li>
                    <li>firstName</li>
                    <li>firstName</li>
                </ul>
            </td>
            <td></td>
            <td>X</td>
        </tr>
    </tbody>
</table>

