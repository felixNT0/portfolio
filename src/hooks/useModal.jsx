function useModal() {
  const close = (document.getElementById("showModal").style.display = "none");
  const open = (document.getElementById("showModal").style.display = "block");

  return { close, open };
}

export default useModal;
