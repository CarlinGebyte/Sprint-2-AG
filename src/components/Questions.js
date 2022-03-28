import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { questions } from "../assets/data/Questions";
import { url } from "../helpers/url";

function Questions({ category }) {
  const navigate = useNavigate();
  const allQuestionsLenght = questions.length;

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const initialState = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correct: "",
  };
  const [score, setScore] = useState(0);
  const [answerSelect, setAnswerSelect] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(initialState);
  useEffect(() => {
    setQuestion(questions[currentQuestion]);
  }, [currentQuestion]);

  const handleChange = (e) => {
    setAnswerSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answerSelect === question.correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < allQuestionsLenght) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion + 1 === allQuestionsLenght) {
      let account = JSON.parse(localStorage.getItem("account"));
      console.log(account);
      console.log(category);
      account.category = score;
      console.log(account);

      const id = account.id;
      localStorage.setItem("account", JSON.stringify(account));
      axios
        .put(url + id, account)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setCurrentQuestion(0);
      setScore(0);
      navigate("/");
    }
    e.target.reset();
    setAnswerSelect("");
  };

  return (
    <div>
      <h5>{question.question}</h5>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="a">{question.a}</FormLabel>
          <FormCheck
            id="a"
            value="a"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="b">{question.b}</FormLabel>
          <FormCheck
            id="b"
            value="b"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="c">{question.c}</FormLabel>
          <FormCheck
            id="c"
            value="c"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </FormGroup>
        <Button type="submit">Comprobar</Button>
      </Form>
    </div>
  );
}

export default Questions;
