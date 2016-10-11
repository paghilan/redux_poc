export default function (value = "hire", action){
  switch (action.type){
            case 'HIRE_SELECTED' :
              return action.payload;
    }
    return value;
}
