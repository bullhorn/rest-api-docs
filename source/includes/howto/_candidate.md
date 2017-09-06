# Candidate

## Parsing a Resume

``` javascript
// POST https://rest.bullhornstaffing.com/rest-services/{corpToken}/resume/parseToCandidate?format=DOC
{
    "candidate": {
        "address": {
            "address1": "123 Osoite Katu",
            "address2": "Apartment 1",
            "city": "Kaupunki",
            "state": "MA",
            "zip": "02210",
            "countryID": 1
        },
        "phone": "+1 4663464663",
        "fax": "+1 3293293290",
        "pager": "+1 724 7727247",
        "mobile": "+1 662 4666624",
        "firstName": "Minun",
        "lastName": "Nimi",
        "nameSuffix": "DR.",
        "email": "minun.nimi@finland.com",
        "phone2": "+1 835 3838353x90",
        "phone3": "+1 864 3868643",
        "email2": "mnimi2@finland2.com",
        "email3": "minumn3@finland3.com",
        "workPhone": "+1 3874383874x89"
    },
   "candidateEducation":    [
            {
         "startDate": 1007226000000,
         "endDate": 1117641600000,
         "graduationDate": 1117641600000,
         "school": "Berkeley State University",
         "city": "Santa Cruz",
         "state": "CA",
         "degree": "B.Sc",
         "major": "COMPUTER SCIENCE",
         "gpa": 4
      },
            {
         "endDate": 1241193600000,
         "graduationDate": 1241193600000,
         "school": "Boston University School of Music",
         "city": "Boston",
         "state": "MA",
         "degree": "B.A",
         "major": "ADMINISTRATION International Management",
         "gpa": 3.87
      }
   ],
   "candidateWorkHistory":    [
            {
         "startDate": 1015002000000,
         "endDate": 1188662400000,
         "companyName": "Teen Pop",
         "title": "Pop Software Engineer",
         "comments": "New Millennium Music Corp. Really  How  What"
      },
            {
         "startDate": 665427600000,
         "endDate": 909939600000,
         "companyName": "Nineties Bank of Music Concord",
         "title": "Hip Hop Software Engineer",
         "comments": "MA    Bop  Hop  Hip"
      },
            {
         "startDate": 315594000000,
         "endDate": 628534800000,
         "companyName": "Eighties National",
         "comments": "New Wave Musak  Listen  Like  Learn"
      }
   ],
   "skillList":    [
      "Blowout preventer",
      "FINANCE",
      "MA"
   ]
}
```

The Bullhorn REST API provides a set of operations that parse a resume to Candidate-related data or HRXML. The API also provides operations that convert a resume to HTML or plain text.

<aside class="notice">Before using the REST API, you must perform authorization and authentication. See Getting Started with the Bullhorn REST API for information about obtaining an OAuth 2.0 access token and logging in to the REST API.
</aside>

To return candidate-related data from a parsed resume, we make a `POST` /resume/parseToCandidate REST call.

We attach a .doc resume file named candidate.doc to the request as a multipart/form attachment; in a browser form, this is `<input type="file"/>`. The call returns candidate, candidate education, candidate work history, and skills data.

## Multiple Entities

``` javascript
// https://rest.bullhornstaffing.com/rest-services/e999/entity/Candidate/123,456?fields=id,firstName,lastName
{
    data: [
        {
          "id" : 123,
          "firstName" : "Alanzo",
          "lastName" : "Smith"
        }, {
          "id" : 456,
          "firstName" : "Janis",
          "lastName" : "Williams"
        }
    ]
}
```

This is an extension of the single GET and supports the same result set control parameters (count, start) as the query call. id values are specified as a comma-separated list:
