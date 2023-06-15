let navlinks;

function navbar(type)
{
    if (type === 0)
    {
        navlinks = `<div class="dropdown">
        <a href="#">Products</a>
        <div class="dropdown-content"><a href="./artgen.html">Art Generator</a><a href="./nftmint.html">NFT Minter</a><a href="./store.html">Store Creator</a></div>
    </div>
    <a href="./pricing.html">Pricing</a>
    <a href="./login3.html"><img style="margin-left: 4px;" src="./pictures/png/avatar.png" alt=""></a>`;
    }
    else if (type === 1)
    {
        navlinks = `<a href="index2.html">Home</a>
        <a href="dash2.html">Collection</a>
        <a href="art_gen.html">Art Generator</a>
        <a href="login3.html">Logout</a>`;
    }
    else if (type === 2)
    {
        navlinks = `<a href="index2.html">Home</a>
        <a href="marketplace.html">Marketplace</a>
        <a href="art_gen.html">Art Generator</a>
        <a href="login3.html">Logout</a>`;
    }
    else if (type === 3)
    {
        navlinks = `<div class="dropdown">
        <a href="./index2.html">Home</a>
        <a href="./pricing.html">Pricing</a>
        <a href="./login3.html"><img style="margin-left: 4px;" src="./pictures/png/avatar.png" alt=""></a>`;
    }
    else if (type === 4)
    {
        navlinks = `<a href="index2.html">Home</a>
        <a href="dash2.html">Collection</a>
        <a href="marketplace.html">Marketplace</a>
        <a href="login3.html">Logout</a>`;
    }
    navbartag.innerHTML = `
    <style>
    .logo {
        float: left;
        margin-right: 20px;
        margin-top: 10px;
    }
    
    .navbar {
        overflow: hidden;
        width: auto;
        background-color: #fff;
    }
    
    .navbar-links {
        float: right;
        margin: 20px 20px 0 0;
        padding-bottom: 20px;
    }
    .navbar a {
        display: inline-block;
        padding: 10px;
        text-decoration: none;
        color: #333;
    }
    .navbar a:hover {
        background-color: #f0f0f0;
    }
    .dropdown {
        /*position: relative;*/
        display: inline-block;
        
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: #333;
    }
    .dropdown-content a:hover {
        background-color: #f0f0f0;
    }
    </style>
          <div class="navbar">
    <div class="logo"><a src="./index2.html"><img src="img/logo.webp" alt="NFT Platform" width="100" /></div>
    <div class="navbar-links">
    ${navlinks}
    </div>
  </div>
    `;
    
}