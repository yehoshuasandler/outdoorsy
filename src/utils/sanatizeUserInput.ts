const sanitizeUserInputString = (input: string) => {
  let sanitizedInput = input
  sanitizedInput = input.toLowerCase()
  // TODO: more sanitizing
  return sanitizedInput
}

export {
  sanitizeUserInputString
}
