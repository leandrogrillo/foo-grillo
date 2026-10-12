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
