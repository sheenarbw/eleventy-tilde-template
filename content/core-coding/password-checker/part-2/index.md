---
agile_weight: 3
content_type: project
flavours:
  - any_language
from_repo: content/core-coding/password-checker/part-1
prerequisites:
  - path: content/core-coding/password-checker/part-1
    hard: true
submission_type: continue_repo
tags:
  - logging
title: Add logging to password strength checker
---

In part one of this exercise you created two functions. Now you are going to upgrade that program by adding some logging capabilities.

1. Whenever `passwordIsOk` returns true, log the following message

```
User password is ok
```

Otherwise:

```
User password is not ok
```

The log level of these messages should be `debug`.
Make sure that your messages get printed to the standard output / terminal / console.

Take note, we aren't actually logging the user's password. In general you want to avoid logging sensitive information.

2. Whenever an exception is raised by `passwordIsValid` then log the exact error message.

- The log level should be `error`
- The log should be printed to the standard output / terminal / console
- Error logs should also be stored in a file called `errors.log`
- Your debug logs SHOULD NOT be inside the `error.log` file
- Make sure that you update your .gitignore so that the `error.log` file is not in your repo

Please take note: All your previous tests should all pass.
