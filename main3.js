


(function() {
  var textFile = null,
    makeTextFile = function(text) {
      var data = new Blob([text], {
        type: 'text/plain'
      });
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
      textFile = window.URL.createObjectURL(data);
      return textFile;
    };


  var create = document.getElementById('create'),
    textbox = document.getElementById('textbox');

  create.addEventListener('click', function() {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
  }, false);
})();

      let originalFile = "OG";

      document.getElementById('inputfile')
        .addEventListener('change', function() {
        var fr=new FileReader();

          fr.onload = function () {
            //document.getElementById('output').textContent=fr.result;





            originalFile = fr.result;  // put html code into a string

            let index = originalFile.search('<div id="SITE_CONTAINER">');  //finds location of beg of string
            let index2 = originalFile.search('<div id="site-root" class="site-root">'); //finds location of string

            // remove wix banner

            let firstHalf = originalFile.slice(0, index + 25);   // keeps string up to and including the index search
                                                                  // cuts off everything after the div
            let secondHalf = originalFile.slice(index2 + 38);  // this slice has only one param
                                                                // this retns eveything after the 'root' div
            let newFile = firstHalf + secondHalf;

            // remove wix favicon

            //let index3 = originalFile.search('<link rel="icon');
            //let index4 = originalFile.search('<link rel="shortcut icon');
           // let index5 = originalFile.search('<link rel="apple');
            
            //let firstHalf2 = originalFile.slice(0, index3);
            //let secondHalf = originalFile.slice(index3 + 38); 
            //let insert1 = '<!-- ';
            //let insert2 = ' -->';
            //text = text.replaceAll("Cats","Dogs");
            newFile = newFile.replaceAll("https://www.wix.com/favicon.ico","");
            

            //var output = [originalFile.slice(0, index3), insert, originalFile.slice(index3)].join('');

           // var a = "I want apple";
            //var b = " an";
           // var position = 6;
           // var output = [a.slice(0, position), b, a.slice(position)].join('');
           // console.log(output);





            //document.getElementById("box1").innerHTML = index3; 
            //document.getElementById("box2").innerHTML = index4; 
            //document.getElementById("box3").innerHTML = index5; 


            //document.getElementById('box1').textContent = index.toString();
            //document.getElementById('box2').textContent = firstHalf;
            //document.getElementById('box2').textContent = secondHalf;
            document.getElementById('textbox').textContent = newFile;
          }
        fr.readAsText(this.files[0]);
        })
      //document.getElementById('box1').innerHTML = "hello";
