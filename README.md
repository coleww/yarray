YARRAY
-----------------

1.5 way data-binding between an array and some dom inputs.

given an array, yarray creates html `<input type="text">` elements bound to each element of the yarray'd array<sup>1</sup>, and returns an update function for switching the bound array.

## -- useful for:
### // COMPLEX DATA ENTRY \\\\
### // spreadsheets \\\\
### // ... \\\\
### // poetry? \\\\

it is also pretty sweet that yarray is yarray backwards.

EXAMPLE: A PET-NAMING APP
> var catNames = ["mittens", "snowball II", "garfield", "joshua"]
> var dogNames = ["spike", "leon", "santos l. halper", "cocoa butter"]
> var yarr = yarray(catNames)
> yarr.els.forEach(el => document.body.append(el))
> // time passes, cats are named, business logic is carried out in response to other user input.
> yarr.update(dogNames)
> // now the user can name some dogs! excellent!



-----------------------------------------------------------------
1. much like a pirate is bound to the pirate code, hence the "yarr"
