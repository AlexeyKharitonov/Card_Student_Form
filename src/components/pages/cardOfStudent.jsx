import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  displayCurrentAge,
  formatAgeString,
} from "../../utils/displayCurrentAge";

const CardOfStudent = () => {
  const [studentData, setStudentData] = useState(null);
  const string = displayCurrentAge(); //сделал, чтобы передать число в ф-цию formatAgeString

  useEffect(() => {
    const data = localStorage.getItem("student");
    const parsedStudent = JSON.parse(data);
    setStudentData(parsedStudent);
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-8 offset-md-2 shadow p-4">
          <h1 className="mb-3">Карточка студента</h1>
          {studentData ? (
            <>
              <div>
                <div>
                  <span className="fw-bold">Имя: </span>
                  {studentData.name}
                </div>
                <div>
                  <span className="fw-bold">Фамилия: </span>
                  {studentData.surname}
                </div>
                <div>
                  <span className="fw-bold">Год рождения: </span>
                  {studentData.yearOfBirth}{" "}
                  {`(${displayCurrentAge()} ${formatAgeString(string)})`}
                </div>
                <div>
                  <span className="fw-bold">Портфолио: </span>
                  {studentData.portfolio}
                </div>
              </div>
              <button className="btn btn-primary mt-3">
                <Link
                  to="/edit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Редактировать
                </Link>
              </button>
            </>
          ) : (
            <>
              <div>Нет данных</div>
              <button className="btn btn-primary mt-3">
                <Link
                  to="/create"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Добавить
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOfStudent;
