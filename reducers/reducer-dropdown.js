export default function (value = true, action){
  console.log("The Value of textfield isn't empty. Therefore enabling it");
    switch (action.type){
            case 'NAME_CHANGED' :
                            if(action.payload.length > 0){
                              console.log("The Value of textfield isn't empty. Therefore enabling it");
                                return false;
                            }
                            return true;
                            break;
    }
    return value;
}
