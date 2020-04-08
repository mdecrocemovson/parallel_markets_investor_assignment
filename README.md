This web app is used to input an investors information and an accompanying file.

Getting started

In one terminal instance run:
```
$ cd backend
$ bundle install
$ bundle exec rake:db create
$ bundle exec rake:db migrate
$ rails server
```

In another terminal instance, run:
```
$ cd ..
$ yarn start
```

Features created:
1. Form to input Investor first name, Investor last name, Investor date of birth, Investor phone number, Investor street address, Investor state, Investor zip code
2. Use of 'react-select-us-states' package
3. Form validation
4. Persisting of form data to backend API (Ruby on Rails)
5. Ability to input files and have them converted into base64 via 'react-file-base64' package, then persisted to database.
6. Use of SCSS to style form
7. Use of react-bootstrap to style inputs, form, and modal.

Desired future features (could not be implemented due to time constraint)
1. Use of form validator such as formik
2. Use of google maps dropdown package to add addresses (https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)
3. Improving of styling in modal.
4. Adding in carrierwave ruby gem full functionality in order to add files in full form, rather than in base64 package
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
5. Authentication and authorization capabilities


