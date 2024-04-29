function readFile() {
    let input = document.getElementById('fileInput');
    if (input.files.length > 0) {
        let file = input.files[0];
        let fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = function() {
            var str = fileReader.result;
            let lines = str.split('\n');
            for(var i = 0; i < lines.length; i++ ){
                var cont = document.createElement("div");
                var temp = document.createTextNode(lines[i]);
                cont.appendChild(temp);
                document.getElementById("stampadati").appendChild(cont);
            }
        }
    }
}
