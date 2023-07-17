const emailRule = {
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email address'
  },
  required: {
    value: true,
    message: 'Email is required'
  }
}

const fullNameRule = {
  required: {
    value: true,
    message: 'Name is required'
  }
}

const messageRule = {
  required: {
    value: true,
    message: 'Please describe what you are looking for'
  }
}

export { emailRule, fullNameRule, messageRule }