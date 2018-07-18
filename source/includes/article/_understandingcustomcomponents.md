---
layout: post
title: Understanding Custom Components, Tabs, and Menu Actions
description: 
author: Mike Peterson
categories: [ ATS ]
---

Custom components, tabs, and menu actions enable developers and partners to incorporate content and functionality from an external application into a Bullhorn entity page. Custom components are tied to field maps and you configure them with the Field Mappings tool. Custom tabs and menu actions are not tied to field maps; you configure them with the View Layout tool.

Custom components appear on entity pages. There are two types of custom components within Bullhorn:

* Display components can appear on overview pages. While they can be interactive, they do not by default modify Bullhorn data.
* Edit components are used on edit forms in Bullhorn. 

Custom tabs appear on candidate, client, contact, job, and placement pages. The order of custom tabs matches the order specified in View Layout.

Custom menu actions appear on contextual menus for candidates, clients, contacts, jobs, and placements. The order of custom menu actions matches the order specified in View Layout. A line separator appears above the first custom menu action displayed. A maximum of five custom menu actions can appear on a menu. Custom menu actions appear in the following locations:

* Menu displayed when you select a candidate, contact, company, or job name from the candidate list, submission list, or placement list
* Menu displayed when you click Select An Action from a candidate, contact, company, or job record

Custom display components can only appear on overview pages and have a limited amount of space, but they have the advantage of being immediately visible to the user when the record is opened. A custom tab or menu action can present more data than a custom display component, but users must click a custom tab or menu item to access the component. You should decide whether a custom display component, tab, or menu action makes sense based on the data it must present and how the user will interact with it. Bullhorn partners creating components for multiple customers should also provide instructions that specify where administrators can or should place their component for it to render properly.

Custom components, tabs, and menu actions are all self-contained IFRAMEs hosted by the Bullhorn browser application. The IFRAME can request any URL that has been configured in Bullhorn. When the IFRAME is created, the Bullhorn application automatically appends the context data necessary for the remote server to identify the calling user and responds with the appropriate data or content for that Bullhorn record.

All requests to the remote system are made from the user’s client computer, so the remote application can reside on any system to which the user can gain access. The custom component can be as simple as some customized content relevant to the current record, or it can involve multiple user interactions and component refreshes.

## Example

The following example walks through how a fictitious company called Quick Assessments could create a custom tab that integrates Bullhorn with its service.
Although this example uses a custom tab, you could easily implement the same functionality with a custom component or menu action.

Quick Assessments provides online assessments for common skill areas. Recruiters with an account can create a new assessment by providing the candidate’s key contact information and selecting the required assessment from a list of pre-configured options.

To simplify the process of registering candidates for assessments, Quick Assessments has created a custom tab on the Candidate record in Bullhorn.

NEW IMAGE HERE

 The application hosted in the tab provides a button that enables users to register a candidate for an assessment directly from the candidate record.  It also presents a list of existing assessments for candidates who have already taken tests through the Quick Assessments application.

 NEW IMAGE HERE

The following table describes how this custom tab interacts with the Bullhorn web application and the Bullhorn SOAP web services API to enable the integration.


FIXTHISTABLE ==========================================

| **Action** | **Response** |
|------------|--------------|
| User loads the Quick Assessment tab of a Candidate record. | When the user requests the Bullhorn page, an IFRAME for the Quick Assessments application makes a request for the following URL: http://quickassessments.com/bhwidget/?Key=12349876&userid=0&entitytype=candidate&entityid=99&privatelabelid=105&height=yy&width=xx). The URL and the Key attribute were configured for this tab through the Bullhorn administrator based on instructions from Quick Assessments. Quick Assessments assigns each customer a unique Key for identification purposes. The remaining URL variables are appended at runtime by the Bullhorn application based on the user’s context. |
| | The Quick Assessments page verifies that the Key matches a valid Quick Assessments customer ID and checks to see if there are any active assessments for a candidate with a userId of 99. If there are no assessments associated with this ID, the server returns HTML that displays an Add Assessment button. This appears within the tab in Bullhorn.                                                                           
| User clicks the Add Assessment button. | Clicking the button loads a new HTML page within the IFRAME that presents a list of assessments that are available to this customer. |
| User picks an assessment and clicks submit. | Using the ID property for this candidate and its partner API key, the Quick Assessments application requests the necessary data from the Bullhorn SOAP web services API (name, email address, etc.). Using this data, the Quick Assessments application creates a new assessment and sends a notification to the candidate. It also stores the Bullhorn ID for future reference. |
| | The Quick Assessment application refreshes the IFRAME and lists the current assessment with a status of ”pending.” |


Creating a Custom Display Component

Custom display components are dedicated portions of a screen in Bullhorn that are programmed to show non-Bullhorn content that is served from a remote application or service. Building a custom display component is as simple as creating a web application that can process requests from the IFRAME component and render an HTML user interface that fits into the space allotted by the Bullhorn user interface.

