var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      var about_me = JSON.parse(this.responseText);
      document.getElementById("about_me_address").innerHTML=about_me.address;
      document.getElementById("about_me_email").innerHTML=about_me.email;
      document.getElementById("about_me_phone").innerHTML=about_me.phone;
      document.getElementById("about_me_orcid").innerHTML=about_me.orcid;
      document.getElementById("about_me_web_of_science").innerHTML=about_me.web_of_science;
      document.getElementById("about_me_google_scholar").innerHTML=about_me.google_scholar;
      document.getElementById("about_me_reseach_gate").innerHTML=about_me.reseach_gate;
      document.getElementById("about_me_scopus").innerHTML=about_me.scopus;
      document.getElementById("about_me_dblp").innerHTML=about_me.dblp;
      document.getElementById("about_me_linked_in").innerHTML=about_me.linked_in;
  }
};
xhttp1.open("GET", "https://huycv-github-default-rtdb.asia-southeast1.firebasedatabase.app/about-me.json", true);
xhttp1.send();

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      var publication = JSON.parse(this.responseText);
      console.log(publication.product[0].author);
      console.log(publication.product[0].title);
  }
};
xhttp2.open("GET", "https://huycv-github-default-rtdb.asia-southeast1.firebasedatabase.app/publications.json", true);
xhttp2.send();