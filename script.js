const fInputs = document.querySelectorAll('.btcd-f-input>div>input')

for (const inp of fInputs) {
    inp.addEventListener('click', function (e) { setPrevData(e) })
    inp.addEventListener('change', function (e) { handleFile(e) })
}
let fileList = new DataTransfer() 
console.log(fileList)
let fName = null
function setPrevData(e) {
    if (e.target.hasAttribute('multiple') && fName !== e.target.name) {
        fName = e.target.name
        fileList = new DataTransfer();
        if (e.target.files.length > 0) {
            for (let i = 0; i < e.target.files.length; i += 1) {
                fileList.items.add(e.target.files[i])
            }
        }
    }
    console.log('prev data',fileList.files);
}
function handleFile(e) {
    const fLen = e.target.files.length;
    console.log('on change', e.target.files, 'len', e.target.files.length,'old file list',fileList.files);
    /* if (e.target.hasAttribute('accept')) {
        let type = e.target.getAttribute('accept')
        if (type === 'image/*') {
            console.log('img')
        } else if (type === 'audio/*') {
            console.log('aufio')
        } else if (type === 'video/*') {
            console.log('video')
        }
    } */
    if (e.target.hasAttribute('multiple')) {
        console.log('beofre loop',e.target.files);
        for (let i = 0; i < fLen; i += 1) {
            fileList.items.add(e.target.files[i])
        }
        console.log('data add from file list',e.target.files,fileList.files);
        e.target.files = fileList.files
        console.log('data add from file list',e.target.files,fileList.files);
    }
    if (fLen > 0) {
        e.target.parentNode.querySelector('.btcd-f-title').innerHTML = fLen + ' File Selected'
        e.target.parentNode.parentNode.querySelector('.btcd-files').innerHTML = ''
        for (let i = 0; i < e.target.files.length; i += 1) {
            let img = null
            if (e.target.files[i].type.match(/image-*/)) {
                img = window.URL.createObjectURL(e.target.files[i])
            }
            else {
                img = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzNTIgNDI5LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1MiA0MjkuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwNEJCNzt9DQo8L3N0eWxlPg0KPHBhdGggZD0iTTQwOC44LDY2Ljh2MzI3LjRjMCwyNy40LDIyLjgsNDkuOCw1MC4zLDQ5LjhoMjM5LjNjMjcuNSwwLDQ5LjgtMjIuMyw0OS44LTQ5LjhWMTE2Yy0wLjEtMi42LTEuMi01LjItMy4xLTdsLTg4LjktODkuMQ0KCWMtMS45LTEuOS00LjQtMi45LTcuMS0yLjloLTE5MEM0MzEuNiwxNyw0MDguOCwzOS40LDQwOC44LDY2Ljh6IE03MTMuOCwxMDUuOUg2ODNjLTYuMywwLTEyLjQtMi41LTE2LjgtNi45DQoJYy00LjUtNC41LTctMTAuNS02LjktMTYuOHYtMzFMNzEzLjgsMTA1Ljl6IE00MjguOCw2Ni44YzAtMTYuNSwxMy45LTI5LjgsMzAuMy0yOS44aDE4MC4ydjQ1LjFjMCwxMS42LDQuNiwyMi43LDEyLjgsMzENCgljOC4yLDguMiwxOS4zLDEyLjgsMzAuOSwxMi44aDQ1LjF2MjY4LjVjMCwxNi41LTEzLjksMjkuOC0zMC4zLDI5LjhINDU5LjFjLTE2LjYsMC0zMC4zLTEzLjQtMzAuMy0yOS44VjY2Ljh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjc3LjIsMTY2LjlIMTMwLjZjLTUuMSwwLTkuMiw0LjEtOS4yLDkuMnM0LjEsOS4yLDkuMiw5LjJoMTQ2LjVjNS4xLDAsOS4yLTQuMSw5LjItOS4xDQoJQzI4Ni40LDE3MSwyODIuMywxNjYuOSwyNzcuMiwxNjYuOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05My41LDE2Ni45SDY2LjRjLTUuMSwwLTkuMiw0LjEtOS4yLDkuMnM0LjEsOS4yLDkuMiw5LjJoMjcuMWM1LjEsMCw5LjItNC4xLDkuMi05LjJTOTguNiwxNjYuOSw5My41LDE2Ni45eiINCgkvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3Ny4yLDI0MC4zSDEzMC42Yy01LjEsMC05LjIsNC4xLTkuMiw5LjJjMCw1LjEsNC4xLDkuMiw5LjIsOS4yaDE0Ni41YzUuMSwwLDkuMi00LjEsOS4yLTkuMQ0KCVMyODIuMywyNDAuNCwyNzcuMiwyNDAuM3oiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05My41LDI0MC4zSDY2LjRjLTUuMSwwLTkuMiw0LjEtOS4yLDkuMmMwLDUuMSw0LjEsOS4yLDkuMiw5LjJoMjcuMWM1LjEsMCw5LjItNC4xLDkuMi05LjINCglDMTAyLjcsMjQ0LjQsOTguNiwyNDAuMyw5My41LDI0MC4zeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3Ny4yLDMxMy44SDEzMC42Yy01LjEsMC05LjIsNC4xLTkuMiw5LjJjMCw1LjEsNC4xLDkuMiw5LjIsOS4yaDE0Ni41YzUuMSwwLDkuMi00LjEsOS4yLTkuMQ0KCUMyODYuNCwzMTgsMjgyLjMsMzEzLjgsMjc3LjIsMzEzLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTMuNSwzMTMuOEg2Ni40Yy01LjEsMC05LjIsNC4xLTkuMiw5LjJjMCw1LjEsNC4xLDkuMiw5LjIsOS4yaDI3LjFjNS4xLDAsOS4yLTQuMSw5LjItOS4yDQoJQzEwMi43LDMxNy45LDk4LjYsMzEzLjgsOTMuNSwzMTMuOHoiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjMsNDEyLjFIODljLTQxLjQsMC03NS0zMy42LTc1LTc1di0yNDVjMC00MS40LDMzLjYtNzUsNzUtNzVoMTQ3LjVjOCwwLDE1LjcsMywyMS42LDguNWw2OSw2My42DQoJCWM2LjksNi4zLDEwLjgsMTUuMywxMC44LDI0Ljd2MjIzLjJDMzM4LDM3OC40LDMwNC40LDQxMi4xLDI2Myw0MTIuMXogTTg5LDM3LjNjLTMwLjIsMC01NC43LDI0LjYtNTQuNyw1NC43djI0NQ0KCQljMCwzMC4yLDI0LjYsNTQuNyw1NC43LDU0LjdoMTc0YzMwLjIsMCw1NC43LTI0LjYsNTQuNy01NC43VjExMy44YzAtMy43LTEuNi03LjMtNC4zLTkuOGwtNjktNjMuNmMtMi4yLTItNS0zLjEtNy45LTMuMUg4OXoiLz4NCjwvZz4NCjwvc3ZnPg0K'
            }
            e.target.parentNode.parentNode.querySelector('.btcd-files').insertAdjacentHTML('beforeend', `<div>
                    <img src="${img}" alt=""  title="${e.target.files[i].name}">
                    <div>
                        <span title="${e.target.files[i].name}">${e.target.files[i].name}</span>
                        <br/>
                        <small>${getFileSize(e.target.files[i].size)}</small>
                    </div>
                    <button type="button" onclick="delItem(this)" data-index="${i}" title="Remove This File">&times;</button>
                </div>`)

        }
    }

}
function getFileSize(size) {
    let _size = size
    let unt = ['Bytes', 'KB', 'MB', 'GB'],
        i = 0; while (_size > 900) { _size /= 1024; i++; }
    return (Math.round(_size * 100) / 100) + ' ' + unt[i];
}
function delItem(el) {
    fileList = new DataTransfer()
    let fInp = el.parentNode.parentNode.parentNode.querySelector('input[type="file"]')
    for (let i = 0; i < fInp.files.length; i++) {
        fileList.items.add(fInp.files[i])
    }
    delete fileList.items.remove(el.getAttribute('data-index'))
    fInp.files = fileList.files
    if (fInp.files.length > 0) {
        el.parentNode.parentNode.parentNode.querySelector('.btcd-f-title').innerHTML = `${fInp.files.length} File Selected`
    } else {
        el.parentNode.parentNode.parentNode.querySelector('.btcd-f-title').innerHTML = 'No File Chosen'
    }
    el.parentNode.remove()
}