When a custom component is initialized in the Bullhorn application, it issues a GET request for its associated URL. The URL is configured  in the Default Value property of the Custom Component field.  These values must be configured by the Bullhorn administrator using the Field Mappings tool. The URL can also include any variables needed to authorize this account with the external application; for example, username, password, account number, and so forth. Each customer or private label can have a unique URL/variable combination, but all requests made from that private label contain the values configured for the custom component.

If additional personalization or authorization is required, you can use the dynamically appended variables listed below or use a login screen and cookies to manage authentication. When the request is made, the following dynamic variables are appended to the component’s URL on a per request basis.

Parameter Name

Type

Description

CorporationID

Integer

The unique ID for the corporation of the current user.

currentBullhornUrl

String

The URL of the Bullhorn page that is hosting the IFRAME. This value is URL encoded.

EntityID

Integer

The unique ID for this entity instance. This can be used to retrieve the entire entity DTO using the find operation.

EntityType

String

The name of the entity page on which this component has been placed. Possible values are Candidate, Client Contact, Client, and Job Posting.

PrivateLabelID

Integer

The unique ID for the private label (configuration) through which the user is accessing the application.

UserID

Integer

The unique ID for the user of the application.

 

The page that processes the request made by the custom component should use these values to authorize the request and determine what content should be returned to the user when the component is loaded.

 

The method for accessing these variables varies depending on your programming environment. For example, in PHP, they become accessible in the $_REQUEST variable; in ASP.NET, they become accessible in the Page.Request object.

 

Configuring a Custom Display Component
 

Configuring a custom display component for use in the Bullhorn application involves the View Layout and the Field Mappings tools. Each of the supported records in Bullhorn includes three fields that can be used for custom components: CustomComponent1, CustomComponent2, and CustomComponent3. To configure the URL for a custom component:

 

On the Tools menu, select Field Mappings.
Select the entity to which you would like to add the component.

Click the name of one of the available custom component fields (CustomComponent1-3).

In the Hidden field, change the value to No if it is not already set to No.

In the Default Value field, add the URL that should be requested for this component.

Click Save.

Once your custom display component has been configured in the Field Mappings tool, it is ready to be placed on either the overview tab of that record type (the default view) or on a custom tab on that record type.

Placing Custom Display Components on the Overview Tab
There are five potential locations for a custom component on the overview tab. The following table and figure illustrate the available placements and the corresponding sizes for custom components. The size values will be included as URL variables (see above).

Placement

Height

Width

OverviewTop (A)

150 px

600 px

OverviewLeft (B)

150 px

300 px

OverviewRight (C)

150 px

300 px

OverviewBottom (D)

150 px

600 px

SideInfo (E)

150 px

150 px

 

To configure the placement of the custom component on the Overview tab of the entity page:

On the Tools menu, select View Layout .

Select the entity where the custom component should appear.

Select the Overview Tab tab.

Locate the section where you would like to include the component

Select the component from the list of fields in the Exclude from View list.

Click the right arrow to move this field to the Include in View list.

Click Save.
 
The custom component now appears on the Overview tab of the entity.

Creating a Custom Edit Component
Custom edit components allow you to override the built-in edit controls in Bullhorn and replace them with controls that present data not managed by the Bullhorn application. When the user saves the form, Bullhorn takes the value set by the custom edit component and inserts it into the appropriate field in the Bullhorn record.

Like custom display components, custom edit components are displayed within an IFRAME. The URL requested by the control includes all of the parameters listed above for custom display components. In addition, the current value for the edit control’s field will also be included in the URL, as follows:

Parameter Name

Type

Description

baseControlName

String

The name of the field with which this custom edit component is associated. This corresponds to the field in Bullhorn that will be updated when the form is saved.

value

Any

The current value of the field in Bullhorn.

Once they have been loaded, custom edit components communicate with the Bullhorn application form by changing the parent href property (the href of the form that launched the custom external control).

The following example illustrates the HTML and JavaScript for a drop-down control that is configured for the experience property.

<html>

<head><title></title></head>

<body onload="initialize()">

<script type="text/javascript">

function initialize(){

// Get the name of the control and its current value from the href property

var controlName=getQueryStringParameter(location.href, "baseControlName");

var initialValue=getQueryStringParameter(location.href, "value");

 

//Set the experience drop-down to the current value

var dropdown = document.getElementById("experience");

for(i=0;i<dropdown.options.length;i++){

if(dropdown.options[i].value==initialValue){

dropdown.options[i].selected =true;

return;

}

}

}

 

function setValue(value) {

//Get control Name (passed in url src)

var controlName=getQueryStringParameter(location.href, "baseControlName");

 

//Get current url from currentBullhornUrl param

var currentHref=decodeURIComponent(getQueryStringParameter(location.href, "currentBullhornUrl").replace(/\+/g,  " "));

 

//Build controlName and value in the format controlName=value

var fragment=controlName + "=" + value;

currentHref+="#" + fragment;

parent.location.href=currentHref;

}

 

//Generic function to extract values from the referring URL

 

function getQueryStringParameter(href, paramName){

var regexS = "[\\?&]"+ paramName +"=([^&#]*)";

var regex = new RegExp( regexS );

var results = regex.exec( href);

if( results == null ) {

return "";

} else {

return results[1];

}

}

