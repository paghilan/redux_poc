export const skillSelect = (skill) => {
  console.log("The skill selected is ",skill.id);
  return{
      type : 'SKILL_SELECTED',
      payload : skill
    }
}
