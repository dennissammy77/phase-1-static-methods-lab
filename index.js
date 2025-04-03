class Formatter {
  //add static methods here
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }
  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
    return string
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        // Always capitalize the first word OR words not in the exception list
        if (index === 0 || !exceptions.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word; // Keep exceptions lowercase
      })
      .join(" ");
  }
}