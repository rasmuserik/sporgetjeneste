# Mobile grænseflader til Spørgetjenesten

To build the application, first retrieve dependencies by calling `./update_externals.sh`, and then either `cd android; ant debug install` or `open ios/AppDBC.xcodeproj`.

Directory structure:
- `code` - the source of the application
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
- Answered questions which will be publicly availble is stored in ting/databrond which can accessed through the Open Search web service
- all of it will be open source.
- we are using scrum for the project

# Tasks for sprint 2011-03-14

- Business logic
    - drafted - Identify which api features are needed
    - Implement application flow
    - (Documentation of restrictions of mobile application development environment limitations)
- HTML5 backend for Android/iOS-apps
    - Show a page of widgets
        - support for choice widget
        - support for textarea widget
        - support for lineinput widget
        - support for button widget
        - done - support for text widget
        - done - show the page
    - Support web service requests and responses
    - Callback on user events
    - (persistant storage, ie. for remembering user name etc.)
    - (lazy list widget, ie. for long lists such as previously asked questions etc.)
- Development and deployment infrastructure
    - done - Android phonegap wrapping
    - done - iOS phonegap wrapping
    - public/private-repository (public repository is up and running)
    - (iOS app signing)
    - (testing framework)
    - (module loader framework)
- Design
    - visual design of each widget
    - css implementation of design of each widget
    - HIG conformance
        - each widget
        - user interface polish
            - icon image
            - splash image
            - done - transition coding
        - (different layouts for tablets and mobile devices)
