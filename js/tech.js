//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const tech = [
    [
        {
            name:"test",
            description:"test",
            requires:[],
            category:"military",
            acquired: false,
            cost:0,
            effect(){}
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"food",
            cost:0,
            acquired: false,
            effect(){}
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"resources",
            cost:0,
            acquired: false,
            effect(){}
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"transportation",
            cost:0,
            acquired: false,
            effect(){}
        }
      
    ],
    [
        {
            name:"test",
            description:"test",
            requires:[[0,0],[0,1]],
            cost:0,
            category:"military",
            acquired: false,
            effect(){}
        },
        {
            name:"test",
            description:"test",
            requires:[[0,3],[0,2]],
            cost:0,
            category:"resources",
            acquired: false,
            effect(){}
        }
    ],
    [
        {
            name:"test",
            description:"test",
            requires:[[1,0],[1,1]],
            cost:0,
            category:"military",
            acquired: false,
            effect(){}
        }
    ],
    
]
