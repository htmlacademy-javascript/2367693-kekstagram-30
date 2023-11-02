
// eslint-disable-next-line no-unused-vars
function compareLengthString(stringValue, maxLingth) {
  return stringValue.length <= maxLingth;
}
// Cтрока короче 20 символов
// compareLengthString('проверяемая строка', 20);
// true
// Длина строки ровно 18 символов
// compareLengthString('проверяемая строка', 18);
// true
// Строка длиннее 10 символов
// compareLengthString('проверяемая строка', 10);
// false
// eslint-disable-next-line no-unused-vars
function isPalindrom (rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  let string1 = '';
  for (let i = string.length - 1; i >= 0; i--){
    string1 += string.at(i);
  }
  return string1 === string;
}

//isPpalindrom ('топот')

// Строка является палиндромом
//isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
//isPalindrom('ДовОд'); // true
// Это не палиндром
//isPalindrom('Кекс');  // false
