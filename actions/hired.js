export const hired = (hire_value) => {
  console.log("The Hired selected is : ",hire_value);
  return{
      type : 'HIRE_SELECTED',
      payload : hire_value
        }
}
