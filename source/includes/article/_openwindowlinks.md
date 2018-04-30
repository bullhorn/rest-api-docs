---
layout: post
title: OpenWindow Links
description: An Inside look into Bullhorn's OpenWindow API
author: Brian Kimball
categories: [ REST, OpenWindow ]
---

![Bullhorn Connect](/images/connect.png)

# Introduction

Internally at Bullhorn we have to open new pages within the CRM from different contexts of the application, externally from emails, or from other products offerings.  This API is publicly accessible and can be used by our partners as well.

# Use Cases

The API lives under one endpoint, all you need to do you open a new browser window to the following urls.  If Bullhorn is running in another tab then the window will close and the page will be opened within the current Bullhorn context.  If Bullhorn is not running the user will be prompted to login before being brought to the page.

`https://www.bullhornstaffing.com/BullhornStaffing/OpenWindow.cfm`

Every **OpenWindow** calls has a few required params:

| Params | Description |
|--------|-------------|
| entity | Define the Entity type for the page you want to open |
| view   | The tab, section, or view to open, eg. Add, Edit, Notes |

## Opening Add Forms

| Entity | Call |
|--------|-------------|
| Candidate: | `/OpenWindow.cfm?entity=Candidate&view=Add`
| ClientContact: | `/OpenWindow.cfm?entity=ClientContact&view=Add`
| ClientCorporation: | `/OpenWindow.cfm?entity=ClientCorporation&view=Add`
| JobOrder: | `/OpenWindow.cfm?entity=JobOrder&view=Add`
| Placement: | `/OpenWindow.cfm?entity=Placement&view=Add`
| Opportunity: | `/OpenWindow.cfm?entity=Opportunity&view=Add`
| Lead: | `/OpenWindow.cfm?entity=Lead&view=Add`

If you want to add a note to any of the top level entities you can use the `AddNote` view:

```
/OpenWindow.cfm?entity=Candidate&view=AddNote
```

Or alternatively you can use the `Note` entity and pass all of the references yourself:

```
/OpenWindow.cfm
    ?entity=Note
    &view=Add
    &action=Phone Call
    &comments=Really interesting message
    &personReferenceID=123       // About
    &otherPersonReferenceIDs=1   // Candidate, Lead, Contact references
    &jobOrderReferenceID=1       // Job references
    &opportunityID=456           // Opportunity references
    &placementReferenceID=1      // Placement references
```

## Overview Pages

The same concept can be applied for the overview pages using the `Overview` view parameter, just make sure you remember to include an `id` parameter as well:

```
/OpenWindow.cfm?entity=Candidate&id=12345&view=Overview
```

If you want to open a the activity tab on the overview you can use the `Activity` view parameter. Additionally you can use the `expandedSection` parameter to have a specific section open:

```
/OpenWindow.cfm?entity=Candidate&id=12345&view=Activity&expandedSection=Interviews
```

The **Edit** tab can be opened with specific `Edit` view parameters:

```
// Edit
/OpenWindow.cfm?entity=Candidate&id=12345&view=Edit
```

# Disclaimer

The OpenWindow API has been changed frequently over the years as new entities and sections of the application get added or updated. The API is stable and no foreseeable changes are planned.  This Article does not include all of the features in the OpenWindow API or any of the nuances that might exist just the most common use cases.  If you have any question or need to open a window that is not listed please ask them in our [Gitter channel.](https://gitter.im/bullhorn/Open-Source)
