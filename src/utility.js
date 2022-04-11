function isValidUrl(url) {
  return (url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null);
}

export default isValidUrl;
