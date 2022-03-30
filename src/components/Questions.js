import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { questions } from "../assets/data/Questions";
import { url } from "../helpers/url";
import {
  Correct,
  Incorrect,
  QuestionContainer,
  OptionContainer,
} from "../styles/QuestionsStyles";

function Questions({ category }) {
  const navigate = useNavigate();
  const allQuestionsLenght = questions.length;

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/Sprint-2-AG/login");
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

  useEffect(() => {
    if (answerSelect === "") {
      document.getElementById("check").setAttribute("disabled", "disabled");
    }
    console.log(answerSelect);
  }, [answerSelect]);

  const handleChange = (e) => {
    setAnswerSelect(e.target.value);
    document.getElementById("check").removeAttribute("disabled");
  };

  const checkAnswer = () => {
    if (answerSelect === question.correct) {
      setScore(score + 1);
      setAnswerSelect("");
      document.getElementById("correct").style.display = "flex";
    } else {
      setAnswerSelect("");
      document.getElementById("incorrect").style.display = "flex";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";

    if (currentQuestion + 1 < allQuestionsLenght) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion + 1 >= allQuestionsLenght) {
      let account = JSON.parse(localStorage.getItem("account"));
      account[category] = score;
      account.statistics.total += allQuestionsLenght;
      account.statistics.correct += score;
      account.statistics.incorrect += allQuestionsLenght - score;
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
      navigate("/Sprint-2-AG/");
    }
  };

  return (
    <QuestionContainer>
      <h5>{question.question}</h5>
      <Form onSubmit={handleSubmit}>
        <OptionContainer>
          <FormLabel htmlFor="a">{question.a}</FormLabel>
          <FormCheck
            id="a"
            value="a"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </OptionContainer>
        <OptionContainer>
          <FormLabel htmlFor="b">{question.b}</FormLabel>
          <FormCheck
            id="b"
            value="b"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </OptionContainer>
        <OptionContainer>
          <FormLabel htmlFor="c">{question.c}</FormLabel>
          <FormCheck
            id="c"
            value="c"
            name="check"
            type="radio"
            onChange={handleChange}
          ></FormCheck>
        </OptionContainer>
        <Button id="check" onClick={checkAnswer}>
          Comprobar
        </Button>
        <Correct id="correct">
          <h6>¡Buen Trabajo!</h6>
          <Button type="submit">Continuar</Button>
        </Correct>
        <Incorrect id="incorrect">
          <h6>La respuesta correcta es:</h6>
          <p>{question[question.correct]}</p>
          <Button type="submit">Continuar</Button>
        </Incorrect>
      </Form>
    </QuestionContainer>
  );
}

export default Questions;
