# Unique PIN Generator

This library provides methods for generating unique _n_ digit PIN numbers.

## Functions

There is one primary globally accessible function that can be imported into any other application from the file `generator.js`.

### generateUniquePin(_existingPins_, _pinLength = 6_)

_existingPins_ - An array of PINs as strings, these represent PINs we do not want to clash with.

_pinLength [optional]_ - An integer representing the length of PIN we want to generate. Defaults to 6 if no value is specified.

_RETURNS_ - A string that contains a unique PIN.

There is a separate file in this repo called `test.js` that contains a simple test function that is used to generate multiple PINs and has a local array of existing PINs that can be populated.

### generatePins(_count_)

_count_ - The number of unique PINs to generate.

_RETURNS_ - An array containing all unique PINs.

For the sake of testing I output the generated PINs as they are generated so that they can be copied into the _existingPins_ global variable.

## Uniqueness

We decide uniqueness of PIN based on a few factors.

- We reject any PIN that contains a sequential sequence of three or more numbers either ascending or descending. _e.g. "123", "654", "987", "012"._

- We reject any PIN that contains any numbers that are repeated directly next to each other more than twice. _e.g. "111333", "195551", "624888"._

- We reject any PIN that contains the same number across the entire PIN four or more times. _e.g. "191117", "558255", "686676"._

- We reject any PIN that contains a matching 3 digit length sequence of characters from any existing PIN. _e.g. existingPins=["182982"] "674298" is rejected as it contains "298" in both PINS._

- We reject any PIN that contains a matching number of identical values from an existing PIN regardless of the order. \*e.g. existingPins=["185644"] "486541" is rejected as it contains the same number each digit in the PIN. 1x"1", 2x"4", 1x"5", 1x"6" and 1x"8".

## Performance

This library will create over 200 unique PINS in about 20 seconds. It is not particularly fast and performance degrades exponentially as we build up a larger number of PINs.

This will absolutely max out a high power 3.7GHz CPU core while running. So isn't very efficient.

## Problems

### Secure PIN Generation

I am using `Math.random()` to generate my PIN numbers. This is known to be not cryptographically secure and should be swapped out with the `crypto` library or another method of generating truly unique numbers.

### Limitations

There is a theoretical limit to the number of PINs this library will generate, that number is around 230. Once we reach this point, the library is very likely to throw an exception as it is unable to create any more unique PINs. Fixing the above problem may help with uniqueness.
