
# Pay and Bill - EarnCodeGroup

This entity represents the Earn Code Group which is a grouping of one or three earn codes.



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
            <th>EarnCodeGroup fields</th>
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
            <td>accruesOT</td>
            <td>Boolean</td>
            <td>Does this Earn Code Group accrue Overtime? If yes, then overtimeEarnCode and doubleTimeEarnCode are not null.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>allowForSelfService</td>
            <td>Boolean</td>
            <td>This group allows self service, which means it will be displayed in PeopleNet.  </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>chargeTypeLookup</td>
            <td>To-one association</td>
            <td>ChargeTypeLookup - is the earn code group used for time or expense related data. Options are:
                <ul>
                    <li>1 = Time</li>
                    <li>2 = Expense</li>
                </ul></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>dateAdded</td>
            <td>Timestamp</td>
            <td></td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>dateLastModified</td>
            <td>Timestamp</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>defaultEarnCode</td>
            <td>To-one association</td>
            <td>DefaultEarnCode - The default Earn Code of this group, EarnCode.earnCodeTypeLookup = REG.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>doubleTimeEarnCode</td>
            <td>To-one association</td>
            <td>DoubleTimeEarnCode - The Double Time Earn Code of this group, EarnCode.earnCodeTypeLookup = DT.</td>
            <td>Not null, if accruesOT is true</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>earnCodeGroupStatusLookup</td>
            <td>To-one association</td>
            <td>EarnCodeGroupStatusLookup - status of the earn code grpup. Options are Active or Inactive.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>isTaxable</td>
            <td>Boolean</td>
            <td>Should taxes be applied to this Earn Code Group? Defaults to true.</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>overtimeEarnCode</td>
            <td>To-one association</td>
            <td>OvertimeEarnCode - The Overtime Earn Code of this group, EarnCode.earnCodeTypeLookup = OT.</td>
            <td>Not null, if accruesOT is true</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payBillOptionsLookup</td>
            <td>To-one association</td>
            <td>PayBillOptionsLookup - Indicates how this earn code group should be configured for pay and bill reasons. Options are:
                <ul>
                    <li>1 = Pay & Bill</li>
                    <li>2 = Pay Only</li>
                    <li>3 = Bill Only</li>
                    <li>4 = None</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>unitOfMeasure</td>
            <td>To-one association</td>
            <td>UnitOfMeasure - what unit is this earn code being paid in. Options are:
                <ul>
                    <li>1 = Hours</li>
                    <li>2 = Days</li>
                    <li>3 = Weeks</li>
                    <li>4 = Months</li>
                    <li>4 = Units</li>
                    <li>4 = Amount</li>
                </ul>
            </td>
            <td>X</td>
            <td></td>
        </tr>
    </tbody>
</table>

