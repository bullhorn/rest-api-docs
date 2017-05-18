# Resume

## <span class="tag">POST</span> /resume/parseToCandidate

``` shell
curl -X POST \
     -F "file=@sampleresume.html" \
     https://rest.bullhorn.com/rest-services/e999/resume/parseToCandidate?format=text&populateDescription=html

# Example Response
{
   "candidate":    {
      "address":       {
         "address1": "123 Osoite Katu",
         "address2": "Apartment 1",
         "city": "Kaupunki",
         "state": "MA",
         "zip": "02210",
         "countryID": 1
      },
        "description": "<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t \
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" \
         />\r\n\t\t<meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /> \
         \r\n\t\t\r\n\t</head>\r\n\t<body>\r\n\t\t<div>\r\n\t\t\t<p style=\"margin-top:0pt; \
         margin-bottom:0pt; text-indent:36pt; text-align:center; font-size:11pt\"> \
         \r\n\t\t\t\t<span style=\"font-family:Calibri\">Dr. Minun Keskimm\u00e4inen Nimi</span></p>"
   ...
   },
   "candidateEducation":    [
            {
         "startDate": 978368400000,
         "endDate": 1104598800000,
         "graduationDate": 1104598800000,
         "school": "Berkeley State University",
         "city": "Santa Cruz",
         "state": "CA",
         "degree": "B.Sc",
         "major": "COMPUTER SCIENCE",
         "gpa": 4
      }
   ],
   "candidateWorkHistory":    [
            {
         "startDate": 1015002000000,
         "endDate": 1188662400000,
         "comments": "MA    Bop  Hop  Hip"
      }
      }
   ]
}
```

The parseToCandidate operation parses a resume to unsaved Candidate data. A typical use case for this operation is to use parts of the response in the bodies of calls to create new Candidate, CandidateWorkHistory, and CandidateEducation entities. The parseToCandidate operation lets you send a resume as a file attached as multipart/form-data. The parseToHrXml operation sends a resume as a file attached as multipart/form-data. The attached file must be a non-base64-encoded file. Takes one file per request.
To send a block of text rather than a file, use the parseToCandidateViaJson operation.


### HTTP Request

`{corpToken}/resume/parseToCandidate`

Parameter | Required | Description
------ | -------- | -----
format | yes | Input format for the resume. Value can be html or text.
populateDescription | no | Including this parameter fills the Candidate description field with the text or html format of the resume. Value must be text or html. The primary use case for this parameter is to send the resume in the description field for a new Candidate in a PUT /entity/Candidate call. The text or HTML content returned in the description field of the response is JSON-encoded. When the resume is used in a request body, it must be JSON-encoded. If you have parsed the response to an object for manipulation, you must re-encode the value of the "description" as JSON before using it in a request body of another call. For example, in Groovy you can use the groovy.json.JsonOutput.toJson(java.lang.String s) method to Json-encode a string.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /resume/parseToCandidateViaJson


``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"resume" : "\r\n\r\nDr. Minun Keskimm\u00E4inen Nimi\r\n123 Osoite Katu\r\nApartment 1\r\nKaupunki, MA 02210\r\nHome: 466-346-4663 \u00A0Business: 387-438-3874 ext. 89 \u00A0Mobile: 662-466-6624\r\nTelephone: 835-383-8353 ext. 90 \u00A0VoiceNumber: 864-386-8643\r\nFax: 329-329-3290 \u00A0Pager: 724-772-7247\r\nMinun.Nimi@finland.com ...}' \
     \
     https://rest.bullhorn.com/rest-services/e999/resume/parseToCandidateViaJson?format=text&populateDescription=html

# Example Response
{
   "candidate":    {
      "address":       {
         "address1": "123 Osoite Katu",
         "address2": "Apartment 1",
         "city": "Kaupunki",
         "state": "MA",
         "zip": "02210",
         "countryID": 1
      },
        "description": "<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t \
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" \
         />\r\n\t\t<meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /> \
         \r\n\t\t\r\n\t</head>\r\n\t<body>\r\n\t\t<div>\r\n\t\t\t<p style=\"margin-top:0pt; \
         margin-bottom:0pt; text-indent:36pt; text-align:center; font-size:11pt\"> \
         \r\n\t\t\t\t<span style=\"font-family:Calibri\">Dr. Minun Keskimm\u00e4inen Nimi</span></p>"
   ...
   },
   "candidateEducation":    [
            {
         "startDate": 978368400000,
         "endDate": 1104598800000,
         "graduationDate": 1104598800000,
         "school": "Berkeley State University",
         "city": "Santa Cruz",
         "state": "CA",
         "degree": "B.Sc",
         "major": "COMPUTER SCIENCE",
         "gpa": 4
      }
   ],
   "candidateWorkHistory":    [
            {
         "startDate": 1015002000000,
         "endDate": 1188662400000,
         "comments": "MA Bop Hop Hip"
      }
      }
   ]
}
```

The parseToCandidateViaJson operation parses a resume to unsaved Candidate data. A typical use case for this operation is to use parts of the response in the bodies of calls to create new Candidate, CandidateWorkHistory, and CandidateEducation entities. The parseToCandidateViaJson operation lets you send a resume as JSON-encoded text, which is useful for scenarios where you want to parse a block of text rather than a file.

### HTTP Request

`{corpToken}/resume/parseToCandidateViaJson`

Parameter | Required | Description
------ | -------- | -----
format | yes | Input format for the resume. Value can be html or text.
populateDescription | no | Including this parameter fills the Candidate description field with the text or html format of the resume. Value must be text or html. The primary use case for this parameter is to send the resume in the description field for a new Candidate in a PUT /entity/Candidate call. The text or HTML content returned in the description field of the response is JSON-encoded. When the resume is used in a request body, it must be JSON-encoded. If you have parsed the response to an object for manipulation, you must re-encode the value of the "description" as JSON before using it in a request body of another call. For example, in Groovy you can use the groovy.json.JsonOutput.toJson(java.lang.String s) method to Json-encode a string.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /resume/parseToHrXml

``` shell
curl -X POST \
     -F "file=@sampleresume.pdf" \
     https://rest.bullhorn.com/rest-services/e999/resume/parseToHrXml?format=pdf
