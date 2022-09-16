# Pay and Bill - ClientCorporationRateAgreementCardLine

An Entity representing each individual rate on a Client Corporation

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
            <th>ClientCorporationRateAgreementCardLine fields</th>
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
            <td>alias</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billCurrencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>billMultiplier</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>billRate</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>clientCorporationRateAgreementCardLineGroup</td>
            <td>To-one association</td>
            <td>ClientCorporationRateAgreementCardLineGroup</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>customFloat1-5</td>
            <td>Double</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customInt1-5</td>
            <td>Integer</td>
            <td>Configurable numeric fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customRate1</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customRate2</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customRate3</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customRate4</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>customRate5</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="odd">
            <td>customText1-10</td>
            <td>String (100)</td>
            <td>Configurable text fields that can be used to store custom data depending on the needs of a particular deployment.</td>
            <td></td>
            <td>X</td>
        </tr>
        <tr class="even">
            <td>earnCode</td>
            <td>To-one association</td>
            <td>EarnCode</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>externalID</td>
            <td>String (100)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>markupPercent</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>markupValue</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>migrateGUID</td>
            <td>String (36)</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payCurrencyUnit</td>
            <td>To-one association</td>
            <td>CurrencyUnit</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="even">
            <td>payMultiplier</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>payRate</td>
            <td>BigDecimal</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
