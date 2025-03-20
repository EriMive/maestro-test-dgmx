
function invalidEmail() {
  return `test@test.com`;
}

function invalidPassword() {
  return `test-password`;
}

function validEmail() {
  return `jeyis75089@cybtric.com`;
}

function validPassword() {
  return `Password123.`;
}

output.validCredentials = {
  validEmail: validEmail(),
  validPassword: validPassword(),
};

output.invalidCredentials = {
  invalidEmail: invalidEmail(),
  invalidPassword: invalidPassword(),
};
