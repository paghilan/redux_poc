import A from "../components/A";
import B from "../components/B";
import C from "../components/C";


export default function (value = "select", action){
  console.log("The Value of textfield isn't empty. Therefore enabling it");
    switch (action.type){
            case 'SELECTED' :
                            if(action.payload.length > 0){
                              console.log("The Value of textfield isn't empty. Therefore enabling it");
                                return false;
                            }
                            return true;
                            break;
    }
    return value;
}
