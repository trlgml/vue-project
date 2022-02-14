const privatePhone = function (mobile) {
  let reg = new RegExp('^(\\d{3})\\d{4}(\\d{4})$')
  return mobile.replace(reg, `$1****$2`)
}
export default privatePhone