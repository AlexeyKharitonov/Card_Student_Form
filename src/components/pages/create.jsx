import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/textField";
import { validatorConfig } from "../../utils/validatorConfig";
import { ModalButton as Button } from "../ui/modalButton";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    yearOfBirth: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // для disabled
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    localStorage.setItem("student", JSON.stringify(data));
    if (!isValid) return;
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2 shadow p-4">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-3">Создать</h1>
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
              errors={errors.name}
            />
            <TextField
              label="Фамилия"
              name="surname"
              value={data.surname}
              onChange={handleChange}
              type="text"
              errors={errors.surname}
            />
            <TextField
              label="Год рождения"
              name="yearOfBirth"
              value={data.yearOfBirth}
              onChange={handleChange}
              type="number"
              required
              errors={errors.yearOfBirth}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              type="text"
              errors={errors.portfolio}
            />
            <Button disabled={!isValid} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
