import _ from 'lodash';

let appName = "List Application";
import data from '../../data/data.json';

let size = _.size(data.list);

for (let i = 0; i < size; i++) {
    appName += `<div onclick="javascript:window.location.href='?list_id=${data.list[i].id}'">${data.list[i].title}</div>`
}
appName += `Size: ${size}`;


document.getElementById("app-list").innerHTML = appName