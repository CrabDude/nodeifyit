# nodeifyit
Convert an async or promise returning function to a callback accepting function:

#### Use async or promise returning functions:
```node
passport.use(new LocalStrategy(nodeifyit(async (username, password) => {
    if (/* Failure condition */) {
        return [false, {message: 'Invalid username'}]
    }
    return user
}, {spread: true})))
```
#### Where callbacks would normally be required:
```node
passport.use(new LocalStrategy((username, password next) => {
    let promise = async()=>{
        if (/* Failure condition */) {
            next(null [false, {message: 'Invalid username'}]
        }
        return user
   }()
   nodeify(promise, callback)
}, {spread: true})))
```

## Options

#### spread

See `bluebird`'s `.nodeify()` docs.