# TS Export Try

We have problems with a file with too many exports in TS, this repo illustrates the issue.

```sh
npm install && node ./generate && npx tsc # -> RangeError: Maximum call stack size exceeded
```
