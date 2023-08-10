const sanitizeUserInputString = (input: string) => {
  let sanitizedInput = input
  sanitizedInput = input.toLowerCase().trim()
  sanitizedInput = sanitizedInput.replace(/[^a-zA-Z0-9 ]/g, '')
  // TODO: more sanitizing
  return sanitizedInput
}

export {
  sanitizeUserInputString
}
