export const validatorConfig = {
  name: {
    isRequared: {
      message: "Поле 'Имя' обязательно для заполнения",
    },
    isName: {
      message: "Поле 'Имя' введено некорректно",
    },
    min: {
      message: "Имя должно состоять минимум из 3 символов",
      value: 3,
    },
  },
  surname: {
    isRequared: {
      message: "Поле 'Фамилия' обязательно для заполнения",
    },
    isSurName: {
      message: "Поле 'Фамилия' введено некорректно",
    },
    min: {
      message: "Фамилия должна состоять минимум из 3 символов",
      value: 3,
    },
  },
  yearOfBirth: {
    isRequared: {
      message: "Поле 'Год рождения' обязательно для заполнения",
    },
    isAge: {
      message: "Имя 'Год рождения' введено некорректно",
    },
  },
  portfolio: {
    isRequared: {
      message: "Поле 'Портфолио' обязательно для заполнения",
    },
    isUrl: {
      message: "Имя 'Портфолио' введено некорректно",
    },
  },
};
