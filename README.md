# PWA with Lightning Web Components and Workbox

Sample application showing a Progressive Web App (PWA) built with [Lightning Web Components](https://lwc.dev) and the [Workbox](https://developers.google.com/web/tools/workbox) toolkit.

This sample application demonstrates how to buid an app that works offline and can be installed on your desktop or on the home screen of your local device.

Check out [this blog post](http://developer.salesforce.com/blogs/2020/04/how-to-pwa-offline-lwc.html) for more information.

## Installation Instructions

1. Clone this repository
    ```
    git clone https://github.com/ccoenraets/lwc-pwa-demo
    cd lwc-pwa-demo
    ```

1. Install the dependencies
    ```
    npm install
    ```

1. Build the application
    ```
    npm run build:development
    ``` 
    or (production build):
    ```
    npm run build
    ``` 

1. Start the server
    ```
    node server
    ```

1. Access the application at [http://localhost:3001](http://localhost:3001)

Follow the steps in [this blog post](http://developer.salesforce.com/blogs/2020/04/how-to-pwa-offline-lwc.html) to work offline and install the application on your desktop.