</script>

 

<select id="experience" onchange="setValue(experience.options[selectedIndex].value)">

<option selected>Please select one...</option>

<option value="beginner">Beginner</option>

<option value="intermediate">Intermediate</option>

<option value="advanced">Advanced</option>

<option value="expert">Expert</option>

</select>

</body>

</html>

 

Configuring a Custom Edit Component
 

Configuring a custom edit component for use in the Bullhorn application involves the Field Mappings tool. To configure one of the Bullhorn fields to use a custom edit component:

On the Tools menu, select Field Mappings.
Select the entity to which you would like to add the edit component.

Click the name of the field whose edit control you want to replace (for example, experience). Note: You cannot use any of the customComponent1-3 fields, as these do not represent record values that are stored in Bullhorn. You must use a standard Bullhorn field, such as experience or customText1.

Select Custom External Control from the Edit Type drop-down.

In the Default Value field, add the URL that should be requested for this component.

Click Save .

 

Configuring the Client Browser for Custom Edit Components
To function properly, the website where the control(s) are hosted must be added to Internet Explorer 7 and 8 Trusted Sites and the Navigate sub-frames across different domains custom setting must be enabled for the trusted sites.

 

Creating a Custom Tab or Menu Action
The amount of space available on a dedicated tab or popup window depends on the user’s screen resolution and user interface configuration. You should design the page to easily adapt to multiple widths.

 

To ensure that no vertical scroll bars appear, the custom tab and custom menu action features provide a way for your application to communicate its height to the hosting page. To take advantage of this feature, you should add a URL variable called displayHeight to the URL when it is configured in the View Layout tool. For example, http://[baseURL]?displayHeight=3000px. If you do not provide a displayHeight value, the default height of the IFRAME is 4000px.

 

You can also dynamically modify the height of the IFRAME by changing the displayHeight variable after Bullhorn has initialized the IFRAME. This is useful if your page dynamically shows or hides regions of the DOM, or if users will navigate through multiple pages of different heights. The following JavaScript functions can be added to any page that appears in a custom tab:

 

function addResizeParameterToUrl()

{

var size = document.body.scrollHeight;

var currentHref = decodeURIComponent(getQueryStringParameter(location.href,

"currentBullhornUrl").replace(/\+/g, " "));

var fragment="displayHeight=" + size;

currentHref+="#" + fragment;

parent.location.href=currentHref;

}

 

The hosting Bullhorn page listens for changes to the displayHeight URL variable and adjusts the dimensions of the IFRAME accordingly. To ensure this variable is updated, you must also attach the addResizeParameterToURL() function as a listener to the onresize and onload events on the page. You can do this by adding the following to the page's body tag:

 

<body onresize="addResizeParameterToUrl();" onload="addResizeParameterToUrl();">

 

Depending on the amount of DOM scripting in your pages, you may also need to call this function from other places in your application as well.

 

If additional personalization or authorization is required, you can use the dynamically appended variables listed below or use a login screen and cookies to manage authentication. When the request is made, the following dynamic variables are appended to the component’s URL on a per request basis.

 

Parameter Name

Type

Description

CorporationID

Integer

The unique ID for the corporation of the current user.

currentBullhornUrl

String

The URL of the Bullhorn page that is hosting the IFRAME. This value is URL encoded.

EntityID

Integer

The unique ID for this entity instance. This can be used to retrieve the entire entity DTO using the find operation.

EntityType

String

The name of the entity page on which this component has been placed. Possible values are Candidate, Client Contact, Client, and Job Posting.

PrivateLabelID

Integer

The unique ID for the private label (configuration) through which the user is accessing the application.

UserID

Integer

The unique ID for the user of the application.

authCode

String

An encoded value used by partner applications to authenticate the request (included only for tabs or menu actions configured for a partner application).

 

The page that processes the request should use these values to authorize the request and determine what content should be returned to the user when the component is loaded.

 

The method for accessing these variables varies depending on your programming environment. For example, in PHP, they become accessible in the $_REQUEST variable; in ASP.NET, they become accessible in the Page.Request object.

 

The following table describes how a custom tab or custom menu action interacts with the Bullhorn web application and the Bullhorn SOAP web services API to enable the integration.

 

Action

Response

User clicks a custom tab or a custom menu item.

For a custom tab, the web page for the associated URL opens in an IFRAME that fills the tab.

 

For a custom menu action, the web page for the associated URL opens in an IFRAME that fills a popup window.

For a custom tab, the user interacts with contents of tab.

For a custom menu action, the user interacts with a popup window.

 

 

 
Configuring a Custom Tab or Menu Action
To configure a custom tab or menu action:

On the Tools menu, select View Layout .

Select the entity to which you want to add the custom tab or menu action.

To add a custom tab, select the Custom Tabs tab. 
To add a custom menu action, select the Custom Menu Actions tab.

Click the Add New button.

In the Name field of the new entry, enter the name to display for the custom tab or menu item.

In the URL field, enter the URL you want to request.

In the Partner Name field, select a partner name if desired.

If you are configuring more than one custom tab or menu action, use the arrows to set the order in which the items will appear.

Click Save.