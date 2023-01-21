//tech is a 2d array. The index of the array determines its level on the tree. To add something to requires, get the level of the object, then the index of it in the array. Category determines the column it'll
//be put on
const tech = [
    [
        {
            name:"test",
            description:"test",
            requires:[],
            category:"military",
            acquired: false
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"food",
            acquired: false
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"resources",
            acquired: false
        },
        {
            name:"test",
            description:"test",
            requires:[],
            category:"transportation",
            acquired: false
        }
      
    ],
    [
        {
            name:"test",
            description:"test",
            requires:[[0,0],[0,1]],
            category:"military",
            acquired: false
        },
        {
            name:"test",
            description:"test",
            requires:[[0,3],[0,2]],
            category:"resources",
            acquired: false
        }
    ],
    [
        {
            name:"test",
            description:"test",
            requires:[[1,0],[1,1]],
            category:"military",
            acquired: false
        }
    ],
    []
    
]
