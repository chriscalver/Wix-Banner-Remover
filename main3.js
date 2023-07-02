


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

        fr.onload=function(){
            //document.getElementById('output').textContent=fr.result;


			originalFile = fr.result;			
			let index = originalFile.search('<div id="SITE_CONTAINER">');
			let index2 = originalFile.search('<div id="site-root" class="site-root">');

			let firstHalf = originalFile.slice(0, index + 25);
			let secondHalf = originalFile.slice(index2 + 38);
			let newFile = firstHalf + secondHalf;
			//document.getElementById("box1").innerHTML = index; 
			//document.getElementById('box1').textContent = index.toString();

			//document.getElementById('box2').textContent = firstHalf;
			//document.getElementById('box2').textContent = secondHalf;
			document.getElementById('textbox').textContent = newFile;




        }
        fr.readAsText(this.files[0]);

        })

//document.getElementById('box1').innerHTML = "hello";
