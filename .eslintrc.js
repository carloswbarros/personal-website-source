module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "rules": {
        "indent": [0, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [0, "tab"],
        "react/jsx-indent-props": [0, "tab"],
    }
};