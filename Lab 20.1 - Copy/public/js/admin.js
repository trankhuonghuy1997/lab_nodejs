const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;
  const parentElement = btn.closest("article");
  parentElement.parentNode.removeChild(parentElement);
  console.log(parentElement);
  fetch("/admin/delete-product/" + prodId, {
    method: "DELETE",
    headers: { "csrf-token": csrf },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      parentElement.parentNode.removeChild(parentElement);
    })
    .catch((err) => console.log(err));
};
