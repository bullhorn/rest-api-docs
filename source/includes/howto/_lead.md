# Lead

## Convert a Lead to a Contact

``` javascript
// GET https://rest.bullhornstaffing.com/e999/entity/Lead/5059165?fields=id,firstName,lastName
{
    data: {
        id : 3212,
        firstName : 'John',
        lastName: 'Jameson'
    }
}

// POST https://rest.bullhornstaffing.com/e999/entity/ClientContact
{
    id : 3212,
    firstName : 'John',
    lastName: 'Jameson'
}
```

The process is simple for converting `Leads` to `Contacts`. First retrieve the data for the Lead.

Then `POST` the data back to the ClientContact url.

<aside class="notice">Don't forget to add the lead.id to payload so the Contact will be associated with the lead that generated it. ClientContact.clientCorporation is a required field, so make sure the lead has that filled our or add it to the payload yourself.
</aside>

Then change the status of the Lead and POST Back to the original url.

## Convert a Lead to a Candidate

``` javascript
// GET https://rest.bullhornstaffing.com/e999/entity/Lead/5059165?fields=id,firstName,lastName
{
    data: {
        id : 3212,
        firstName : 'John',
        lastName: 'Jameson'
    }
}

// POST https://rest.bullhornstaffing.com/e999/entity/Candiate
{
    id : 3212,
    firstName : 'John',
    lastName: 'Jameson'
}
```

The process for converting a `Lead` or `Candidate` is nearly identical.
