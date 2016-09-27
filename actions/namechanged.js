export const namechanged = (name) => {
  console.log("The Value of Textfield is : ",name);
  return{
      type : 'NAME_CHANGED',
      payload : name
    }
}