# Example Response
{"hrXml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Resume \
 xmlns=\"http://ns.hr-xml.org\" xmlns:hr=\"http://ns.hr-xml.org/PersonDescriptors\" \
 xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xml:lang=\"ENGLISH\">\n \
 <ResumeId idOwner=\"Resume Mirror\">\n \
 <IdValue name=\"RESUME ID\"/>\n  <\/ResumeId>\n  <StructuredXMLResume>\n \
 <ContactInfo>\n <PersonName>\n \
 <FormattedName>Dr. Minun Keskimmäinen Nimi<\/FormattedName>\n <GivenName>Minun<\/GivenName>\n  \
 <MiddleName>Keskimmäinen<\/MiddleName>\n <FamilyName>Nimi<\/FamilyName>\n  \
 <Affix type=\"formOfAddress\">DR.<\/Affix>\n  <\/PersonName>\n <ContactMethod>\n  \
 /UserArea>\n<\/Resume>"}

```

The parseToHrXml operation sends a resume as a file attached as multipart/form-data. The attached file must be a non-base64-encoded file. Takes one file per request.

`{corpToken}/resume/parseToXrXml`

Parameter | Required | Description
------ | -------- | -----
format | yes | Input format for the resume. Value can be text, html, pdf, doc, docx, rtf, or odt.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.

## <span class="tag">POST</span> /resume/parseToHrXmlViaJson


``` shell
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"resume" : "\r\n\r\nDr. Minun Keskimm\u00E4inen Nimi\r\n123 Osoite Katu\r\nApartment 1\r\nKaupunki, MA 02210\r\nHome: 466-346-4663 \u00A0Business: 387-438-3874 ext. 89 \u00A0Mobile: 662-466-6624\r\nTelephone: 835-383-8353 ext. 90 \u00A0VoiceNumber: 864-386-8643\r\nFax: 329-329-3290 \u00A0Pager: 724-772-7247\r\nMinun.Nimi@finland.com ...}' \
     \
     https://rest.bullhorn.com/rest-services/e999/resume/parseToHrXmlViaJson?format=text&format=html

# Example Response
{"hrXml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Resume \
 xmlns=\"http://ns.hr-xml.org\" xmlns:hr=\"http://ns.hr-xml.org/PersonDescriptors\" \
 xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xml:lang=\"ENGLISH\">\n \
 <ResumeId idOwner=\"Resume Mirror\">\n \
 <IdValue name=\"RESUME ID\"/>\n  <\/ResumeId>\n  <StructuredXMLResume>\n \
 <ContactInfo>\n <PersonName>\n \
 <FormattedName>Dr. Minun Keskimmäinen Nimi<\/FormattedName>\n <GivenName>Minun<\/GivenName>\n  \
 <MiddleName>Keskimmäinen<\/MiddleName>\n <FamilyName>Nimi<\/FamilyName>\n  \
 <Affix type=\"formOfAddress\">DR.<\/Affix>\n  <\/PersonName>\n <ContactMethod>\n  \
 /UserArea>\n<\/Resume>"}
```

The parseToHrXmlViaJson operation send plain text or HTML as a JSON-encoded string. This call is useful for sending resume content that a user pastes into a browser form.

### HTTP Request

`{{corpToken}/resume/parseToHrXmlViaJson`

Parameter | Required | Description
------ | -------- | -----
format | yes | Input format for the resume. Value can be html or text.
BhRestToken | no | Token that represents a session established by the login process. Must be sent with all subsequent requests to the API. The session key can be provided in the BhRestToken query string, a cookie, or an HTTP header.


TBD:
resume/convertTo(Text|Html)
resume/convertToTextViaJson

