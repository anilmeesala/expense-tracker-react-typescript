const test1 = () => {console.log("test1")};
const test2 = () => {console.log("test2")};

let obj1 = {
    test1,
    test2
};


mapDispatchToProps = (distpatch) => {
    return {...obj1}
};

connect = (mdp) => {

    actualObj = mapDispatchToProps();
    console.log(actualObj)
};
let store= {
    dispatch(actionObj) {
        console.log(actionObj);
    }
};

connect(mapDispatchToProps);
