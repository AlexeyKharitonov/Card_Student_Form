export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequared":
        statusValidate = data.trim() === "";
        break;

      case "isName": {
        // const nameRegexp = /^[A-Z][a-zA-Z]{2,}$/g;
        // const nameRegexp = /^[А-ЯЁ][а-яё]{2,19}$/;
        // const nameRegexp = /^[A-Za-zА-ЯЁа-яё]{3,19}$/;
        const nameRegexp = /^[A-ZА-ЯЁ][a-zа-яё]{2,19}$/;
        statusValidate = !nameRegexp.test(data);
        break;
      }
      case "isSurName": {
        // const surnNameRegexp = /^[A-Z][a-zA-Z]{2,}$/g;
        // const surnNameRegexp = /^[А-ЯЁ][а-яё]{2,19}$/;
        const surnNameRegexp = /^[A-ZА-ЯЁ][a-zа-яё]{2,19}$/;
        statusValidate = !surnNameRegexp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }

      case "isAge": {
        const ageRegExp = /^(19[1-9][0-9]|200[0-7])$/; // годы рождения студентов 1910 - 2007
        statusValidate = !ageRegExp.test(data);
        break;
      }
      case "isUrl": {
        // const urlRegExp = /^https?:\/\/\S+$/g;
        const urlRegExp = /^https?:\/\/\S+$/;
        // const urlRegExp =
        //   /^[A-Za-zА-ЯЁа-яё\d\s`~!@#$%^&*()_+\-=[\]{}\\|;:'",<.>/?]{3,20}$/;
        // statusValidate = !urlRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
