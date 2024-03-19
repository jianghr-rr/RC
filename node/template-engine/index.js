const vm = require('vm');

// 模版的数据
const user = {
    name: '<script />'
}

// 模版引擎的模版
const result = `<h2>${user.name}</h2>`

// 模版的对应关系
const templateMap = {
    templateA: '`<h2>${include("templateB")}</h2>`',
    templateB: '`<p>hahahaha</p>`'
}

const context = {
    include(name) {
        return templateMap[name]()
    },

    _: function(markup) {
        if (!markup) return '';
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
    } 
}

Object.keys(templateMap).forEach(key=> {
    const temp = templateMap[key];

    templateMap[key] = vm.runInNewContext(`
        (function() {return ${temp}})
    `, context);
})

// 实现效果
console.log(templateMap['templateA']());