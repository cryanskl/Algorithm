function render(template,data){
    let computed = template.replace(/\{\{\w+}\}\)/g,function(match, key){
        return data[key];
    });
    return computed;
}