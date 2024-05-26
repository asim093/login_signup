import { handleSignup, handlelogin , showLoginForm , showsignupForm} from "./authentication.js";

document.getElementById("signup-button").addEventListener("click", handleSignup);
document.getElementById("login").addEventListener("click", handlelogin);
document.getElementById("idlogin").addEventListener("click", showLoginForm);
document.getElementById("idsignin").addEventListener("click", showsignupForm);






