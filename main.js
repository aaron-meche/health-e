function main() {
    console.log('Hello, there');
    let data = JSON.parse(localStorage['user']);
    console.log(data);
    localStorage['user'] = profile;
}

function ObjToString(object) {
    return JSON.stringify(object);
}

function StringToObj(name) {
    return JSON.parse(name);
}

let profile = {
    username: 'aaron',
    password: 'ginger',
}