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
      <div class="border p-3">
        <div>
          <h2 class="fs-5 fw-semibold mb-3">Home</h2>
        </div>
        <div className="d-flex">
          <img
            src={userImage.image}
            alt="Profile picture default"
            style={{ width: "60px", height: "60px" }}
            className="rounded-circle"
          />
          <form
            className="form-floating flex-fill mx-2"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(createTweet(inputValue));
            }}
          >
            <div>
              <input
                className="input-text "
                placeholder="What's happening?"
                id="tweetContent"
                rows="3"
                name="content"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ border: "0", height: "60px" }}
                required
              />
            </div>

            <div className="d-flex justify-content-end">
              <Button type="submit" className="btn btn-login rounded-pill mt-2">
                Tweet
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewTweet;
