<script>
function search_channels() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('polaroid');
    let y = document.getElementsByClassName('channels');
      
    for (i = 0; i < x.length; i++) { 
        if (!y[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-block";                 
        }
    }
}
</script>
</body>
</html>
