const header = document.querySelector("header");
const footer = document.querySelector("footer");


// Header HTML to be used on every page
header.innerHTML = `
 <nav>
    <ul>
        <li><a href=index.html>Home</a></li>
        <li><a href=career.html>Career</a></li>
        <li><a href=hobbies.html>Hobbies</a></li>
        <li><a href=dogs.html>Dogs</a></li>
        <li><a href=contact.html>Contact</a></li>
    </ul>
</nav>`

// Footer HTML to be used on every page
footer.innerHTML = `
<p>Send me an <a href=mailto:jklenke@bu.edu>email</a> and say hi!</p>
`