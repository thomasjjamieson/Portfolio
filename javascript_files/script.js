function currentYear() {
    const dateFooter = document.getElementById('footerWithDate');
    const year = new Date().getFullYear();
    dateFooter.innerHTML = `&copy; Thomas Jamieson, ${year}, United States of America`;
}