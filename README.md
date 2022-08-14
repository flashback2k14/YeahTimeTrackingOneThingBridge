# YeahTimeTrackingOneThingBridge

Bridge for Yeah! Time tracking and the macos OneThing app (https://sindresorhus.com/one-thing).

## setup launchd

launchd run this script on a scheduled base.

1. config `plist` file

- line 12: set execution time in seconds
- line 15: set path for error log file
- line 18: set path for standard log file
- line 27: set working directory
- line 31: set node path

2. run to copy the plist file (only needed once per machine)

```sh
npm run launchd:init
```

3. run to load the launchd task

```sh
npm run launchd:load
```

4. to unload the launchd task run

```sh
npm run launchd:unload
```

source: https://betterprogramming.pub/schedule-node-js-scripts-on-your-mac-with-launchd-a7fca82fbf02
