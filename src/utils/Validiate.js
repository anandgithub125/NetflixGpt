export const checkValidation = (email, password, name, isSignUp) => {
  // console.log("Email:", email);
  // console.log("Password:", password);
  // console.log("Name:", name);
  // console.log("Is SignUp Mode:", isSignUp);

  const isEmailValid = /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (isSignUp) {
    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null; 
};
