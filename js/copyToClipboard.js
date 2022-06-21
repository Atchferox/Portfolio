function copy() {
  let copyText = document.getElementById("email");
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    alert("Copied the text: " + copyText.innerHTML);
    return navigator.clipboard.writeText(copyText.innerHTML);
  }
  return Promise.reject('The Clipboard API is not available.');

}

document.getElementById('email').addEventListener('click', copy);