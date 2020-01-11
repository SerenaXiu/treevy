export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';
  if (email == "thomas.schneider@wien.at" || email == "greta.schneider@wien.at" || email == "wolfgang.beckmann@wien.at" || email == "caroline.weber@wien.at") return '';
  else return 'Wrong email';

  //if (email != "thomas.schneider@wien.at" || email != "greta.schneider@wien.at") return 'Wrong email';
  //else if (email != "wolfgang.beckmann@wien.at") return 'Wrong email';
  //else if (email != "greta.schneider@wien.at") return 'Wrong email';
  //"caroline.weber@wien.at" )

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  if (password != "treevy") return 'Wrong password';

  return '';
};
