const getCookie = (name: string) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if the cookie starts with the provided name
    if (cookie.startsWith(name + '=')) {
      // Return the cookie value
      return cookie.substring(name.length + 1);
    }
  }
  // Return null if cookie not found
  return null;
};

export default getCookie;
