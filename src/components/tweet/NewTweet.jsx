import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import createTweet from "../../redux/tweetSlice";
import "./NewTweet.css";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createTweet(inputValue));
        }}
      >
        <input
          className=" p-4 input-text"
          placeholder="example textarea"
          id="exampleControlsTextarea1"
          rows="3"
          name=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" className="btn-input">
          Tweet
        </Button>
      </form>
    </section>
  );
}

export default NewTweet;
