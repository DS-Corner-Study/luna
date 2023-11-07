import { useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => { 
    if (text.length < 5) {
      textRef.current.focus(); // 다섯 글자보다 적으면 포커스 실행 & 초기화x
    } else {
      alert(text);
      setText(""); 
      // 입력 값 초기화 위해 set 함수인 setText 호출 후 인수로 빈 문자열 전달
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;