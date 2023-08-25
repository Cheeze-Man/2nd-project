import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './FileAttachmentContainer.scss';

export default function FileAttachmentContainer() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
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
        <div className="plusIconDiv">
          <FaPlus className="plusIcon" />
        </div>
        <span className="fileInputText">첨부파일 추가</span>
      </label>
    </div>
  );
}
