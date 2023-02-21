
# Introduction to Lumin

The fastest way to get to the business insights that matter most! An AI-powered decision intelligence product, Lumin is designed for everyone, to analyze data and share insights in seconds. Lumin instantaneously spots anomalies, trends, and patterns, and reveals insights on why something happened, what changed, what is the impact, and what will come next – and it does so autonomously, without relying on data experts or complex coding skills. Register at - https://lumin.fosfor.com/#/

# What is Lumin SDK?

The Lumin SDK provides what developers need to know step-by-step to successfully integrate Lumin components with their web application in an simple way. Lumin SDK comes with different javascript based library/framework such React, Angular that enables the developers to integrate different Lumin widgets within their existing web application effectively in a secured way. The library provides modular widgets for importing various Lumin functionalities such as Ask, Nudges, Workspace, etc.

# Pre-requisites

Listed below are the pre-requisites for successfull integration with Lumin SDK.

* Developer Console is enabled for your account.

* SDK secret is created in the Developer Console (Please contact Super Admin or Support Team for enabling the SDK secret).

* Ensure the Users of your application are available or added in your Lumin account.

* Your application domain is Whitelisted for the Secret in “Secret Management” section of Developer Console for CORS.

If you want to have custom theme for the Lumin SDK components, make necessary changes in the Developer Console.


## Setting up sample application

Current repo comes with sample integration of Lumin SDK's React version with sample react-based client. Post fulfilling the pre-requisites, setup can be done in two simple steps -

* Clone the lumin-sdk-react-sample-app repo by running `git clone https://github.com/FosforData/lumin-sdk-react-sample-app.git`

* Navigate to root of the current repo and run `npm install`

* Create a `.env` file at the root of repository, and mention below variables. 
```bash
REACT_APP_LUMIN_SDK_DOMAIN = https://sample--dummy-client-instance.lumin.com
REACT_APP_LUMIN_SDK_EMAIL = example@example.com
REACT_APP_LUMIN_SDK_SECRET = samplydummyeRVXPEXkjoYoVtVME4PI29IkOba7u+lPjZx9
REACT_APP_LUMIN_SDK_ENV = dev/prod
```
Note: 
* If you're running it locally, mention `REACT_APP_LUMIN_SDK_ENV=dev`, otherwise it would be `REACT_APP_LUMIN_SDK_ENV=prod`

## CORS

CORS is applicable, if your application intends to access Lumin resources through the Lumin SDK/APIs from your application across origins.

Developers must whitelist your domains in the Developer Console to authorize your application to call Lumin through SDK or API end point and access resources.

Please follow the steps to whitelist domains for CORS.

* Login to your Lumin Instance

* Navigate to Developer Console → Secret Management tab.

* Create Secret if not created and click on Edit for the Secret.

* Add your domain in the Whitelist domain → Save.

Example: If you are hosting your application integrated with Lumin SDK on demo.abc.com then, you must add demo.abc.com to the whitelist domain list to allow CORS.

## CORS

CORS is applicable, if your application intends to access Lumin resources through the Lumin SDK/APIs from your application across origins.

Developers must whitelist your domains in the Developer Console to authorize your application to call Lumin through SDK or API end point and access resources.

Please follow the steps to whitelist domains for CORS.

* Login to your Lumin Instance

* Navigate to Developer Console → Secret Management tab.

* Create Secret if not created and click on Edit for the Secret.

* Add your domain in the Whitelist domain → Save.

Example: If you are hosting your application integrated with Lumin SDK on demo.abc.com then, you must add demo.abc.com to the whitelist domain list to allow CORS.


## Initializing Font Family
After setting .env variables, go to public directory of your application and put below snippet in index.html in <head></head> tag.

```bash
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' />

```

## Authentication

* ### Initializing SDK session
* Make sure you have set the .env variables.
* Wrap your top level App component i.e. App.js or App.jsx with `LuminSDKProvider` as shown
* At login/auth page of your app where you are doing authentication, you need to call `initializeApp` which sets authState for SDK.
* If you want user specific authentication, you need to form a config object consisting of Email and Password and pass this object to `initializeApp()` as parameters while login.
* If you don’t want to use individual user credentials to authenticate, you can simply use `initializeApp()` without any config parameter. SDK will initialize the SDK session with default user credentials that is being provided via env variables.

```bash
//Top level App component
import React from "react";
import { LuminSDKProvider } from "lumin-sdk-react";
function App(props) {
  return (
    <LuminSDKProvider>
      {/*
        Route components here, depending on how your app is structured.
        If using Next.js this would be /pages/_app.js
      */}
    </LuminSDKProvider>
  );
}
```
```bash
//User Credential based login
//Your Login component
import React from "react";
import { useLuminAuth } from "lumin-sdk-react";
function LoginComponent(props) {
  const { authState, initializeApp } = useLuminAuth();
  const [userInfo, setUserInfo] = useState({
    email: null,
    password: null
  });

  //Example
  //Perform some action during login form handling and fetch email and password from input boxes and update your userInfo object.
  //Then supply it to initializeApp(userInfo);

  const onSignIn = async () => {
      initializeApp(userInfo)
      //once you initialize SDK it will change authState from `false` to `true` making LuminSDK intialize successfully.
      //After that you can perform your app authentication.
  }
  return (
    <div>
        {/*
            your form elements...
        */}
        <button onClick={() => onSignIn()}>Sign In</button>
    </div>
  );
}
```
* ### End SDK session
* You can end an active SDK session while logging out from your application simply by calling `endSession()` as shown.

