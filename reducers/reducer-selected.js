// import all skills ??

export default function (skills = [], action){

    switch (action.type){
            case 'POSITION_SELECTED' :
              return action.payload;
                break;
    }
    return skills;
}
