import { useState } from "react";
import React from "react";
import { styled } from "styled-components";
function App() {
  // 미리 보기 저장
  let [mainImg, setMainImg] = useState("");

  // 미리 보기 상태 업데이트
  const setPreviewImg = (event) => {
    var reader = new FileReader();

    // 이미지 파일을 읽기 (이미지 데이터는 etr으로 접근 가능)
    reader.onload = function (event) {
      setMainImg(event.target.result);
    };
    // 파일 읽기가 완료되면 호출(이미지 데이터 접근)
    reader.readAsDataURL(event.target.files[0]);
  };

  // ..생략
  return (
    <div>
      <Stpicture>
        {/* 생략... */}
        {/* 이미지 미리보기 */}
        <div>
          <img alt="메인사진" src={mainImg} style={{ maxWidth: "100px" }}></img>
        </div>
        {/* 생략... */}

        {/* 이미지 업로드 */}
        <div>
          <input
            type="file"
            id="image"
            accept="image/*"
            style={{ border: "solid 1px lightgray", borderRadius: "5px" }}
            onChange={setPreviewImg}
          />
        </div>
      </Stpicture>
    </div>
  );
}

export default App;

const Stpicture = styled.div`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
