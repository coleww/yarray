YARRAY
-----------------

given an array, yarray creates html `<input type="text">` elements 1-way bound to each element of the yarray'd array<sup>1</sup>, and returns an update function for switching out the bound array. yarray does this with some pretty awful javascript, i bet it leaks memory or exposes your credit card information or something, i probably should have just used backbone instead of writing this dumb module, idk whatever dgaf MIT LICENSE.

#### -- useful for:
1. COMPLEX DATA ENTRY
2. spreadsheets
3. ...
4. poetry?

it is also pretty sweet that yarray is yarray backwards.

#### EXAMPLE: A PET-NAMING APP

```
    var yarray = require('yarray')
    var catNames = ["mittens", "snowball II", "garfield", "joshua"]
    var dogNames = ["spike", "leon", "santos l. halper", "cocoa butter"]

    var yarr = yarray(catNames)
    console.log(yarr.els) // the bound html elements
    console.log(yarr.update) // a function for switching out the bound array

    yarr.els.forEach(function(el){
      document.body.append(el)
    })

    // time passes, cats are named, business logic is conducted in response to user input.

    yarr.update(dogNames) // now the user can name some dogs! excellent!
```

-----------------------------------------------------------------
1. much like a pirate is bound to the pirate code, hence the "yarr"
