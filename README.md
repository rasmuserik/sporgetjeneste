# Mobile grænseflader til Spørgetjenesten

- `code` - the source of the application
- `android` - Android build environment, for example `ant debug install` build debug version and installs it on the device or emulator
- `ios` - iOSbuild environment, for example `open AppDBC.xcodeproj` opens xcode, where it is possible to build+start emulator

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
