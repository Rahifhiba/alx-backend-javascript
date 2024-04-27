import signUpUser from "./4-user-promise";

test("signUpUser resolves correctly", () => {
  const successResponse = signUpUser("Bob", "Dylan");
  return expect(successResponse).resolves.toEqual({
    firstName: "Bob",
    lastName: "Dylan",
  });
});