# Mobile app for Spørgetjenesten ("the question service")

In order to build this application you need to check out mui (dbc-svn: skuffe/rje/mui, github: rasmuserik/mui) into the parent directory.
Then the application can be build with either `cd android; ant debug install` or `open ios/AppDBC.xcodeproj` on Android and PhoneGap for xcode has to be installed for the respective platforms.
It is also possible to use phonegap''s build service by uploading the content of `code/*` `code/*/*`.

Directory structure:
- `code` - the application logic itself. For changing the business logic, edit `code/main.js`.
- `android` - Android build environment, for example `ant debug install` build debug version and installs it on the device or emulator
- `ios` - iOSbuild environment, for example `open AppDBC.xcodeproj` opens xcode, where it is possible to build+start emulator

# Architecture beyond this project

This project is about the mobile aplications, but the ecosystem around is _as far as I know_:

- Multible frontends will be implemented, - mobile app is the first one we are
- Frontends are talking with two web services: Open Search and Open Question Service
    - [Open Search](http://oss.dbc.dk/plone/software/open-search) is written primarily in Java
    - Open Question Service, is in development, and maybe implemented in php
- The administrative interface - management and answering of questions - will be implemented in Drupal
    - a prototype already exists afaik
    - Open Question Service is a web service for this one
- Answered questions which will be publicly available is stored in ting/databrond which can accessed through the Open Search web service
- all of it will be open source.
- we are using scrum for the project
