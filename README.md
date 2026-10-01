# Music

A historical browser graphics/music experiment, retained for local reference.
`index.html` loads bundled jQuery, Raphael and Snap.svg scripts plus
`jquerytest.js`, which draws a staff, a note and a circle. There is no package
manager, build step or automated test suite.

## Local preview

With Python 3 installed, run this from the checkout:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>; stop with Ctrl-C. Keep private files outside the
served directory. All active script references in `index.html` are local.

For a manual smoke check, confirm the graphics appear, inspect console errors,
and resize the window to check the canvas positioning. Record browser/version
and observed results. A Node syntax check (`node --check jquerytest.js`) is useful
but does not test browser rendering or the bundled libraries.

## Continuation boundary

The bundled libraries are historical copies with no documented update process.
Their age alone does not establish a vulnerability. Confirm whether to revive
this experiment before dependency modernization, recover versions/licenses and
compatibility expectations, and add rendering checks before changing them.
Hosting and a current production use are unverified; do not infer a deployment
target from this repository.
