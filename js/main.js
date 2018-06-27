$(document).ready(function(){
  $(".btn").click(function() {
    add();
  });
  function add() {
   var ndiv = `<p>
       <input type="text">
       <input type="file" id="image">
       <select class="another" ;>
          <option value="Primary" >Primary</option>
          <option value="Secondary" selected>Secondary</option>
       </select>
       <a href="#" onclick="$(this).parent().remove()">Remove</a>
   </p>`
   $(".add").append(ndiv);
 }
});