```bash
//Your Navbar component where signout option present
import React from "react";
import { useLuminAuth } from "@lumin/lumin-sdk-react";
function Navbar(props) {
  // Get auth state and re-render anytime it changes
  const { authState, endSession } = useLuminAuth();

  const onSignOut = async () => {
      endSession();
      //endSession will end session of Lumin SDK and will change authState from `true` to `false`
      //After that you can perform signout operation of your app
  }

  return (
    <NavbarContainer>
      <Logo />
      <Menu>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {auth.user ? (
          <Fragment>
            <Link to="/account">Account</Link>
            <Button onClick={() => onSignOut()}>Signout</Button>
          </Fragment>
        ) : (
          <Link to="/signin">Signin</Link>
        )}
      </Menu>
    </NavbarContainer>
  );
}
```

## Enabling Lumin Widgets

* ### AskLumin
You can integrate ask lumin capability with your app easily as shown. Below are few configuration properties which can be passed as required.

| Property  | Type     | Description |
| --------  | -------- | ----------- |
| solutionSelectorGlobal `Optional` | boolean | `Default value - false` Pass true if solution selector is imported as global module. |
| narrativeRequired `Optional` | boolean | `Default value - true` If passed false, narrative will not be displayed with lumin chart results. |
| fullNarrativeRequired `Optional` | boolean | `Default value - true` If passed `false`, full narrative will not be displayed with lumin chart results. Note: Set `fullNarrativeRequired` flag to true only when `narrativeRequired` flag is set to true in order to enable full narrative section. |
| xaiRequired `Optional` | boolean | `Default value - true` If passed false, xai will not be displayed with lumin chart results. |
| footerInfoRequired `Optional` | boolean | `Default value - true` If passed false, more info will not be displayed with lumin chart results. |
| spellCheckRequired `Optional` | boolean | `Default value - true` If passed false, spellcheck flow will be disabled. |
| intelligentSearchRequired `Optional` | boolean | `Default value - true` If passed false, intelligent search toggle button will not be displayed. |
| searchHistoryRequired `Optional` | boolean | `Default value - true` If passed false, search history will not be displayed. |

```bash
import React from 'react';
import { AskLumin } from '@lumin/lumin-sdk-react;
import '@lumin/lumin-sdk-react/dist/lumin-sdk-react.css';

const ExampleComponent = () => {
     return (
         <AskLumin
             solutionSelectorGlobal={false}
             narrativeRequired={true}
             fullNarrativeRequired={true}
             xaiRequired={true}
             footerInfoRequired={true}
             searchHistoryRequired={true}
         />
     );
};

export default ExampleComponent;
```


* ### Workspace
You can integrate Workspace capability with your app easily as shown. Below are few configuration properties which can be passed as required.

| Property  | Type     | Description |
| --------  | -------- | ----------- |
| height `Optional` | number | `Default value - 600` Specify the fixed height for workspace in range of 400 to 900. |
| publishedStoriesRequired `Optional` | boolean | `Default value - true` If passed false, published story will not be shown. |
| sharedWithMeStoriesRequired `Optional` | boolean | `Default value - true` If passed false, shared with me story will not be shown.. |
| viewSingleStory `Optional` | boolean | `Default value - false` Pass it as true only in case of if user want a single story to be viewed as workspace. When it is passed as true, make sure to pass below attributes via `.env` file `REACT_APP_LUMIN_SDK_STORY_ID = 634501c51072173c662a08ea` and  `REACT_APP_LUMIN_SDK_STORY_TYPE = PUBLISHED OR SHARED_WITH_ME` |

```bash
import React from 'react';
import { Workspace } from '@lumin/lumin-sdk-react;
import '@lumin/lumin-sdk-react/dist/lumin-sdk-react.css';

const ExampleComponent = () => {
     return (
         <Workspace
             height={500}
             publishedStoriesRequired={true}
             sharedWithMeStoriesRequired={true}
             viewSingleStory={false}
         />
     );
};

export default ExampleComponent;
```

* ### Nudges
You can integrate Nudges capability with your app easily as shown. Below are few configuration properties which can be passed as required.

| Property  | Type     | Description |
| --------  | -------- | ----------- |
| height `Optional` | number | `Default value - 600` Specify the fixed height for workspace in range of 400 to 900. |
| topNudgesRequired `Optional` | boolean | `Default value - true` If passed false, top nudges view will not be shown. Note: Please ensure to enable any of the view i.e, either `topNudges` view or `allNudges` view. |
| allNudgesRequired `Optional` | boolean | `Default value - false` If passed false, nudge dashboard story will not be shown. Note: Please ensure to enable any of the view i.e, either `topNudges` view or `allNudges` view. |
| topNudgesLimit `Optional` | number | `Default value - 10` Provide any specific number to be shown as result in `topNudges` view, if `topNudgesRequired` is set to be `true`. |

```bash
import React from 'react';
import { Nudges } from '@lumin/lumin-sdk-react;
import '@lumin/lumin-sdk-react/dist/lumin-sdk-react.css';

const ExampleComponent = () => {
     return (
         <Nudges
             height={600}
             topNudgesRequired={true}
             allNudgesRequired={false}
             topNudgesLimit={5}
         />
     );
};

export default ExampleComponent;
```
## Lumin SDK documentation
Visit - https://docs.lumin.fosfor.com/

## Contributor
- [@satyendra10](https://github.com/satyendra10)

## Contributing
Contributions are always welcome!

## 🔗 Links
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/fosfordata)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/showcase/fosfordata/)

![Logo](https://www.fosfor.com/wp-content/uploads/2021/12/logo-new.png)
