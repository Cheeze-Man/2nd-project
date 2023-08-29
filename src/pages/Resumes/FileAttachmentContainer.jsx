import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './FileAttachmentContainer.scss';

export default function FileAttachmentContainer() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch(`http://127.0.0.1:3000/uploads`, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('파일 업로드 성공:', data);
        })
        .catch(error => {
          console.error('파일 업로드 실패:', error);
        });
    }
  };

  return (
    <div className="fileAttachmentContainer">
      <h1>첨부파일</h1>
      <p className="fileAttachmentMessage">
        경험을 보여줄 수 있는 포트폴리오 / 경력기술서 등을 첨부해보세요. (PDF를
        권장합니다.)
      </p>
      <ul className="selectedFile">
        {selectedFile ? (
          <li>{selectedFile.name}</li>
        ) : (
          <li className="fileIsNull">첨부파일이 비어있습니다.</li>
        )}
      </ul>
      <label className="fileInputButton">
        <input type="file" onChange={handleFileChange} className="fileInput" />
        <button className="addButton">
          <span className="plusMark">+</span>
          첨부파일 추가
        </button>
      </label>
    </div>
  );
}
