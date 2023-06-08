import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import createTweet from "../../redux/tweetSlice";
import { useSelector } from "react-redux";
import "./NewTweet.css";

function NewTweet() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const userImage = useSelector((state) => state.user);

  return (
    <section>
      <div className="d-flex">
        <div>
          <img
            src={userImage.image}
            alt="Profile picture default"
            style={{ width: "50px", height: "50px" }}
            className="rounded-circle"
          />
        </div>
        <form
          className="form-floating flex-fill mx-2"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(createTweet(inputValue));
          }}
        >
          <div>
            <input
              className=" p-4 input-text"
              placeholder="example textarea"
              id="exampleControlsTextarea1"
              rows="3"
              name=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-login rounded-pill mt-2">
              Tweet
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewTweet;
