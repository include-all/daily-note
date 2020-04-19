function debounce(fn, wait = 100) {
    let timeout;
    return () => {
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn.apply(this, ...arguments);
        },wait)
    }
}

function throttle(fn, wait = 100) {
    let canRun = true;
    return () => {
        if(!canRun){
            return;
        }
        canRun = false;
        setTimeout(() => {
            fn.apply(this);
            canRun = true;
        },wait)
    }
}


var target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

function clone(target, map = new Map()) {
    console.log(map);
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

clone(target)

function debounce(fn,wait) {
    let timeout;
    return function () {
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        })
    }
}

function throttle(fn,wait) {
    let canrun = true;
    return function () {
        if(!canrun){
            return;
        }
        setTimeout(() => {
            fn.apply(this, arguments)
            canrun = true
        }, wait)
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

//
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};


function flatten(arr) {
    return [...new Set(arr.flat(Infinity))].sort((a, b) => {return a - b})
}
function flatten(arr) {
    return arr.reduce((newArr, item) => {
        return Array.isArray(item) ? [...newArr, ...flatten(item)] : [...newArr, item]
    }, [])
}

var a = {
    value: 1,
    toString(){
        return a.value ++
    }
};
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

function add(a,b) {
  console.log(this)
}