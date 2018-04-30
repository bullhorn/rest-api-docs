---
layout: post
title: Data-center-specific API URLs
description: 
author: Mike Peterson
categories: [ REST ]
---

# Data-center-specific API URLs

API users should use the following data-center-specific base URLs for the Bullhorn OAuth, REST, and SOAP APIs.

## U.S. East Coast Data Center
### CLS5, CLS2,CLS20

* https://auth.bullhornstaffing.com 
* https://rest.bullhornstaffing.com
* https://api.bullhornstaffing.com

## U.S. West Coast Data Center
### CLS30,CLS31,CLS32,CLS33,CLS34

* https://auth-west.bullhornstaffing.com
* https://rest-west.bullhornstaffing.com
* https://api-west.bullhornstaffing.com

## APAC Data Center
### CLS50

* https://auth-west50.bullhornstaffing.com
* https://rest-west50.bullhornstaffing.com
* https://api-west50.bullhornstaffing.com

## UK Data Center
### CLS21,CLS22,CLS23

* https://auth-emea.bullhornstaffing.com
* https://rest-emea.bullhornstaffing.com
* https://api-emea.bullhornstaffing.com

## German Data Center
### CLS70

* https://auth-ger.bullhornstaffing.com
* https://rest-ger.bullhornstaffing.com
* https://api-ger.bullhornstaffing.com

## Sandbox Environments
### BHNEXT

* https://auth9.bullhornstaffing.com
* https://rest9.bullhornstaffing.com
* https://bhservice9.bullhornstaffing.com

### CLS91

* https://auth-west9.bullhornstaffing.com
* https://rest-west9.bullhornstaffing.com
* https://api-west9.bullhornstaffing.com

## About Cluster IDs

CLS2, CLS21 etc. are cluster IDs that are contained in a user’s browser URL (address bar) once they are logged in.

Example: https://cls21.bullhornstaffing.com/BullhornSTAFFING/MainFrame.jsp?#no-ba... indicates that the logged in user is on CLS21 (therefore the appropriate API URLs to use are for the UK Data Center)
As such Cluster IDs do not change for a customer, so identifying the correct cluster ID for all users for a given customer is a one time exercise.


