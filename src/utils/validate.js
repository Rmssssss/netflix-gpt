
 export const checkValidData=(email,password,name)=>{

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);


    // const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email Is not Valid";
    if(!isPasswordValid) return "Password Is not Valid";
    if(!isNameValid) return "Name is not valid";

    return null;



};
