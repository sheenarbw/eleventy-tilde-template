---
title: "Compound interest"
permalink: "content/compound-interest/"

date: "2016-01-01T06:00-06:00"
value: "/{{ page.date | date: '%Y/%m/%d' }}/index.html"

mySlug: this-is-a-new-path
value2: "subdir/{{ mySlug }}/index.html"
---

Value prints: {{ value }} <br/>
But we expect: {{ page.date | date: '%Y/%m/%d' }}/index.html <br/>


value2 = {{ value2 }}
{{ page.filePathStem | removeLastPathElement }}/

```
some code
blah
```

{% image "https://miro.medium.com/max/700/1*TG8yT-bltiG0FcRpx3YkRA.jpeg" "2SPACE!" "50vw, 100vw"%}

{% youtube "xAIerfe3m8U" %}


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.