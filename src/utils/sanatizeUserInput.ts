const specialCharactersPattern = /[^a-zA-Z0-9 ]/g

/**
 * Use on freeform text inputs.
 *
 * Never use on any specialized data type such as `Date` or `Number`
 * @param input 
 * @returns sanitizedInput
 */
const sanitizeUserInputString = (input: string): string => {
  let sanitizedInput = input
  sanitizedInput = input.toLowerCase().trim()
  sanitizedInput = sanitizedInput.replace(specialCharactersPattern, '')
  // TODO: more sanitizing

  return sanitizedInput
}

export {
  sanitizeUserInputString
}
