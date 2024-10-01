import React, { useState } from "react";
import db from "../database/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
function Form() {
  const [title, setTitle] = useState();
  const [example, setExample] = useState();
  const [image, setImage] = useState();
  const [overview, setOverview] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [n1, setN1] = useState();
  const [qn1, setQn1] = useState();
  const [ans1, setAns1] = useState();
  const [opt1, setOpt1] = useState();
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState();

  const [n2, setN2] = useState();
  const [qn2, setQn2] = useState();
  const [ans2, setAns2] = useState();
  const [opt5, setOpt5] = useState();
  const [opt6, setOpt6] = useState();
  const [opt7, setOpt7] = useState();
  const [opt8, setOpt8] = useState();

  const [n3, setN3] = useState();
  const [qn3, setQn3] = useState();
  const [ans3, setAns3] = useState();
  const [opt9, setOpt9] = useState();
  const [opt10, setOpt10] = useState();
  const [opt11, setOpt11] = useState();
  const [opt12, setOpt12] = useState();

  const [n4, setN4] = useState();
  const [qn4, setQn4] = useState();
  const [ans4, setAns4] = useState();
  const [opt13, setOpt13] = useState();
  const [opt14, setOpt14] = useState();
  const [opt15, setOpt15] = useState();
  const [opt16, setOpt16] = useState();

  const [n5, setN5] = useState();
  const [qn5, setQn5] = useState();
  const [ans5, setAns5] = useState();
  const [opt17, setOpt17] = useState();
  const [opt18, setOpt18] = useState();
  const [opt19, setOpt19] = useState();
  const [opt20, setOpt20] = useState();

  const [mw1, setMw1] = useState();
  const [md1, setMd1] = useState();

  const [mw2, setMw2] = useState();
  const [md2, setMd2] = useState();

  const [mw3, setMw3] = useState();
  const [md3, setMd3] = useState();

  const [mw4, setMw4] = useState();
  const [md4, setMd4] = useState();

  const [mw5, setMw5] = useState();
  const [md5, setMd5] = useState();

  const [mw6, setMw6] = useState();
  const [md6, setMd6] = useState();

  const [mw7, setMw7] = useState();
  const [md7, setMd7] = useState();

  const [mw8, setMw8] = useState();
  const [md8, setMd8] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      example,
      image,
      overview,
      text1,
      text2,
      quiz1: {
        number: n1,
        question: qn1,
        answer: ans1,
        options: [opt1, opt2, opt3, opt4],
      },
      quiz2: {
        number: n2,
        question: qn2,
        answer: ans2,
        options: [opt5, opt6, opt7, opt8],
      },
      quiz3: {
        number: n3,
        question: qn3,
        answer: ans3,
        options: [opt9, opt10, opt11, opt12],
      },
      quiz4: {
        number: n4,
        question: qn4,
        answer: ans4,
        options: [opt13, opt14, opt15, opt16],
      },
      quiz5: {
        number: n5,
        question: qn5,
        answer: ans5,
        options: [opt17, opt18, opt19, opt20],
      },
      memory: [
        { mw1, md1 },
        { mw2, md2 },
        { mw3, md3 },
        { mw4, md4 },
        { mw5, md5 },
        { mw6, md6 },
        { mw7, md7 },
        { mw8, md8 },
      ],
    };

    try {
      await setDoc(doc(db, "budget-basics", "1"), formData);
      console.log("Document written with ID: ", "1");
      alert("Successful!");

      setTitle("");
      setExample("");
      setImage("");
      setOverview("");
      setText1("");
      setText2("");

      setQn1("");
      setAns1("");
      setOpt1("");
      setOpt2("");
      setOpt3("");
      setOpt4("");

      setQn2("");
      setAns2("");
      setOpt5("");
      setOpt6("");
      setOpt7("");
      setOpt8("");

      setQn3("");
      setAns3("");
      setOpt9("");
      setOpt10("");
      setOpt11("");
      setOpt12("");

      setQn4("");
      setAns4("");
      setOpt13("");
      setOpt14("");
      setOpt15("");
      setOpt16("");

      setQn5("");
      setOpt17("");
      setOpt18("");
      setOpt19("");
      setOpt20("");
      setMw1("");
      setMd1("");
      setMw2("");
      setMd2("");
      setMw3("");
      setMd3("");
      setMw4("");
      setMd4("");
      setMw5("");
      setMd5("");
      setMw6("");
      setMd6("");
      setMw7("");
      setMd7("");
      setMw8("");
      setMd8("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Example"
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Overview"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Text 1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Text 2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Quiz Number - 1"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Question - 1"
          value={qn1}
          onChange={(e) => setQn1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Answer - 1"
          value={ans1}
          onChange={(e) => setAns1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 1"
          value={opt1}
          onChange={(e) => setOpt1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 2"
          value={opt2}
          onChange={(e) => setOpt2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 3"
          value={opt3}
          onChange={(e) => setOpt3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 4"
          value={opt4}
          onChange={(e) => setOpt4(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Quiz Number - 2"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Question - 1"
          value={qn2}
          onChange={(e) => setQn2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Answer - 1"
          value={ans2}
          onChange={(e) => setAns2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 1"
          value={opt5}
          onChange={(e) => setOpt5(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 2"
          value={opt6}
          onChange={(e) => setOpt6(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 3"
          value={opt7}
          onChange={(e) => setOpt7(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 4"
          value={opt8}
          onChange={(e) => setOpt8(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Quiz Number - 3"
          value={n3}
          onChange={(e) => setN3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Question - 1"
          value={qn3}
          onChange={(e) => setQn3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Answer - 1"
          value={ans3}
          onChange={(e) => setAns3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 1"
          value={opt9}
          onChange={(e) => setOpt9(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 2"
          value={opt10}
          onChange={(e) => setOpt10(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 3"
          value={opt11}
          onChange={(e) => setOpt11(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 4"
          value={opt12}
          onChange={(e) => setOpt12(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Quiz Number - 4"
          value={n4}
          onChange={(e) => setN4(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Question - 1"
          value={qn4}
          onChange={(e) => setQn4(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Answer - 1"
          value={ans4}
          onChange={(e) => setAns4(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 1"
          value={opt13}
          onChange={(e) => setOpt13(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 2"
          value={opt14}
          onChange={(e) => setOpt14(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 3"
          value={opt15}
          onChange={(e) => setOpt15(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 4"
          value={opt16}
          onChange={(e) => setOpt16(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Quiz Number - 5"
          value={n5}
          onChange={(e) => setN5(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Question - 1"
          value={qn5}
          onChange={(e) => setQn5(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Answer - 1"
          value={ans5}
          onChange={(e) => setAns5(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 1"
          value={opt17}
          onChange={(e) => setOpt17(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 2"
          value={opt18}
          onChange={(e) => setOpt18(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 3"
          value={opt19}
          onChange={(e) => setOpt19(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Quiz Option - 4"
          value={opt20}
          onChange={(e) => setOpt20(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 1"
          value={mw1}
          onChange={(e) => setMw1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 1"
          value={md1}
          onChange={(e) => setMd1(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 2"
          value={mw2}
          onChange={(e) => setMw2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 2"
          value={md2}
          onChange={(e) => setMd2(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 3"
          value={mw3}
          onChange={(e) => setMw3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 3"
          value={md3}
          onChange={(e) => setMd3(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 4"
          value={mw4}
          onChange={(e) => setMw4(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 4"
          value={md4}
          onChange={(e) => setMd4(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 5"
          value={mw5}
          onChange={(e) => setMw5(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 5"
          value={md5}
          onChange={(e) => setMd5(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 6"
          value={mw6}
          onChange={(e) => setMw6(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 6"
          value={md6}
          onChange={(e) => setMd6(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 7"
          value={mw7}
          onChange={(e) => setMw7(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 7"
          value={md7}
          onChange={(e) => setMd7(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Memory Word - 8"
          value={mw8}
          onChange={(e) => setMw8(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Memory Definition - 8"
          value={md8}
          onChange={(e) => setMd8(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
