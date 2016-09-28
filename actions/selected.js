export const selected = (skills) => {
  console.log("The Position selected is : ",skills);
  return{
      type : 'POSITION_SELECTED',
      payload : skills
        }
}
