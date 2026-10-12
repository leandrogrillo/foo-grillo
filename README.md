# Changelog notes

- I already created the base structure in the main.tsx, 2 columns withou any styling. Differently from what I did in the past, i still have this in mind. I will start writing some consts to create the values that I don't want to be hardcoded.
- Now that I have the constants, I will build the basic markup base on those values
- I forgot to add the themes const
- It's missing the three other fields: eventName, holderName and date
- I will create the basic idea of the responsive thinking in mobile first. eventName and holderName side by side on mobile, other fields are stacked and in desktop it follows the spec.
- the submit button is missing
- we have the mark of the form done, next step I will create the the state of the form and create a handler and attach the delegation handler into the change event of the form, the same as I did before.
- ops, found a typo in the Themes const.
- also added the defaultChecked for the radios and defaultValue to the static inputs
- accent color was using the wrong name
- all the fields are working and rendering correct.
- I have almost the main functionality working, now I will do the basic structure of the ticket component.
- Added a small change in the main wrapper, so the mobile form wrapper can have the heigh of the form and a minmax width on desktop
- created tokens for the theme switching with surface, ink and accent
- created integration using css varibles to change the colors correct
- one thing that I'm not sure is if when changing theme, the accent options in the form, should also change together, should it? not sure.
- found another typo in the types for the accent colors object: emeral instead of emerald.
- adding the fonts to finish the typograph in the ticket
- not all the fonts are correctly, it still missing the icons
- time is over, that all that I could do.

## what I could have done better

I got far based on the first try, changing the approach that was: instead of writing all the markup (which took too much time), I created the constants and render the components based on that, it saved me a good amount of time. It is still uncomplete, even using tailwind.

A lot of mixing of css + tailwind, I could thought in a better approach instead of mixing to much, the only part that really makes sense is the dynamic theme changing, so defining the inline variable helps to not write a lot of css.

the submit is still mising, same from the past try.
