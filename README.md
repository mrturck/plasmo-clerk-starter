# Plasmo with Clerk starter project

This repo shows how to use Clerk auth with Plasmo framework for both the popup and content UI approaches. The popup method is configured to use syncSessionWithTab. The content UI method has similar functionality but does not use the syncSessionWithTab prop.

# Initial setup

1. Add environment variables for clerk in both web/ and extension/ (see example env files for details)
2. Install dependencies and run the dev script (plasmo has hot reloading), this will generate a build/ folder

# Load the chrome extension
Install the chrome extension: Go to chrome://extensions, click load unpacked, upload the build/chrome-mv3-dev folder

# Add chrome extension as authorized domain so syncSessionWithTab works

1. Copy the chrome extension id from the chrome extensions page
2. Per the docs at https://clerk.com/docs/pr/1004/references/chrome-extension/syncsessionwithtab-configuration, run the curl command to add the chrome extension as an authorized domain

```
curl  -X PATCH https://api.clerk.com/v1/instance \
      -H "Authorization: Bearer <your clerk api key>" \
      -H "Content-type: application/json" \
      -d '{"allowed_origins": ["chrome-extension://<CHROME_EXTENSION_KEY>"]}'
```

# Run the web server

Go to web/, install deps, and run the dev script

# Use the extension

The extension is configured to work with localhost domains. With the web server running, go to http://localhost:3000. Click on the extension to activate the popup, the session should be synced. Additionally the content UI injects a banner in the top right of the screen that should be synced with your auth status as well (this might require a refresh)
